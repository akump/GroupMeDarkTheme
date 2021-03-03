let usersNicknames = [];
let cachedLength = 0;
const highlightNameChecker = function () {
    let nicknameElements = document.getElementsByClassName("nickname");
    if (nicknameElements.length !== cachedLength) {
        cachedLength = nicknameElements.length;
        for (let element of nicknameElements) {
            if (usersNicknames.includes(element.textContent)) {
                let messageElement = element.closest(".message");
                if (messageElement)
                    messageElement.setAttribute("style", "background-color: #292a2d !important;");
            }
        }
    }
    if (nicknameElements.length < 1000 && usersNicknames.length > 0) {
        setTimeout(highlightNameChecker, 200);
    }
};
chrome.storage.sync.get(['inputtedNicknames'], function ({ inputtedNicknames }) {
    const inputedtNicknames = inputtedNicknames.split(";").map((nickname) => nickname.trim());
    usersNicknames = [...inputedtNicknames];
    highlightNameChecker();
});
