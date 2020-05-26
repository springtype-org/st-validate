import { IValidator } from "../interface/ivalidator";
import { VALIDATOR_DEFAULT, VALIDATION_DECORATOR_METADATA_KEY } from "..";
import { registerValidation } from "../function/register-validation";

export const validation = (validator: IValidator = VALIDATOR_DEFAULT) =>
    <T extends { new(...args: any[]): {} }>(ctor: T) => {

        for (const propertyName of Object.keys(ctor.prototype[VALIDATION_DECORATOR_METADATA_KEY])) {
            const descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);

            if (descriptor && typeof ctor.prototype[propertyName] == "function") {
                registerValidation(validator).apply(null, [ctor.prototype, propertyName, descriptor]);
                Object.defineProperty(ctor.prototype, propertyName, descriptor);
            }
        }
        return ctor;
    };
