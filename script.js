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

// Изчистване на променливите при напускане на страницата
window.addEventListener('beforeunload', function() {
    document.getElementById('egn').value = '';
    document.getElementById('date1').innerText = '';
    document.getElementById('message').innerText = '';
});