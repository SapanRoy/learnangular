import { ReversePipe } from './reverse.pipe';


describe('Pipe: Reverse', () => {
    let reverPipe: ReversePipe;
    beforeEach(() => {
        reverPipe = new ReversePipe();
    });

    // disable test case
    xit('Should return string in reverse order [India, Bangladesh, UAE, SriLanka] -> [ SriLanka, UAE, Bangladesh, India ]', () => {
        expect(reverPipe.transform(['India', 'Bangladesh', 'UAE', 'SriLanka'])).toEqual([ 'SriLanka', 'UAE', 'Bangladesh', 'India' ]);
    });
    // force test case to be tested
    fit('Should return string in reverse order [South africa, Bangladesh, UAE, SriLanka] -> [ SriLanka, UAE, Bangladesh, India ]', () => {
        expect(reverPipe.transform(['South africa', 'Bangladesh', 'UAE', 'SriLanka'])).toEqual
        (['SriLanka', 'UAE', 'Bangladesh', 'South africa']);
    });
});

