const documentEvents = function () {
    document.getElementById('save-button').addEventListener('click', () => {
        const namesInput = document.getElementById('names-input');
        const inputtedValue = namesInput.value;
        chrome.storage.sync.set({ 'inputtedNicknames': inputtedValue }, function () {
            const savedTextElement = document.getElementById('saved-text');
            if (savedTextElement.innerText === '') {
                savedTextElement.innerText = 'Saved! Please refresh GroupMe.';
            }
            setTimeout(() => {
                savedTextElement.innerText = '';
            }, 5000);
        });
    });
    chrome.storage.sync.get(['inputtedNicknames'], function ({ inputtedNicknames }) {
        const namesInput = document.getElementById('names-input');
        if (inputtedNicknames) {
            namesInput.setAttribute('value', inputtedNicknames);
        }
    });
};
document.addEventListener('DOMContentLoaded', documentEvents, false);
