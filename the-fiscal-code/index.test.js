import {getFiscalCode, getNameLetters, getNumbers, getSurnameLetters} from "./index";

describe('Test getSurnameLetters(surname)', () => {
    test('getSurnameLetters(Newman) -> NWM', () => {
        expect(getSurnameLetters('Newman')).toBe('NWM')
    })

    test('getSurnameLetters(Fox) -> FXO', () => {
        expect(getSurnameLetters('Fox')).toBe('FXO')
    })

    test('getSurnameLetters(Yu) -> YUX', () => {
        expect(getSurnameLetters('Yu')).toBe('YUX')
    })
})

describe('Test getNameLetters(name)', () => {
    test('getNameLetters(Matt) -> MTT', () => {
        expect(getNameLetters('Matt')).toBe('MTT')
    })

    test('getNameLetters(Samantha) -> SNT', () => {
        expect(getNameLetters('Samantha')).toBe('SNT')
    })

    test('getNameLetters(Bob) -> BBO', () => {
        expect(getNameLetters('Bob')).toBe('BBO')
    })

    test('getNameLetters(Al) -> LAX', () => {
        expect(getNameLetters('Al')).toBe('LAX')
    })
})

describe('Test getNumbers(birth, gender)', () => {
    test('getNumbers(1/1/1900, M) -> 00A01', () => {
        expect(getNumbers('1/1/1900', 'M')).toBe('00A01')
    })

    test('getNumbers(1/12/1950, F) -> YUXHLN50T41', () => {
        expect(getNumbers('1/12/1950', 'F')).toBe('50T41')
    })

    test('getNumbers(16/1/1928, M) -> MSOMKY28A16', () => {
        expect(getNumbers('16/1/1928', 'M')).toBe('28A16')
    })
})

describe("Test getFiscalCode(person)", () => {
    test('getFiscalCode(personObj) -> DBTMTT00A01', () => {
        const personObj = {name: "Matt",surname: "Edabit",gender: "M",dob: "1/1/1900"}
        const expected = 'DBTMTT00A01'
        expect(getFiscalCode(personObj)).toBe(expected)
    })

    test('getFiscalCode({name: "Helen",surname: "Yu",gender: "F",dob: "1/12/1950"}) -> YUXHLN50T41', () => {
        const personObj = {name: "Helen",surname: "Yu",gender: "F",dob: "1/12/1950"}
        const expected = 'YUXHLN50T41'
        expect(getFiscalCode(personObj)).toBe(expected)
    })

    test('getFiscalCode({name: "Mickey",surname: "Mouse",gender: "M",dob: "16/1/1928"}) -> MSOMKY28A16', () => {
        const personObj = {name: "Mickey",surname: "Mouse",gender: "M",dob: "16/1/1928"}
        const expected = 'MSOMKY28A16'
        expect(getFiscalCode(personObj)).toBe(expected)
    })
})