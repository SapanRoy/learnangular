import { ChildComponentMethods } from './child.methods';

describe('ChildMethodTest', () => {
    const childComponentMethods: any = new ChildComponentMethods();
    // const result = childComponentMethods.add(4, 2);
      xit('4 + 2 should return 6', () => {
        expect(childComponentMethods.add(4, 2)).toEqual(6);
    });
    xit('-2 + -2 should return -4', () => {
        expect(childComponentMethods.add(-2, -2)).toEqual(-4);
    });
});
