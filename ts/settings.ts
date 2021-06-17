let queued = false;

const documentEvents = function () {
  document.getElementById('save-button').addEventListener('click', () => {
    const namesInput = document.getElementById('names-input') as HTMLInputElement;
    const inputtedValue = namesInput.value;
    chrome.storage.sync.set({ inputtedNicknames: inputtedValue }, function () {
      const savedTextElement = document.getElementById('saved-text') as HTMLInputElement;
      if (savedTextElement.innerText === '') {
        savedTextElement.innerText = 'Saved! Please refresh GroupMe.';
      }
      setTimeout(() => {
        savedTextElement.innerText = '';
      }, 5000);
    });
  });

  chrome.storage.sync.get(['inputtedNicknames'], function ({ inputtedNicknames }) {
    const namesInput = document.getElementById('names-input') as HTMLInputElement;
    if (inputtedNicknames) {
      namesInput.setAttribute('value', inputtedNicknames);
    }
  });


  const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;

  checkbox.addEventListener('change', () => {
    const savedTextElement = document.getElementById('saved-text2');
    if (savedTextElement.innerText === '') {
      savedTextElement.innerText = 'Saved! Refresh the page';
    }

    if (!queued) {
      setTimeout(() => {
        queued = false;
        savedTextElement.innerText = '';
      }, 5000);
    }

    queued = true;

    if (checkbox.checked) {
      chrome.storage.sync.set({
        rainbowTextEnabled: true
      }, () => { });
    } else {
      chrome.storage.sync.set({
        rainbowTextEnabled: false
      }, () => { });
    }
  });



  chrome.storage.sync.get(['rainbowTextEnabled'], async storage => {
    const {
      rainbowTextEnabled
    } = storage;

    // handle use case where extension was just installed
    if (rainbowTextEnabled === undefined) {
      chrome.storage.sync.set({
        rainbowTextEnabled: false
      }, () => { });
      checkbox.checked = false;
    } else {
      if (rainbowTextEnabled) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    }
  });
};
document.addEventListener('DOMContentLoaded', documentEvents, false);
