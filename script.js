'use strict';

let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let exps1, exps2;
exps1 = prompt('Введите обязательную статью расходов в этом месяце', '');
appData.expenses[exps1] = prompt('Во сколько обойдется?', '');
exps2 = prompt('Введите обязательную статью расходов в этом месяце', '');
appData.expenses[exps2] = prompt('Во сколько обойдется?', '');




// let exps1, exps2;
// exps1 = prompt('Введите обязательную статью расходов в этом месяце','');
// appData.expenses[exps1] = prompt('Во сколько обойдется?', '');

// exps2 = prompt('Введите вторую обязательную статью расходов в этом месяце','');
// appData.expenses[exps2] = prompt('Во сколько обойдется?', '');

// alert(`Вам понадобится ${appData.expenses[exps1]/30} рублей в день для ${exps1}\n
//       и ${appData.expenses[exps2]/30} рублей в день для ${exps2}` );