// Modal
const userMenuTrigger = document.querySelector(".userBtn");
const menuContainer = document.querySelector(".menu");
const notificationEl = document.querySelector(".notification");
const mainMenuWindow = document.querySelector(".menu");
const notificationWindow = document.querySelector(".notification__window");
const allCustomBtns = document.querySelectorAll(".checkmarkBtn");

const cancelPromoEl = document.querySelector(".btn__cancel");
const promoPlanSection = document.querySelector(".plan");

// Checkbox elements
// const customBtn = document.querySelector(".checkmarkBtn");
const btnUnchecked = document.querySelector(".uncheck__state--btn");
const btnChecked = document.querySelector(".btnChecked");
const btnSpinner = document.querySelector(".spinner");
const checkBoxStatus = document.querySelector(".checkbox__status");

const firstMenuLink = document.querySelector(".firstMenuLink");

userMenuTrigger.addEventListener("click", (e) => {
  mainMenuWindow.classList.toggle("show");
  if (notificationWindow.classList.contains("show")) {
    notificationWindow.classList.remove("show");
  }

  if (userMenuTrigger.ariaExpanded === "false") {
    userMenuTrigger.ariaExpanded = true;
    firstMenuLink.classList.add("focus");
  } else {
    userMenuTrigger.ariaExpanded = false;
    firstMenuLink.classList.remove("focus");
  }
});

notificationEl.addEventListener("click", (e) => {
  notificationWindow.classList.toggle("show");
  if (mainMenuWindow.classList.contains("show")) {
    mainMenuWindow.classList.remove("show");
  }
});

cancelPromoEl.addEventListener("click", (e) => {
  promoPlanSection.classList.add("disappear");
});

// Custom Checkbox

function checkBoxMarked() {
  btnUnchecked.classList.add("hidden");
  btnSpinner.classList.remove("hidden");

  checkBoxStatus.ariaLabel = "Loading. Please wait...";
  setTimeout(() => {
    btnSpinner.classList.add("hidden");
    btnChecked.classList.remove("hidden");

    customBtn.ariaLabel = customBtn.ariaLabel.replace("as done", "as not done");

    let tmp = "Successfully " + customBtn.ariaLabel;
    tmp = tmp.replace("as not done", "as done");
    tmp = tmp.replace("Mark", "marked");
    checkBoxStatus.ariaLabel = tmp;
  }, 300);
}

function checkBoxUnmarked() {
  btnSpinner.classList.remove("hidden");
  btnChecked.classList.add("hidden");

  checkBoxStatus.ariaLabel = "Loading. Please wait...";

  setTimeout(() => {
    btnSpinner.classList.add("hidden");
    btnUnchecked.classList.remove("hidden");
    customBtn.ariaLabel = customBtn.ariaLabel.replace("as not done", "as done");

    let tmp = "Successfully " + customBtn.ariaLabel;
    tmp = tmp.replace("as done", "as not done");
    tmp = tmp.replace("Mark", "marked");
    checkBoxStatus.ariaLabel = tmp;
  }, 300);
}

allCustomBtns.forEach((customBtn) => {
  customBtn.addEventListener("click", () => {
    if (btnChecked.classList.contains("hidden")) {
      checkBoxMarked();
      return;
    }

    checkBoxUnmarked();
  });
});

menuContainer.addEventListener("click", () => {
  // if (btnChecked.classList.contains("hidden")) {
  //   checkBoxMarked();
  //   return;
  // }
  // checkBoxUnmarked();
});
