export const getNumberFromCurrency = (input: string) => {
    return parseInt(input.replace(/[^0-9.]/g, ''), 10)
}