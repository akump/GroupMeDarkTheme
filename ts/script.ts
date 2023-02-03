let usersNicknames: Array<string> = [];
let cachedLength = 0;
let useRainbowText = false;

const highlightNameChecker = function () {
  const nicknameElements: HTMLCollectionOf<Element> = document.getElementsByClassName('nickname');

  if (nicknameElements.length !== cachedLength) {
    cachedLength = nicknameElements.length;
    for (const element of nicknameElements) {
      if (usersNicknames.includes(element.textContent.trim().toLowerCase())) {
        const messageElement: Element = element.closest('.message');
        if (messageElement) {
          messageElement.setAttribute('style', 'background-color: #292a2d !important;');
          if (useRainbowText) {
            const [textElement] = messageElement.querySelectorAll('.message-text');
            if (textElement && textElement.classList) {
              textElement.classList.add("rainbow-text");
            }
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
    }, () => {});
    useRainbowText = false;
  } else {
    useRainbowText = rainbowTextEnabled;
  }
  if (inputtedNicknames) {
    usersNicknames = inputtedNicknames.split(';').map(nickname => nickname.trim().toLowerCase());
    highlightNameChecker();
  }
});
