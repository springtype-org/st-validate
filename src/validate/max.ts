import {validatorNameFactory} from "../function/validator-name-factory";
import {getParameterValidateDecorator} from "../function/get-parameter-validate-decorator";

const MAX = 'max';

export const Max = (maximum: number) => getParameterValidateDecorator(max(maximum), MAX);

export const max = (maximum: number | Date) => validatorNameFactory((value: number | Date): boolean => {
    if (typeof value === 'number' || value instanceof Date) {
        return value <= maximum;
    }
    return false;
}, MAX);

