const checkboxes = document.querySelectorAll('.items input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Проверка 1 - нажатие кнопки Shift
  // Проверка 2 - чекбокс отмечен
  
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === lastChecked || checkbox === this) {
        inBetween = !inBetween;

        console.log('начинаем отмечать! >');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));