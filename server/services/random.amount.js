exports.RandomAmount = (min = 10, max = 100) => {
    return Math.floor(Math.random() * (max - min)) + min;
}