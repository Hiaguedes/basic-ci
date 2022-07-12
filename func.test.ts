import {soma, multiplica} from './func'

describe('Teste das funcoes', () => {
    test('1 +  2 = 3', () => {
        expect(soma(1, 2)).toBe(3)
    })

    test('5 * 4 * 2 =40', () => {
        expect(multiplica(5, 4, 2)).toBe(40)
    })

})

/*
    test('0.1 + 0.2 = 0.3', () => {
        expect(0.1 + 0.2).toBe(0.3)
    })
*/
