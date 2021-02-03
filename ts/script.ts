const yourNicknames: Array<string> = ["Andrew Kump", "Irelia one trick btw", "Drevv", "Brovid-19", "Andrevv"];
let cachedLength: number = 0;

const highlightNameChecker = function () {
  let nicknameElements: HTMLCollectionOf<Element> = document.getElementsByClassName("nickname");

  if (nicknameElements.length !== cachedLength) {
    cachedLength = nicknameElements.length;
    for (let element of nicknameElements) {
      if (yourNicknames.includes(element.textContent)) {
        let messageElement: Element = element.closest(".message");
        if (messageElement) messageElement.setAttribute("style", "background-color: #292a2d !important;");
      }
    }
  }
  if (nicknameElements.length < 1000 && yourNicknames.length > 0) {
    setTimeout(highlightNameChecker, 200);
  }
};

highlightNameChecker();