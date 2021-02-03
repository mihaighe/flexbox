// Container 1 - Justify Content

document.getElementById("start").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-first",
    "flex-start"
  );
});

document.getElementById("center").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-first",
    "center"
  );
});

document.getElementById("end").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-first",
    "flex-end"
  );
});

document.getElementById("around").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-first",
    "space-around"
  );
});

document.getElementById("between").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-first",
    "space-between"
  );
});

// Container 2 - Justify Content

document.getElementById("startSecond").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-second",
    "flex-start"
  );
});

document.getElementById("centerSecond").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-second",
    "center"
  );
});

document.getElementById("endSecond").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-second",
    "flex-end"
  );
});

document.getElementById("aroundSecond").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-second",
    "space-around"
  );
});

document.getElementById("betweenSecond").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--justify-content-second",
    "space-between"
  );
});

// Container 2 - Align Items

document.getElementById("alignStart").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--align-items-second",
    "flex-start"
  );
});

document.getElementById("alignCenter").addEventListener("click", () => {
  document.documentElement.style.setProperty("--align-items-second", "center");
});

document.getElementById("alignEnd").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--align-items-second",
    "flex-end"
  );
});

// Container 3 - Align Content

document.getElementById("none").addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--align-content-third",
      ""
    );
  });

document.getElementById("startThird").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--align-content-third",
    "flex-start"
  );
});

document.getElementById("centerThird").addEventListener("click", () => {
  document.documentElement.style.setProperty("--align-content-third", "center");
});

document.getElementById("endThird").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--align-content-third",
    "flex-end"
  );
});

document.getElementById("aroundThird").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--align-content-third",
    "space-around"
  );
});

document.getElementById("betweenThird").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--align-content-third",
    "space-between"
  );
});

// Container 3 - Align Items

document.getElementById("alignStartThird").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--align-items-third",
    "flex-start"
  );
});

document.getElementById("alignCenterThird").addEventListener("click", () => {
  document.documentElement.style.setProperty("--align-items-third", "center");
});

document.getElementById("alignEndThird").addEventListener("click", () => {
  document.documentElement.style.setProperty("--align-items-third", "flex-end");
});
