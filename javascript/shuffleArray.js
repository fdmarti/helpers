const shuffleArray = (arrayValues = []) => {
    let arrayCopy = arrayValues
    const shuffleArray = []

    for (let i = 0; i < arrayValues.length; i++) {
        const randomPosition = Math.floor(Math.random() * arrayCopy.length)
        shuffleArray.push(arrayValues[randomPosition])
        arrayCopy.splice(randomPosition, 0)
    }

    return shuffleArray
}

export default shuffleArray