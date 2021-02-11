import getPoints from './basketball-points';

test('getPoints', () => {
    expect(getPoints(2, 3)).toBe(5);
});

/* test('hello world', () => {
    const source = 'hello world'

    expect(source).toBe('hello world!')
}); */