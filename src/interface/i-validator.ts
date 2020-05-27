import { IValidationResult } from "./i-validation-result";

export interface IValidator {
  validate(result: Array<IValidationResult>, instance: any): void;
}
