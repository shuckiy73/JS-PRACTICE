const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  // Прячем все элменты tab panels (содержимое табов)
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // Устанавливаем состояние selected для всех табов равное false
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
  // Для "кликнутого" таба устанвливаем значение selected равное true
  event.currentTarget.setAttribute('aria-selected', true);

  // Находим tabPanel для "кликнутого" таба и отображаем
  const { id } = event.currentTarget;

  console.log(tabPanels);

  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons
  .forEach(button => button.addEventListener('click', handleTabClick));