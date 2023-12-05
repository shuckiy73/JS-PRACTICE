


const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));




function handClick(e) {
// 1. скрыть все tabpanels
tabPanels.forEach((panel) => {
panel.hidden = true;
});

// 2. отменить выбор каждой кнопки (aria-selected = false)
tabButtons.forEach(tab => {
    tab.ariaSelected = false;
    // tab.setAttribute('aria-selected', false);
});

// 3. поменять значение aria-selected  кликнутой кнопки на true
e.currentTarget.setAttribute('aria-selected', true);

// 4. отобразить нужный tabpanels

const { id } = e.currentTarget;

const tabPanel = tabPanels.find(panel => {
    if (panel.getAttribute('aria-labelledby') === id) {
        return true;
    }
});

tabPanel.hidden = false;
}

tabButtons .forEach(button => button.addEventListener('click', handClick));