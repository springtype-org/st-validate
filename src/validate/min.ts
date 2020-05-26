import {validatorNameFactory} from "../function/validator-name-factory";
import {getParameterValidateDecorator} from "../function/get-parameter-validate-decorator";

const MIN = 'min';

export const Min = (minimum: number) => getParameterValidateDecorator(min(minimum), MIN);

export const min = (minimum: number | Date) => validatorNameFactory((value: number | Date): boolean => {
    if (typeof value === 'number' || value instanceof Date) {
        return value >= minimum;
    }
    return false;
}, MIN);

