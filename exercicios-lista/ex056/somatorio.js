// 56) Crie um programa que leia vários números pelo teclado e mostre no final o 
// somatório entre eles.

const soma = (...nums) => console.log(nums.reduce((a, b) => a + b))

soma(1,2,3,4,5,6)