// Задание 1: Извлечение данных из формы
document.getElementById('submitButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const age = document.getElementById('age').value;
    const agree = document.getElementById('agree').checked;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Не указан';
    const country = document.getElementById('country').value || 'Не выбрана';

    const output = `
        Имя: ${username}<br>
        Возраст: ${age}<br>
        Согласие: ${agree ? 'Да' : 'Нет'}<br>
        Пол: ${gender}<br>
        Страна: ${country}<br>
    `;

    document.getElementById('output').innerHTML = output;
});
// Задание 2: Валидация формы (JS и регулярные выражения)
document.getElementById('submitButton').addEventListener('click', () => {
    let errors = [];

    // Проверка через JS
    const username = document.getElementById('username').value;
    if (!username) errors.push('Имя не может быть пустым.');
    if (!/^[a-zA-Zа-яА-Я]+$/.test(username)) errors.push('Имя должно содержать только буквы.');

    const age = document.getElementById('age').value;
    if (!age) errors.push('Возраст не указан.');
    if (age && (age < 1 || age > 120)) errors.push('Возраст должен быть в пределах от 1 до 120.');

    const agree = document.getElementById('agree').checked;
    if (!agree) errors.push('Вы должны согласиться с условиями.');

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) errors.push('Пол должен быть выбран.');

    const country = document.getElementById('country').value;
    if (!country) errors.push('Выберите страну.');

    // Вывод ошибок или успешное сообщение
    const output = document.getElementById('output');
    if (errors.length) {
        output.innerHTML = `<div class="error">${errors.join('<br>')}</div>`;
    } else {
        output.innerHTML = '<div>Форма успешно отправлена!</div>';
    }
});
 // Задание 3: Работа с RegExp
 const testRegex = () => {
    const regex = /[a-zA-Zа-яА-Я]+/g;
    const testString = 'Пример текста: Иван, Анна, Петр!';

    const execResult = regex.exec(testString);
    console.log('Результат exec():', execResult);

    const testResult = regex.test(testString);
    console.log('Результат test():', testResult);

    const splitResult = testString.split(/,|!/);
    console.log('Результат split():', splitResult);

    const matchResult = testString.match(regex);
    console.log('Результат match():', matchResult);

    const searchResult = testString.search(/Анна/);
    console.log('Результат search():', searchResult);

    const replaceResult = testString.replace(/Иван/, 'Елена');
    console.log('Результат replace():', replaceResult);
};
testRegex();
