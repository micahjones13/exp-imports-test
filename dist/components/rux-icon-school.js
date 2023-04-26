import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.61003 8.11979L11.04 3.51979C11.64 3.19979 12.36 3.19979 12.96 3.51979L22.48 8.70978C22.8 8.88978 23 9.21979 23 9.58979V15.9998C23 16.5498 22.55 16.9998 22 16.9998C21.45 16.9998 21 16.5498 21 15.9998V10.0898L12.96 14.4798C12.36 14.8098 11.64 14.8098 11.04 14.4798L2.61003 9.87979C1.92003 9.49978 1.92003 8.49979 2.61003 8.11979ZM5.00003 15.9898V13.1798L11.04 16.4798C11.64 16.8098 12.36 16.8098 12.96 16.4798L19 13.1798V15.9898C19 16.7198 18.6 17.3998 17.96 17.7498L12.96 20.4798C12.36 20.8098 11.64 20.8098 11.04 20.4798L6.04003 17.7498C5.40003 17.3998 5.00003 16.7198 5.00003 15.9898Z" fill="currentColor"/></svg>';

const RuxIconSchool$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-school", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-school"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-school":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSchool$1);
      }
      break;
  } });
}

const RuxIconSchool = RuxIconSchool$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSchool, defineCustomElement };
