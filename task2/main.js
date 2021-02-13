const f1 = document.forms.f1;
const f2 = document.forms.f2;
const check = f1.check;
const btn = f2.btn;
const closeBtn = document.querySelector('.close-btn');
const error = document.querySelector('.error1');
const text = document.querySelector('.text');
const data = [
    {
        errorText1:  `Попередження! <span>Пусте поле не можна добавити.</span>`,
    
        errorText2: `Попередження! <span>Останній таск зі списку Ви не можете видалити</span>`
    }
];

f1.addEventListener('click', () => {
    if(f1.length == 1){
        text.innerHTML = data[0].errorText2;
        error.style.opacity = '1'
        error.style.visibility = 'visible'
    }

    if(f1.length > 1 && event.target.name == 'check'){
        event.target.parentElement.remove()
    }
})

btn.addEventListener('click', () => {
    if(f2.text.value.trim() != ''){

    f1.innerHTML += `<label for="${f2.text.value}"><input name="check" type="checkbox" id="${f2.text.value}" />${f2.text.value}</label>`

    f2.text.value = ''
    }else{
        text.innerHTML = data[0].errorText1;

        error.style.opacity = '1'
        error.style.visibility = 'visible'
    }
})

function closeBtnClick(){
    error.style.opacity = '0'
    error.style.visibility = 'hidden'
}




