import refs from './refs'

refs.gallery.addEventListener("click", onImgClick);

function onImgClick(e) {
  if (e.target.nodeName !== "IMG") {
  return;
  }
 
  const activeImg = e.target;
 
  openModal(activeImg);
}

function openModal(activeImg) {
  window.addEventListener("keydown", onPressEscape);
  refs.modalDiv.classList.add("is-open");

  refs.openImg.src = activeImg.dataset.src;
}

refs.btnClose.addEventListener("click", closeModal);
refs.overlayDiv.addEventListener("click", closeModal);

function closeModal() {
  window.removeEventListener("keydown", onPressEscape);
  
  refs.modalDiv.classList.remove("is-open");
  refs.openImg.src = "";
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}