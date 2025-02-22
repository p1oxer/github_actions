const isEvenDay = require("../index");

test("Проверка чётности дня", () => {
    const testDate = new Date(2024, 1, 2); // 2-е февраля 2024 (чётный день)
    jest.useFakeTimers().setSystemTime(testDate);

    expect(isEvenDay()).toBe(true);

    jest.useRealTimers();
});
