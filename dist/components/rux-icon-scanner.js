import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.8 9.69992L5.15 4.34992C4.63 4.15992 4.05 4.42992 3.85 4.94992C3.66 5.47992 3.93 6.05992 4.45 6.24992L17.6 10.9999H5C3.9 10.9999 3 11.8999 3 12.9999V16.9999C3 18.0999 3.9 18.9999 5 18.9999H19C20.1 18.9999 21 18.0999 21 16.9999V11.4999C21 10.6999 20.5 9.89992 19.8 9.69992ZM7 15.9999H5V13.9999H7V15.9999ZM10 15.9999H18C18.55 15.9999 19 15.5499 19 14.9999C19 14.4499 18.55 13.9999 18 13.9999H10C9.45 13.9999 9 14.4499 9 14.9999C9 15.5499 9.45 15.9999 10 15.9999Z" fill="currentColor"/></svg>';

const RuxIconScanner$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-scanner", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-scanner"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-scanner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconScanner$1);
      }
      break;
  } });
}

const RuxIconScanner = RuxIconScanner$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconScanner, defineCustomElement };
