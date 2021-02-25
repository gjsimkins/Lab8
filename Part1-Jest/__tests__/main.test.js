const format = require('../assets/scripts/main');
describe('formatVolumeIconPath', () => {
    test('> 66', () => {
        expect(format(67)).toMatch(`./assets/media/icons/volume-level-3.svg`);
        expect(format(100)).toMatch(`./assets/media/icons/volume-level-3.svg`);
        expect(format(75)).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });
    test('> 33', () => {
        expect(format(34)).toMatch(`./assets/media/icons/volume-level-2.svg`);
        expect(format(50)).toMatch(`./assets/media/icons/volume-level-2.svg`);
        expect(format(65)).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });
    test('> 0', () => {
        expect(format(1)).toMatch(`./assets/media/icons/volume-level-1.svg`);
        expect(format(32)).toMatch(`./assets/media/icons/volume-level-1.svg`);
        expect(format(10)).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });
    test('<= 0', () => {
        expect(format(0)).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });
});