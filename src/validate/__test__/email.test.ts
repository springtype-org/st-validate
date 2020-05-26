import {email} from "../email";

describe('Email', () => {
    it('valid', () => {
        expect(email('support@springtype.org')).toEqual(true);
        expect(email('m.mansi1@springtype.org')).toEqual(true);
        expect(email('me@opx.org.io')).toEqual(true);
    });
    it('invalid', () => {
        expect(email('')).toEqual(false);
        expect(email('name_part@domain_part')).toEqual(false);
        expect(email('name@1@example.com')).toEqual(false);
        expect(email('nfoo@bar@machine')).toEqual(false);
        expect(email('nf\\oo@bar@machine')).toEqual(false);
    });
});