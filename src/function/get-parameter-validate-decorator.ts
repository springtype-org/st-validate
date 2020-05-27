import { IValidateFunction } from "../interface/i-validate-function";
import { IValidationRegistration } from "../interface/i-validation-registration";
import { VALIDATION_DECORATOR_METADATA_KEY } from "..";

export const getParameterValidateDecorator = (validateFn: IValidateFunction, validateName: string): ParameterDecorator => {
  return (ctor: any, methodName: string | symbol, parameterIndex: number) => {

    if (!ctor[VALIDATION_DECORATOR_METADATA_KEY]) {
      ctor[VALIDATION_DECORATOR_METADATA_KEY] = {};
    }

    const validationRegistrations: Array<IValidationRegistration> = ctor[VALIDATION_DECORATOR_METADATA_KEY][methodName] || [];

    ctor[VALIDATION_DECORATOR_METADATA_KEY][methodName] = validationRegistrations.concat({
      parameterIndex,
      validateFn,
      validatorName: validateName
    });
  };
};
