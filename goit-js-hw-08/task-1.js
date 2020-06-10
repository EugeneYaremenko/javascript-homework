import gallery from "./gallery-items.js";

const refs = {
  jsGallery: document.querySelector(".js-gallery"),
  originalImg: document.querySelector(".lightbox__image"),
  openModal: document.querySelector(".lightbox"),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
};

refs.jsGallery.addEventListener("click", onImgClick);
refs.closeModalBtn.addEventListener("click", onCloseModalClick);

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

const galleryMarkup = gallery.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

refs.jsGallery.insertAdjacentHTML("afterbegin", galleryMarkup);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = event.target;
  const { alt, dataset } = imageRef;

  refs.originalImg.setAttribute("src", dataset.source);
  refs.originalImg.setAttribute("alt", alt);

  onOpenModalClick();
}

function onOpenModalClick() {
  refs.openModal.classList.add("is-open");
}

function onCloseModalClick() {
  refs.originalImg.setAttribute("src", "#");
  refs.originalImg.setAttribute("alt", "#");
  refs.openModal.classList.remove("is-open");
}
