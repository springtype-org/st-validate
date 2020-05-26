import {getParameterValidateDecorator} from "../function/get-parameter-validate-decorator";
import {validatorNameFactory} from "../function/validator-name-factory";

export const IS_DEFINED = 'defined';

// decorator @IsDefined
export const IsDefined = () => getParameterValidateDecorator(isDefined, IS_DEFINED);

export const isDefined = validatorNameFactory((value: any): boolean => {
    return typeof value !== 'undefined';
}, IS_DEFINED);
