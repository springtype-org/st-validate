import {getParameterValidateDecorator} from "../function/get-parameter-validate-decorator";
import {validatorNameFactory} from "../function/validator-name-factory";
import {minLength} from "./min-length";

export const NOT_EMPTY = 'not-empty';

// decorator @NotEmpty
export const NotEmpty = () => getParameterValidateDecorator(validateNotEmpty, NOT_EMPTY);

export const validateNotEmpty = validatorNameFactory((value: string | Array<any>): boolean => {
    return minLength(1)(value);
}, NOT_EMPTY);
