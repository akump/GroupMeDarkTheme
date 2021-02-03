const yourNicknames = ["Andrew Kump", "Drevv", "Brovid-19", "Andrevv", "AOC simp, Pisces, AAPL holder"];
let cachedLength = 0;
const highlightNameChecker = function () {
    let nicknameElements = document.getElementsByClassName("nickname");
    if (nicknameElements.length !== cachedLength) {
        cachedLength = nicknameElements.length;
        for (let element of nicknameElements) {
            if (yourNicknames.includes(element.textContent)) {
                let messageElement = element.closest(".message");
                if (messageElement)
                    messageElement.setAttribute("style", "background-color: #292a2d !important;");
            }
        }
    }
    if (nicknameElements.length < 1000 && yourNicknames.length > 0) {
        setTimeout(highlightNameChecker, 200);
    }
};
highlightNameChecker();
