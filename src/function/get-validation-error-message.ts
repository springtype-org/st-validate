import { IValidationResult } from "../interface/i-validation-result";

export const getValidationErrorMessage = (error: IValidationResult): string => {
  return `@${error.validatorName} in class ${error.className}:${error.methodName}(...): Method parameter (name=${error.argumentName}, index=${error.index}) is invalid (value=${error.input})`;
}
