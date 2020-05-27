import { IValidationResult } from "./i-validation-result";

export interface IValidationLifecycle {
  onValid(validationResult: IValidationResult): void;
  onInvalid(validationResult: IValidationResult): void;
}
