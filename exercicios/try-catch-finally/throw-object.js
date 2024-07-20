try {
    const obj = {
        name: 'José',
        age: 21,
        sex: 'Masculino',
        canVote: true
    }
    throw obj
} catch (err) {
    console.log(err)
    console.log(err.name)
    console.log(err.age)
    console.log(err.sex)
    console.log(err.canVote)
}