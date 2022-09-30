const {expect} = require('chai');
const rgbToHexColor = require('./rgbToHex');

describe('Demo test', () => {
    it('returns undefined due to invalid lower parameter', () => {
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
    });
    it('returns undefined due to invalid upper parameter', () => {
        expect(rgbToHexColor(256,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;
    });
    it('returns undefined due to invalid parameter string', () => {
        expect(rgbToHexColor('1',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'1',0)).to.be.undefined;
        expect(rgbToHexColor(0,0,'1')).to.be.undefined;
    });
    it('returns undefined due to invalid parameter float', () => {
        expect(rgbToHexColor(1.1,0,0)).to.be.undefined;
        expect(rgbToHexColor(0,1.1,0)).to.be.undefined;
        expect(rgbToHexColor(0,0,1.1)).to.be.undefined;
    });
    it('returns undefined due to missing parameters', () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });
    it('converts black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('converts white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

});