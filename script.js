function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const buttons = document.querySelectorAll('nav ul li');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');

    document.querySelector(`nav ul li[onclick="showTab('${tabId}')"]`)
        .classList.add('active');
}
