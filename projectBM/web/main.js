let answerSubmit = document.querySelector('.form_btn');

function checkName() {
    let name = document.getElementById("name").value;
    let regex = /^[A-Za-zА-Яа-яЁё]{2,15}$/;

    if (regex.test(name)) {
        document.getElementById("check_name").style.color = 'green';
        document.getElementById("check_name").innerHTML = "✔";
        return true;        
    }
    else {
        document.getElementById("check_name").style.color = 'red';
        document.getElementById("check_name").innerHTML = "Введите имя, состоящее как минимум из 2 символов, используя только буквы.";
        return false;
    }
}

function checkTel() {
    let tel = document.getElementById("tel").value;
    let regex = /^8\d{3}\d{3}\d{2}\d{2}$/;
    if (regex.test(tel)) {
        document.getElementById("check_tel").style.color = 'green';
        document.getElementById("check_tel").innerHTML = "✔";
        return true;        
    }
    else {
        document.getElementById("check_tel").style.color = 'red';
        document.getElementById("check_tel").innerHTML = "Формат номера: 8-XXX-XXX-XX-XX";
        return false;
    }
}

function checkEmail() {
    let email = document.getElementById("email").value;
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (regex.test(email)) {
        document.getElementById("check_email").style.color = 'green';
        document.getElementById("check_email").innerHTML = "✔";
        return true;        
    }
    else {
        document.getElementById("check_email").style.color = 'red';
        document.getElementById("check_email").innerHTML = "Формат Email: test123@example.com";
        return false;
    }
}

function sendOrder(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let email = document.getElementById('email').value;

    if (name != '' && tel != '' && email != '') {
        alert("Мы скоро вам перезвоним!")
        document.getElementById("name").value = '';
        document.getElementById("tel").value = '';
        document.getElementById("email").value = '';
        document.getElementById("check_name").innerHTML = '';
        document.getElementById("check_email").innerHTML = '';
        document.getElementById("check_tel").innerHTML = '';
    } else {
        alert("Попробуйте еще раз!")
        document.getElementById("name").value = '';
        document.getElementById("tel").value = '';
        document.getElementById("email").value = '';
        document.getElementById("check_name").innerHTML = '';
        document.getElementById("check_email").innerHTML = '';
        document.getElementById("check_tel").innerHTML = '';
    }
}

answerSubmit.addEventListener("click", sendOrder);



var phoneInput = document.getElementById('phoneInput');
const phoneForm = document.getElementById('phoneForm');

phoneForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var phoneNumber = phoneInput.value;
    const phonePattern = /^8\d{3}\d{3}\d{2}\d{2}$/;

    if(phonePattern.test(phoneNumber)) {
        alert('Ожидайте обратного звонка.');
        phoneInput.value = '';
    } else {
        alert('Пожалуйста, введите номер телефона 8-XXX-XXX-XX-XX');
    }
});