const documentEvents = function () {
  document.getElementById('save-button').addEventListener('click', () => {
    const namesInput = document.getElementById('names-input') as HTMLInputElement;
    const inputtedValue = namesInput.value;
    chrome.storage.sync.set({inputtedNicknames: inputtedValue}, function () {
      const savedTextElement = document.getElementById('saved-text') as HTMLInputElement;
      if (savedTextElement.innerText === '') {
        savedTextElement.innerText = 'Saved! Please refresh GroupMe.';
      }
      setTimeout(() => {
        savedTextElement.innerText = '';
      }, 5000);
    });
  });

  chrome.storage.sync.get(['inputtedNicknames'], function ({inputtedNicknames}) {
    const namesInput = document.getElementById('names-input') as HTMLInputElement;
    if (inputtedNicknames) {
      namesInput.setAttribute('value', inputtedNicknames);
    }
  });
};
document.addEventListener('DOMContentLoaded', documentEvents, false);
