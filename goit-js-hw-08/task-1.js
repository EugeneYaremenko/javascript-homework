import gallery from "./gallery-items.js";

const jsGalleryRef = document.querySelector(".js-gallery");
const originalImgRef = document.querySelector(".lightbox__image");
const openModalRef = document.querySelector(".lightbox");
const closeModalBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);

jsGalleryRef.addEventListener("click", onImgClick);
closeModalBtnRef.addEventListener("click", onCloseModalClick);

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

jsGalleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

function onImgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = event.target;
  const largeImgUrl = imageRef.dataset.source;
  /*  const largeImgAlt = */

  originalImgRef.setAttribute("src", largeImgUrl);
  /*   originalImgRef.setAttribute("alt", largeImgAlt); */
  onOpenModalClick();
}

function onOpenModalClick() {
  openModalRef.classList.add("is-open");
}

function onCloseModalClick() {
  originalImgRef.setAttribute("src", "#");
  openModalRef.classList.remove("is-open");
}
