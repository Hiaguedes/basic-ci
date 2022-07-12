const soma = (...args: number[]) => {
    return args.reduce((acc, current) => acc + current)
}

const multiplica = (...args: number[]) => {
    return args.reduce((acc, current) => acc * current)
}

const contaLetras = (text: string) => {
    const separaLetras = text.replace(/\w/, '').split('')

    return separaLetras.length;
}

console.log(soma(1,2,3))
console.log(multiplica(5,4,2))

export {soma, multiplica, contaLetras}