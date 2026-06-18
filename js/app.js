function initializeEventPropagation() {
  const eventLog = document.getElementById("eventLog");

  const grandparent = document.getElementById("grandparent");
  const parent = document.getElementById("parent");
  const child = document.getElementById("childButton");

  const bubblingBtn = document.getElementById("bubblingBtn");
  const capturingBtn = document.getElementById("capturingBtn");
  const clearLogBtn = document.getElementById("clearLogBtn");

  function log(message) {
    console.log(message);

    const item = document.createElement("li");
    item.textContent = message;

    eventLog.prepend(item);
  }

  function clearListeners() {
    const newGrandparent = grandparent.cloneNode(true);

    grandparent.replaceWith(newGrandparent);

    return {
      grandparent: newGrandparent,
      parent: newGrandparent.querySelector("#parent"),
      child: newGrandparent.querySelector("#childButton")
    };
  }

  bubblingBtn.addEventListener("click", () => {
    eventLog.innerHTML = "";

    const elements = clearListeners();

    elements.grandparent.addEventListener("click", () =>
      log("Grandparent")
    );

    elements.parent.addEventListener("click", () =>
      log("Parent")
    );

    elements.child.addEventListener("click", () =>
      log("Child")
    );
  });

  capturingBtn.addEventListener("click", () => {
    eventLog.innerHTML = "";

    const elements = clearListeners();

    elements.grandparent.addEventListener(
      "click",
      () => log("Grandparent"),
      true
    );

    elements.parent.addEventListener(
      "click",
      () => log("Parent"),
      true
    );

    elements.child.addEventListener(
      "click",
      () => log("Child"),
      true
    );
  });

  clearLogBtn.addEventListener("click", () => {
    eventLog.innerHTML = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getTheme());

  renderTasks();

  initializeEventPropagation();
});