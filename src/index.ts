import { IValidator } from "./interface/i-validator";
import { AssertValidator } from "./validator/assert";
import { PrintValidator } from "./validator/print";
import { IValidationOptions } from "./interface/i-validation-options";

export { registerValidation as validate } from "./function/register-validation";
export { validatorNameFactory, VALIDATOR_NAME } from "./function/validator-name-factory";
export { validation } from "./decorator/validation";

export * from "./validate/index";

export const ASSERT_VALIDATOR: IValidator = new AssertValidator(console.error);
export const VALIDATOR_DEFAULT = ASSERT_VALIDATOR;
export const PRINT_VALIDATOR: IValidator = new PrintValidator(console.error);
export const VALIDATOR_OPTIONS_DEFAULT: IValidationOptions = { required: true };

export const VALIDATION_METHOD_PARAMNAMES_METADATA = "ParamNames";
export const VALIDATION_DECORATOR_METADATA_KEY = "Validation";
