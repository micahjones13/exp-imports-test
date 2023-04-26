import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 8C13.6506 8 14.5833 8.89543 14.5833 10C14.5833 10.7398 14.1649 11.3858 13.5428 11.7318L13.5416 22H11.4583L11.4582 11.7324C10.8356 11.3866 10.4166 10.7403 10.4166 10C10.4166 8.89543 11.3494 8 12.5 8ZM6.63099 2.32732C6.98124 2.70075 7.0016 3.27819 6.64763 3.65177C3.61283 6.82949 3.34936 11.6553 6.02151 15.1201C6.33286 15.5271 6.26451 16.1001 5.86774 16.4431C5.40872 16.8398 4.68582 16.775 4.3192 16.294C1.13831 12.1519 1.38131 6.45292 4.85709 2.56983L5.07393 2.33438L5.1678 2.24643C5.59314 1.89421 6.24722 1.91815 6.63099 2.32732ZM19.9142 2.24643L20.0081 2.33438C23.6894 6.21966 24.0087 12.0674 20.7628 16.294C20.3962 16.775 19.6733 16.8398 19.2143 16.4431C18.8175 16.1001 18.7492 15.5271 19.0605 15.1201C21.7327 11.6553 21.4692 6.82949 18.4344 3.65177C18.0804 3.27819 18.1008 2.70075 18.4511 2.32732C18.8348 1.91815 19.4889 1.89421 19.9142 2.24643ZM9.8013 5.34518C10.1466 5.71337 10.1537 6.26509 9.82646 6.65682C8.45162 8.33503 8.32337 10.6773 9.50741 12.4838C9.79011 12.9062 9.72281 13.4541 9.33916 13.7858C8.86156 14.1986 8.10517 14.1177 7.75278 13.6059C6.10277 11.1439 6.21558 7.93692 8.0237 5.58971L8.20397 5.3653L8.28854 5.2755C8.70418 4.88648 9.40006 4.91737 9.8013 5.34518ZM16.7935 5.2755L16.8781 5.3653C18.8573 7.72924 19.0325 11.0644 17.3292 13.6059C16.9769 14.1177 16.2205 14.1986 15.7429 13.7858C15.3592 13.4541 15.2919 12.9062 15.5746 12.4838C16.7586 10.6773 16.6304 8.33503 15.2556 6.65682C14.9283 6.26509 14.9354 5.71337 15.2807 5.34518C15.682 4.91737 16.3778 4.88648 16.7935 5.2755Z" fill="currentColor"/></svg>';

const RuxIconAntenna$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'auto';
  }
  get iconSize() {
    const sizes = {
      'extra-small': '1rem',
      small: '2rem',
      normal: '3rem',
      large: '4rem',
    };
    if (sizes[this.size]) {
      return sizes[this.size];
    }
    else {
      return this.size;
    }
  }
  render() {
    const style = {
      height: this.iconSize,
      width: this.iconSize,
    };
    return h("div", { style: style, innerHTML: svgIcon });
  }
}, [0, "rux-icon-antenna", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-antenna"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-antenna":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconAntenna$1);
      }
      break;
  } });
}

const RuxIconAntenna = RuxIconAntenna$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconAntenna, defineCustomElement };
