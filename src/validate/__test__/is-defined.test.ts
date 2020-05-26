import {isDefined} from "../is-defined";

describe('IsDefined', () => {
    it('valid', () => {
        expect(isDefined(new Date())).toEqual(true);
        expect(isDefined(null)).toEqual(true);
    });
    it('invalid', () => {
        expect(isDefined(undefined)).toEqual(false);
    });
});