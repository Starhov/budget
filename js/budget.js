let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = { 
    budget: money, 
    timeData: time,  
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};

for (let i = 0; i < 2; i += 1) {
    let mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', ''),
        expenseAmount = prompt('Во сколько обойдется?', '');

    if (typeof(mandatoryExpenses) === 'string'
        && typeof(mandatoryExpenses) !== null
        && typeof(expenseAmount) !== null
        && mandatoryExpenses !== ''
        && expenseAmount !== ''
        && mandatoryExpenses.length < 50) {
        console.log('done');
        appData.expenses[mandatoryExpenses] = expenseAmount;
    } else {
        console.log('Неверный результат');
        i -= 1;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}