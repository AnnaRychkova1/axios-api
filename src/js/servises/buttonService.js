function hide(button) {
  button.classList.add("is-hidden");
}

function show(button) {
  button.classList.remove("is-hidden");
}

function enable(button, preloader) {
  preloader.classList.add("is-hidden");
  button.disabled = false;
}

function disable(button, preloader) {
  preloader.classList.remove("is-hidden");
  button.disabled = true;
}

function enableBtn(button) {
  button.disabled = false;
}

function disableBtn(button) {
  button.disabled = true;
}



export default { hide, show, enable, disable, enableBtn, disableBtn };