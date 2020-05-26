import { IValidator } from "../interface/ivalidator";
import { VALIDATOR_DEFAULT, VALIDATION_DECORATOR_METADATA_KEY } from "..";
import { IValidationRegistration } from "../interface/ivalidation-registration";
import { getDecoratorParamNames } from "./get-decorator-param-names";
import { ValidationResult } from "../interface/ivalidation-result";

export const registerValidation = (validator: IValidator = VALIDATOR_DEFAULT) =>
    (prototype: any, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {

        let method = descriptor.value;

        const paramNames = getDecoratorParamNames(prototype[methodName]);

        descriptor.value = function() {

            const validationRegistrations: Array<IValidationRegistration> = prototype[VALIDATION_DECORATOR_METADATA_KEY][methodName] || [];
            const errors: Array<ValidationResult> = [];

            for (const validationRegistration of validationRegistrations) {

                const parameterIndex = validationRegistration.parameterIndex;
                const input = arguments[parameterIndex];
                if (!validationRegistration.validateFn(input)) {
                    errors.push({
                        argumentName: paramNames[parameterIndex],
                        index: parameterIndex,
                        methodName,
                        className: (this.constructor as any).name,
                        input: arguments[parameterIndex],
                        validatorName: validationRegistration.validatorName
                    })
                }
            }
            if (errors.length > 0) {
                validator.validate(errors, this);
            } else {
                return method.apply(this, arguments);
            }
        }
    };
