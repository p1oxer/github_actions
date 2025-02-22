function isEvenDay() {
    const today = new Date();
    const day = today.getDate();
    return day % 2 === 0;
}

console.log(`Сегодня ${isEvenDay() ? "чётный" : "нечётный"} день.`);

module.exports = isEvenDay;
