document.getElementById('egnForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const egn = document.getElementById('egn').value;

    if (egn.length < 6) {
        showMessage('Моля, въведете първите 6 цифри на ЕГН.');
        document.getElementById("date1").innerText = '';
        return;
    } else {
        showMessage('');
    }

    const c1 = parseInt(egn[0]);
    const c2 = parseInt(egn[1]);
    const c3 = parseInt(egn[2]);
    const c4 = parseInt(egn[3]);
    const c5 = parseInt(egn[4]);
    const c6 = parseInt(egn[5]);

    // Списък на месеците
    const textMonth = ["Януари", "Февруари", "Март", "Април", 
        "Май", "Юни", "Юли", "Август", "Септември", 
        "Октомври", "Ноември", "Декември"];

    // Изчисляване на деня
    const date = c5 * 10 + c6;

    // Поправка на месеца
    let month = c3 * 10 + c4;
    let year;
    if (month > 20 && month < 40) {
        month -= 20;
        year = c1 * 10 + c2 + 1800;
    } else if (month > 40) {
        month -= 40;
        year = c1 * 10 + c2 + 2000;
    } else {
        year = c1 * 10 + c2 + 1900;
    }

    // Преобразуване на месеца в текст и извеждане на резултата
    const date1 = date + " " + textMonth[month - 1] + " " + year + " година";

    // Свързване с уебстраницата
    document.getElementById("date1").innerText = date1;
});

document.getElementById('birthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthDate = new Date(document.getElementById('birthDate').value);
    const gender = document.getElementById('gender').value;

    const year = birthDate.getFullYear();
    const month = birthDate.getMonth() + 1; // Месеците са от 0 до 11
    const day = birthDate.getDate();

    let egnMonth;
    if (year < 1900) {
        egnMonth = month + 20;
    } else if (year >= 2000) {
        egnMonth = month + 40;
    } else {
        egnMonth = month;
    }

    const yearString = year.toString().slice(-2);
    const monthString = egnMonth.toString().padStart(2, '0');
    const dayString = day.toString().padStart(2, '0');

    let ninthDigit;
    if (gender === 'мъж') {
        ninthDigit = Math.floor(Math.random() * 5) * 2;
    } else {
        ninthDigit = Math.floor(Math.random() * 5) * 2 + 1;
    }

    const randomDigits = Math.floor(Math.random() * 100).toString().padStart(2, '0');

    const egn = yearString + monthString + dayString + randomDigits + ninthDigit;

    document.getElementById('generatedEgn').innerText = `Генерирано ЕГН: ${egn}`;
});