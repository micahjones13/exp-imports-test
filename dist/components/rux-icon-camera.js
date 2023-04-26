import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.46 2.11976C13.81 2.15976 13.98 2.55976 13.81 2.85976L9.77999 9.84976C9.57999 10.1798 9.09999 10.1798 8.90999 9.84976L5.89999 4.62976C5.76999 4.40976 5.82999 4.12976 6.01999 3.97976C8.15999 2.39976 10.84 1.74976 13.46 2.11976ZM15.95 2.82976C18.38 3.86976 20.32 5.85976 21.3 8.32976C21.43 8.64976 21.18 8.99976 20.83 8.99976H12.75C12.36 8.99976 12.12 8.57976 12.31 8.25976L15.32 3.04976C15.45 2.82976 15.72 2.72976 15.95 2.82976ZM21.37 9.99976H15.17C14.79 9.99976 14.54 10.4198 14.74 10.7498L19 18.1398C19.17 18.4398 19.6 18.4898 19.82 18.2198C21.56 16.0398 22.3 13.1898 21.87 10.4298C21.84 10.1798 21.62 9.99976 21.37 9.99976ZM2.12999 13.5798C1.69999 10.8098 2.44999 7.97976 4.17999 5.78976C4.38999 5.51976 4.81999 5.56976 4.99999 5.86976L9.25999 13.2498C9.45999 13.5798 9.20999 13.9998 8.82999 13.9998H2.62999C2.37999 13.9998 2.15999 13.8198 2.12999 13.5798ZM2.69999 15.6698C3.67999 18.1398 5.61999 20.1298 8.04999 21.1698C8.27999 21.2698 8.54999 21.1698 8.67999 20.9498L11.69 15.7398C11.88 15.4098 11.64 14.9898 11.26 14.9898H3.16999C2.81999 14.9998 2.56999 15.3498 2.69999 15.6698ZM17.97 20.0298C15.83 21.6098 13.15 22.2598 10.53 21.8898C10.19 21.8398 10.01 21.4398 10.18 21.1398L14.22 14.1498C14.42 13.8198 14.9 13.8198 15.09 14.1498L18.1 19.3698C18.23 19.5898 18.17 19.8798 17.97 20.0298Z" fill="currentColor"/></svg>';

const RuxIconCamera$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-camera", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-camera"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-camera":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconCamera$1);
      }
      break;
  } });
}

const RuxIconCamera = RuxIconCamera$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconCamera, defineCustomElement };
