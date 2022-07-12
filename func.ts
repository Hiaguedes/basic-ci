const soma = (...args: number[]) => {
    return args.reduce((acc, current) => acc + current)
}

const multiplica = (...args: number[]) => {
    return args.reduce((acc, current) => acc * current)
}

console.log(soma(1,2,3))
console.log(multiplica(5,4,2))

export {soma, multiplica}