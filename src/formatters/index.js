const makeFormater = (array, separator = ' ', num = 4) => {
    const result = [];
    for (const arr of array) {
        if (arr.type === 'unchanged') {
            result.push(`${separator.repeat(num)}${arr.key}: ${arr.value}\n`)
        }

        if (arr.type === 'added') {
            result.push(`${separator} + ${arr.key}: ${arr.value}\n`)
        }

        if (arr.type === 'deleted') {
            result.push(`${separator} - ${arr.key}: ${arr.value}\n`)
        }

        if (arr.type === 'changed') {
            result.push(`${separator} - ${arr.key}: ${arr.value1}\n`)
            result.push(`${separator} + ${arr.key}: ${arr.value2}\n`)
        }
    }
    return `{\n${result.join('')}}`
}

export default makeFormater;