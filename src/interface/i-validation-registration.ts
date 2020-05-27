import { IValidateFunction } from "./i-validate-function";

export interface IValidationRegistration {
  parameterIndex: number;
  validateFn: IValidateFunction;
  validatorName: string;
}
