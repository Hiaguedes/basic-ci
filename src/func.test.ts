import {soma, multiplica, contaLetras} from './func'

describe('Teste das funcoes', () => {
    test('1 +  2 = 3', () => {
        expect(soma(1, 2)).toBe(3)
    })

    test('5 * 4 * 2 =40', () => {
        expect(multiplica(5, 4, 2)).toBe(40)
    })

    test('Brasil campeão tem treze letras!', () => {
        expect(contaLetras('Brasil campeão')).toBe(13)
    })

    test('0.1 + 0.2 = 0.3', () => {
        expect(soma(0.1, 0.2)).toBe(0.3)
    })

    test('1 + 0.2 = 1.2', () => {
        expect(soma(1, 0.2)).toBe(1.2)
    })

})

/*
    test('0.1 + 0.2 = 0.3', () => {
        expect(0.1 + 0.2).toBe(0.3)
    })
*/
