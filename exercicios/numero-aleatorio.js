export const randomNum = (max, min = 1) => Math.floor(Math.random() * ((max + 1) - min) + min)
export const randomMF = () => randomNum(2) === 1 ? 'M' : 'F'