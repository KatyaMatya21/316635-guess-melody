import assert from 'assert';
import Screen from '../modules/screen';

describe('Screen Class', () => {

  describe('setManager', () => {
    it('should set manager', () => {
      const screen = new Screen();
      screen.setManager(1);
      assert.equal(screen.manager, 1);
    });
  });

});
