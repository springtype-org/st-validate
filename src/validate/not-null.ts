import {getParameterValidateDecorator} from "../function/get-parameter-validate-decorator";
import {validatorNameFactory} from "../function/validator-name-factory";

export const NOT_NULL = 'not-null';

// decorator @NotNull
export const NotNull = () => getParameterValidateDecorator(not_null, NOT_NULL);

export const not_null = validatorNameFactory((value: any): boolean => null !== value, NOT_NULL);
