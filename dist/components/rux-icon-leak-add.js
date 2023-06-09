import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.98 3.89002C12.03 3.39002 12.47 3.02002 12.97 3.02002C13.57 3.02002 14.03 3.55002 13.96 4.13002C13.44 9.31002 9.31002 13.44 4.12002 13.96C3.53002 14.02 3.02002 13.55 3.02002 12.96C3.02002 12.45 3.40002 12.02 3.90002 11.97C8.17002 11.56 11.57 8.16002 11.98 3.89002ZM12.04 20.13C11.99 20.63 11.55 21 11.05 21C10.46 21 10 20.48 10.06 19.89C10.58 14.71 14.71 10.58 19.9 10.06C20.49 10 21 10.47 21 11.06C21 11.57 20.62 12 20.12 12.05C15.85 12.46 12.45 15.86 12.04 20.13ZM21 21H18C18 19.34 19.34 18 21 18V21ZM15.09 21C15.58 21 15.99 20.64 16.07 20.15C16.43 18.07 18.07 16.43 20.15 16.07C20.64 15.99 21 15.58 21 15.09C21 14.48 20.46 14 19.86 14.09C16.9 14.57 14.57 16.9 14.09 19.86C13.99 20.46 14.48 21 15.09 21ZM6.03002 3.02002H3.03002V6.02002C4.69002 6.02002 6.03002 4.68002 6.03002 3.02002ZM7.96002 3.87002C8.04002 3.38002 8.45002 3.02002 8.94002 3.02002C9.54002 3.02002 10.03 3.56002 9.94002 4.17002C9.46002 7.13002 7.13002 9.46002 4.17002 9.94002C3.57002 10.03 3.03002 9.55002 3.03002 8.94002C3.03002 8.44002 3.39002 8.04002 3.88002 7.95002C5.96002 7.59002 7.60002 5.95002 7.96002 3.87002Z" fill="currentColor"/></svg>';

const RuxIconLeakAdd$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-leak-add", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-leak-add"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-leak-add":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLeakAdd$1);
      }
      break;
  } });
}

const RuxIconLeakAdd = RuxIconLeakAdd$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLeakAdd, defineCustomElement };
