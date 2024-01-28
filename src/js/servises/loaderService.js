function showLoader(button) {
  button.classList.add('show');
}

function hideLoader(button) {
  button.classList.remove('show');
}

export { showLoader, hideLoader };