const minSum = 86000;
const optionValue = 1000;

const slider = document.querySelector('.slider__input');
const totalLengthElement = document.querySelector('.constructor__length-result-value');
const totalSumElement = document.querySelector('.constructor__price');
const configurationElement = document.querySelector('.constructor__configuration-wrapper');

const formData = {
  element: document.querySelector('#constructor-form'),
  lengthValue: slider.value,
  optionsValue: 0,
  totalSum: 0,
}

const checkboxes = formData.element.querySelectorAll('.checkbox__input');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
      formData.optionsValue += optionValue;
    } else {
      formData.optionsValue -= optionValue;
    }
    formData.totalSum = minSum + (formData.lengthValue * 2000) + formData.optionsValue;
    updateValues(formData);
  });
});

configurationElement.addEventListener('input', (e) => {
  if (e.target.classList.contains('slider__input')) {
    formData.lengthValue = e.target.value;
    formData.totalSum = minSum + (formData.lengthValue * 2000) + formData.optionsValue;
  }
  updateValues(formData);
});

function updateValues(formData) {
  totalLengthElement.innerHTML = `${formData.lengthValue} м`;
  totalSumElement.innerHTML = `${formData.totalSum.toLocaleString('ru-RU')} ₽`;
}