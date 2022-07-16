const soma = (...args: number[]) => {

    let maxDecimals = 0;

    args.forEach(arg => {
        if(!/\./g.test(arg.toString())){
            return;
        }
        const numberOfDecimals = arg.toString().split(".")[1].length;
        if(numberOfDecimals > maxDecimals){
            maxDecimals = numberOfDecimals;
        }
    })

    return Number(args.reduce((acc, current) => acc + current).toFixed(maxDecimals))
}

const multiplica = (...args: number[]) => {
    return args.reduce((acc, current) => acc * current)
}

const contaLetras = (text: string) => {
    const separaLetras = text.replace(/\w/, '').split('')

    return separaLetras.length;
}

export {soma, multiplica, contaLetras}