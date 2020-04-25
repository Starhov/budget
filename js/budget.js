let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let mandatoryExpenses1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expenseAmount1 = prompt('Во сколько обойдется?', ''),
    mandatoryExpenses2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expenseAmount2 = prompt('Во сколько обойдется?', '');

const appData = { 
    budget: money, 
    timeData: time,  
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
};

appData.expenses[mandatoryExpenses1] = expenseAmount1;
appData.expenses[mandatoryExpenses2] = expenseAmount2;

alert(appData.budget / 30);