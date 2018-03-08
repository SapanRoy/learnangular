import { ReversePipe } from './reverse.pipe';


describe('Pipe: Reverse', () => {
    let reverPipe: ReversePipe;
    // reverPipe = new ReversePipe();
    beforeEach(() => {
        reverPipe = new ReversePipe();
    });
    xit('reverPipe must intialized', () => {
        expect(reverPipe).toBeDefined();
    });
    // disable test case
    xit('Should return string in reverse order [India, Bangladesh, UAE, SriLanka] -> [ SriLanka, UAE, Bangladesh, India ]', () => {
        expect(reverPipe.transform(['India', 'Bangladesh', 'UAE', 'SriLanka'])).toEqual(['SriLanka', 'UAE', 'Bangladesh', 'India']);
         reverPipe = null;
    });
    // force test case to be tested
    xit('Should return string in reverse order [South africa, Bangladesh, UAE, SriLanka] -> [ SriLanka, UAE, Bangladesh, India ]', () => {
        expect(reverPipe.transform(['South africa', 'Bangladesh', 'UAE', 'SriLanka'])).toEqual
            (['SriLanka', 'UAE', 'Bangladesh', 'South africa']);
    });
});

