let usersNicknames: Array<string> = [];
let cachedLength: number = 0;
let useRainbowText = false;

const highlightNameChecker = function () {
  let nicknameElements: HTMLCollectionOf<Element> = document.getElementsByClassName('nickname');

  if (nicknameElements.length !== cachedLength) {
    cachedLength = nicknameElements.length;
    for (let element of nicknameElements) {
      if (usersNicknames.includes(element.textContent)) {
        let messageElement: Element = element.closest('.message');
        if (messageElement) {
          messageElement.setAttribute('style', 'background-color: #292a2d !important;');
          if (useRainbowText) {
            let [textElement] = messageElement.querySelectorAll('.text');
            textElement.classList.add("rainbow-text");
          }

        }
      }
    }
  }
  if (nicknameElements.length < 1000 && usersNicknames.length > 0) {
    setTimeout(highlightNameChecker, 200);
  }
};

chrome.storage.sync.get(['inputtedNicknames', 'rainbowTextEnabled'], function ({ inputtedNicknames, rainbowTextEnabled }) {
  if (rainbowTextEnabled === undefined) {
    chrome.storage.sync.set({
      rainbowTextEnabled: false
    }, () => { });
    useRainbowText = false;
  } else {
    useRainbowText = rainbowTextEnabled;
  }
  if (inputtedNicknames) {
    usersNicknames = inputtedNicknames.split(';').map(nickname => nickname.trim());
    highlightNameChecker();
  }
});
