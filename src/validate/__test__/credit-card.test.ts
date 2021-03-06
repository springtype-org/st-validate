import {creditCard} from "../index";

describe('CreditCard', () => {
    it('valid', () => {
        expect(creditCard('49927398716')).toBeTruthy();
        expect(creditCard('4485297637724400')).toBeTruthy();
        expect(creditCard('4485727825149861')).toBeTruthy();
        expect(creditCard('4929847923249092')).toBeTruthy();
        expect(creditCard('4024007185078382')).toBeTruthy();
        expect(creditCard('4024007149721325')).toBeTruthy();
        expect(creditCard('5161006306455396')).toBeTruthy();
        expect(creditCard('5252831751664014')).toBeTruthy();
        expect(creditCard('5109346796537161')).toBeTruthy();
        expect(creditCard('5391037036267084')).toBeTruthy();
        expect(creditCard('5138349638623392')).toBeTruthy();
        expect(creditCard('6011227287427713')).toBeTruthy();
        expect(creditCard('6011004888550312')).toBeTruthy();
        expect(creditCard('6011629938837598')).toBeTruthy();
        expect(creditCard('6011657675059423')).toBeTruthy();
        expect(creditCard('6011648593100068')).toBeTruthy();
        expect(creditCard('348601050374293')).toBeTruthy();
        expect(creditCard('374783347619412')).toBeTruthy();
        expect(creditCard('340534805505168')).toBeTruthy();
        expect(creditCard('371993993100368')).toBeTruthy();
        expect(creditCard('371523710389968')).toBeTruthy();
        expect(creditCard('123456789007')).toBeTruthy();
        expect(creditCard('123456789015')).toBeTruthy();
        expect(creditCard('123456789023')).toBeTruthy();
        expect(creditCard('123456789031')).toBeTruthy();
        expect(creditCard('123456789049')).toBeTruthy();
        expect(creditCard('123456789056')).toBeTruthy();
        expect(creditCard('123456789064')).toBeTruthy();
        expect(creditCard('123456789072')).toBeTruthy();
        expect(creditCard('123456789080')).toBeTruthy();
        expect(creditCard('123456789098')).toBeTruthy();
        expect(creditCard('123456789106')).toBeTruthy();
        expect(creditCard('123456789114')).toBeTruthy();
        expect(creditCard('123456789122')).toBeTruthy();
        expect(creditCard('123456789130')).toBeTruthy();
        expect(creditCard('123456789148')).toBeTruthy();
        expect(creditCard('123456789155')).toBeTruthy();
        expect(creditCard('123456789163')).toBeTruthy();
        expect(creditCard('123456789171')).toBeTruthy();
        expect(creditCard('123456789189')).toBeTruthy();
        expect(creditCard('123456789197')).toBeTruthy();
        expect(creditCard('123456789205')).toBeTruthy();
        expect(creditCard('123456789213')).toBeTruthy();
        expect(creditCard('123456789221')).toBeTruthy();
        expect(creditCard('123456789239')).toBeTruthy();
        expect(creditCard('123456789247')).toBeTruthy();
        expect(creditCard('123456789254')).toBeTruthy();
        expect(creditCard('123456789262')).toBeTruthy();
        expect(creditCard('123456789270')).toBeTruthy();
        expect(creditCard('123456789288')).toBeTruthy();
        expect(creditCard('123456789296')).toBeTruthy();
        expect(creditCard('123456789304')).toBeTruthy();
        expect(creditCard('123456789312')).toBeTruthy();
        expect(creditCard('123456789320')).toBeTruthy();
        expect(creditCard('123456789338')).toBeTruthy();
        expect(creditCard('123456789346')).toBeTruthy();
        expect(creditCard('123456789353')).toBeTruthy();
        expect(creditCard('123456789361')).toBeTruthy();
        expect(creditCard('123456789379')).toBeTruthy();
        expect(creditCard('123456789387')).toBeTruthy();
        expect(creditCard('123456789395')).toBeTruthy();
        expect(creditCard('123456789403')).toBeTruthy();
        expect(creditCard('123456789411')).toBeTruthy();
        expect(creditCard('123456789429')).toBeTruthy();
        expect(creditCard('123456789437')).toBeTruthy();
        expect(creditCard('123456789445')).toBeTruthy();
        expect(creditCard('123456789452')).toBeTruthy();
        expect(creditCard('123456789460')).toBeTruthy();
        expect(creditCard('123456789478')).toBeTruthy();
        expect(creditCard('123456789486')).toBeTruthy();
        expect(creditCard('123456789494')).toBeTruthy();
        expect(creditCard('123456789502')).toBeTruthy();
        expect(creditCard('123456789510')).toBeTruthy();
        expect(creditCard('123456789528')).toBeTruthy();
        expect(creditCard('123456789536')).toBeTruthy();
        expect(creditCard('123456789544')).toBeTruthy();
        expect(creditCard('123456789551')).toBeTruthy();
        expect(creditCard('123456789569')).toBeTruthy();
        expect(creditCard('123456789577')).toBeTruthy();
        expect(creditCard('123456789585')).toBeTruthy();
        expect(creditCard('123456789593')).toBeTruthy();
        expect(creditCard('123456789601')).toBeTruthy();
        expect(creditCard('123456789619')).toBeTruthy();
        expect(creditCard('123456789627')).toBeTruthy();
        expect(creditCard('123456789635')).toBeTruthy();
        expect(creditCard('123456789643')).toBeTruthy();
        expect(creditCard('123456789650')).toBeTruthy();
        expect(creditCard('123456789668')).toBeTruthy();
        expect(creditCard('123456789676')).toBeTruthy();
        expect(creditCard('123456789684')).toBeTruthy();
        expect(creditCard('123456789692')).toBeTruthy();
        expect(creditCard('123456789700')).toBeTruthy();
        expect(creditCard('123456789718')).toBeTruthy();
        expect(creditCard('123456789726')).toBeTruthy();
        expect(creditCard('123456789734')).toBeTruthy();
        expect(creditCard('123456789742')).toBeTruthy();
        expect(creditCard('123456789759')).toBeTruthy();
        expect(creditCard('123456789767')).toBeTruthy();
        expect(creditCard('123456789775')).toBeTruthy();
        expect(creditCard('123456789783')).toBeTruthy();
        expect(creditCard('123456789791')).toBeTruthy();
        expect(creditCard('123456789809')).toBeTruthy();
        expect(creditCard('123456789817')).toBeTruthy();
        expect(creditCard('123456789825')).toBeTruthy();
        expect(creditCard('123456789833')).toBeTruthy();
        expect(creditCard('123456789841')).toBeTruthy();
        expect(creditCard('123456789858')).toBeTruthy();
        expect(creditCard('123456789866')).toBeTruthy();
        expect(creditCard('123456789874')).toBeTruthy();
        expect(creditCard('123456789882')).toBeTruthy();
        expect(creditCard('123456789890')).toBeTruthy();
        expect(creditCard('123456789908')).toBeTruthy();
        expect(creditCard('123456789916')).toBeTruthy();
        expect(creditCard('123456789924')).toBeTruthy();
        expect(creditCard('123456789932')).toBeTruthy();
        expect(creditCard('123456789940')).toBeTruthy();
        expect(creditCard('123456789957')).toBeTruthy();
        expect(creditCard('123456789965')).toBeTruthy();
        expect(creditCard('123456789973')).toBeTruthy();
        expect(creditCard('123456789981')).toBeTruthy();
        expect(creditCard('123456789999')).toBeTruthy();
        expect(creditCard('4111111111111111')).toBeTruthy();
        expect(creditCard('4111-1111-1111-1111')).toBeTruthy();
    });
    it('invalid', () => {
        expect(creditCard('1445-5789-981')).toEqual(false);
    });
});
