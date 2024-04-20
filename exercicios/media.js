export const media = (nums) => {
    let sum = 0
    nums.forEach(n => sum += n)
    return sum / nums.length
}