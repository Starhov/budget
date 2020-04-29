let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money === '' || money === null || money === 0) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

const appData = { 
    budget: money, 
    timeData: time,  
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i += 1) {
        let mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', ''),
            expenseAmount = prompt('Во сколько обойдется?', '');
    
        if (
            typeof(mandatoryExpenses) === 'string'
            && typeof(mandatoryExpenses) !== null
            && typeof(expenseAmount) !== null
            && mandatoryExpenses !== ''
            && expenseAmount !== ''
            && mandatoryExpenses.length < 50
        ) {
            console.log('done');
            appData.expenses[mandatoryExpenses] = expenseAmount;
        } else {
            console.log('Неверный результат');
            i -= 1;
        }
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

function chooseOptExpenses() {
    for (let i = 1; i < 4; i += 1) {
        let expense = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i] = expense;
    }
}

chooseExpenses();
detectDayBudget();
detectLevel();
checkSavings();
chooseOptExpenses();