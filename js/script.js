const formLink = document.querySelector(".contacts-btn");
const formPopup = document.querySelector(".modal-form");
const formClose = formPopup.querySelector(".modal-close");
const letterForm = formPopup.querySelector(".letter-form");
const formName = formPopup.querySelector(".form-icon-name");
const formEmail = formPopup.querySelector(".form-icon-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user-name");
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");
   
    if (storage) {
        formName.value = storage;
        formEmail.focus();
      } else {
        formName.focus();
    }
});

formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-show");
    formPopup.classList.remove("modal-error");
  });


letterForm.addEventListener("submit", function (evt) {
    if (!formName.value || !formEmail.value) {
        evt.preventDefault();
        formPopup.classList.remove("modal-error");
        formPopup.offsetWidth = formPopup.offsetWidth;
        formPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
          localStorage.setItem("user-name", formName.value);
        }
    };

    if (!formName.value) {
        evt.preventDefault();
        formName.classList.remove("error");
        formName.offsetWidth = formName.offsetWidth;
        formName.classList.add("error");
    } else {
        if (isStorageSupport) {
          localStorage.setItem("user-name", formName.value);
        }
    }

    if (!formEmail.value) {
        evt.preventDefault();
        formEmail.classList.remove("error");
        formEmail.offsetWidth = formEmail.offsetWidth;
        formEmail.classList.add("error");
    } else {
        if (isStorageSupport) {
          localStorage.setItem("user-name", formName.value);
        }
    }
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (formPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        formPopup.classList.remove("modal-show");
        formPopup.classList.remove("modal-error");
      }
    }
  });