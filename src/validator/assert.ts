import {IValidator} from "../interface/ivalidator";
import {ValidationResult} from "../interface/ivalidation-result";
import {getValidationErrorMessage} from "../function/get-validation-error-message";

export class AssertValidator implements IValidator {

    constructor(private error: (message?: any, ...optionalParams: any[]) => void) {
    }

    validate(errors: Array<ValidationResult>): void {
        this.error(errors.map(getValidationErrorMessage).join(' '))
    }
}
