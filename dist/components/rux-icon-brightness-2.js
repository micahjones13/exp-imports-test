import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.43 2.29983C10.05 1.70983 7.74998 2.02983 5.79998 2.93983C5.44998 3.09983 5.38998 3.57983 5.69998 3.79983C8.29998 5.59983 9.99998 8.59983 9.99998 11.9998C9.99998 15.3998 8.29998 18.3998 5.69998 20.1998C5.37998 20.4198 5.43998 20.8998 5.78998 21.0598C7.06998 21.6598 8.49998 21.9998 9.99998 21.9998C16.05 21.9998 20.85 16.6198 19.87 10.3998C19.26 6.47983 16.28 3.23983 12.43 2.29983Z" fill="currentColor"/></svg>';

const RuxIconBrightness2$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-brightness-2", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-brightness-2"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-brightness-2":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBrightness2$1);
      }
      break;
  } });
}

const RuxIconBrightness2 = RuxIconBrightness2$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBrightness2, defineCustomElement };
