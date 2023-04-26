import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 14V10C7.66002 10 5.79002 7.99 6.02002 5.61C6.22002 3.53 8.08002 2 10.17 2H17C17.55 2 18 2.45 18 3C18 3.55 17.55 4 17 4H16V14C16 14.55 15.55 15 15 15C14.45 15 14 14.55 14 14V4H12V14C12 14.55 11.55 15 11 15C10.45 15 10 14.55 10 14ZM8.00002 15.21V17H19C19.55 17 20 17.45 20 18C20 18.55 19.55 19 19 19H8.00002V20.79C8.00002 21.24 7.46002 21.46 7.15002 21.15L4.36002 18.36C4.16002 18.16 4.16002 17.85 4.36002 17.65L7.15002 14.86C7.46002 14.54 8.00002 14.76 8.00002 15.21Z" fill="currentColor"/></svg>';

const RuxIconFormatTextdirectionRToL$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-format-textdirection-r-to-l", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-format-textdirection-r-to-l"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-format-textdirection-r-to-l":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFormatTextdirectionRToL$1);
      }
      break;
  } });
}

const RuxIconFormatTextdirectionRToL = RuxIconFormatTextdirectionRToL$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFormatTextdirectionRToL, defineCustomElement };
