import {IValidator} from "../interface/i-validator";

import {IValidationResult} from "../interface/i-validation-result";
import {getValidationErrorMessage} from "../function/get-validation-error-message";


export class PrintValidator implements IValidator {
    constructor(private error: (message?: any, ...optionalParams: any[]) => void) {
    }

    validate(errors: Array<IValidationResult>): void {
        this.error(errors.map(getValidationErrorMessage).join(' '))
    }
}
