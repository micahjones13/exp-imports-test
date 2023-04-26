import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5H18C19.1 5 20 5.9 20 7V9.15C18.84 9.57 18 10.67 18 11.97V14H6V11.97C6 10.66 5.16 9.56 4 9.15V7C4 5.9 4.9 5 6 5ZM19 12C19 10.9 19.9 10 21 10C22.1 10 23 10.9 23 12V17C23 18.1 22.1 19 21 19H3C1.9 19 1 18.1 1 17V12C1 10.9 1.9 10 3 10C4.1 10 5 10.9 5 12V15H19V12Z" fill="currentColor"/></svg>';

const RuxIconWeekend$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-weekend", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-weekend"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-weekend":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWeekend$1);
      }
      break;
  } });
}

const RuxIconWeekend = RuxIconWeekend$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWeekend, defineCustomElement };
