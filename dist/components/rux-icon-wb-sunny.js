import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.549805H12.01C12.56 0.549805 13 0.989805 13 1.5398V2.5098C13 3.0598 12.56 3.4998 12 3.4898H11.99C11.44 3.4898 11 3.0498 11 2.4998V1.5398C11 0.989805 11.44 0.549805 12 0.549805ZM6.05 4.1398L5.66 3.7498C5.27 3.3598 4.64 3.3698 4.26 3.7498L4.25 3.7598C3.86 4.1498 3.86 4.7798 4.25 5.1598L4.64 5.5498C5.03 5.93981 5.65 5.93981 6.04 5.5498L6.05 5.5398C6.44 5.1598 6.44 4.5198 6.05 4.1398ZM3.01 10.4998H1.99C1.44 10.4998 1 10.9398 1 11.4898V11.4998C1 12.0498 1.44 12.4898 1.99 12.4898H3C3.56 12.4998 4 12.0598 4 11.5098V11.4998C4 10.9398 3.56 10.4998 3.01 10.4998ZM19.75 3.7598C19.36 3.3698 18.73 3.3698 18.34 3.7498L17.95 4.1398C17.56 4.5298 17.56 5.1598 17.95 5.5398L17.96 5.5498C18.35 5.9398 18.98 5.9398 19.36 5.5498L19.75 5.1598C20.14 4.7698 20.14 4.1498 19.75 3.7598ZM18.33 19.2498L17.94 18.8598C17.55 18.4698 17.55 17.8498 17.95 17.4498C18.33 17.0698 18.96 17.0598 19.35 17.4498L19.74 17.8398C20.13 18.2298 20.13 18.8598 19.74 19.2498C19.35 19.6398 18.72 19.6398 18.33 19.2498ZM20 11.4898V11.4998C20 12.0498 20.44 12.4898 20.99 12.4898H22C22.55 12.4898 22.99 12.0498 22.99 11.4998V11.4898C22.99 10.9398 22.55 10.4998 22 10.4998H20.99C20.44 10.4998 20 10.9398 20 11.4898ZM6 11.4998C6 8.1898 8.69 5.4998 12 5.4998C15.31 5.4998 18 8.1898 18 11.4998C18 14.8098 15.31 17.4998 12 17.4998C8.69 17.4998 6 14.8098 6 11.4998ZM11.99 22.4498H12C12.55 22.4498 12.99 22.0098 12.99 21.4598V20.4998C12.99 19.9498 12.55 19.5098 12 19.5098H11.99C11.44 19.5098 11 19.9498 11 20.4998V21.4598C11 22.0098 11.44 22.4498 11.99 22.4498ZM5.66 19.2398C5.27 19.6298 4.64 19.6298 4.25 19.2398C3.86 18.8498 3.86 18.2298 4.24 17.8298L4.63 17.4398C5.02 17.0498 5.65 17.0498 6.04 17.4398L6.05 17.4498C6.43 17.8298 6.44 18.4598 6.05 18.8498L5.66 19.2398Z" fill="currentColor"/></svg>';

const RuxIconWbSunny$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-wb-sunny", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-wb-sunny"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-wb-sunny":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconWbSunny$1);
      }
      break;
  } });
}

const RuxIconWbSunny = RuxIconWbSunny$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconWbSunny, defineCustomElement };
