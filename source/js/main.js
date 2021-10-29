import swiperInit from "./modules/slider";
import calcDocumentHeight from "./modules/height";
import initCustomSelect from "./modules/custom-select"
import menuInit from "./modules/menu";
import appearInit from "./modules/animate-appear";
import ScrollTo from "./modules/scroll-to";
import DisableOutline from "./modules/disable-outline";
import TextareaResize from "./modules/textarea-resize";
import Parallax from "./modules/parallax";

menuInit();
calcDocumentHeight();
initCustomSelect();

const DisableBodyOutline = new DisableOutline(document.body);
DisableBodyOutline.init();

// const sliders = document.querySelectorAll('.slider');
// sliders.forEach((slider) => swiperInit(slider));


const textareaEl = document.querySelector('.textarea-resize');
const textarea = new TextareaResize(textareaEl);
textarea.init();

const menuItems = document.querySelectorAll('.nav__link');
menuItems.forEach((item) => {
	const scrollTo = new ScrollTo(item);
	scrollTo.init();
});

if (window.innerWidth > 768) {
	appearInit();
}
