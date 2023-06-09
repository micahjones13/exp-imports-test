import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 6.00015H10C9.45 6.00015 9 5.55015 9 5.00015C9 4.45015 9.45 4.00015 10 4.00015H17V3.26015C17 2.79015 17.56 2.56015 17.89 2.89015L19.63 4.63015C19.83 4.84015 19.83 5.17015 19.63 5.37015L17.89 7.11015C17.56 7.44015 17 7.20015 17 6.74015V6.00015ZM20 17.0001H21C21.55 17.0001 22 17.4501 22 18.0001C22 18.5501 21.55 19.0001 21 19.0001H14C14 20.6601 12.66 22.0001 11 22.0001C9.34 22.0001 8 20.6601 8 19.0001H6C4.9 19.0001 4 18.1001 4 17.0001V15.0001C4 14.4501 4.45 14.0001 5 14.0001H11V11.0001H7V11.7401C7 12.2101 6.44 12.4401 6.11 12.1101L4.37 10.3701C4.17 10.1601 4.17 9.83015 4.37 9.63015L6.11 7.89015C6.44 7.56015 7 7.80015 7 8.26015V9.00015H18C19.1 9.00015 20 9.90015 20 11.0001V17.0001ZM10 19.0001C10 19.5501 10.45 20.0001 11 20.0001C11.55 20.0001 12 19.5501 12 19.0001C12 18.4501 11.55 18.0001 11 18.0001C10.45 18.0001 10 18.4501 10 19.0001ZM18 14.0001H14V11.0001H17C17.55 11.0001 18 11.4501 18 12.0001V14.0001Z" fill="currentColor"/></svg>';

const RuxIconRvHookup$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-rv-hookup", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-rv-hookup"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-rv-hookup":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconRvHookup$1);
      }
      break;
  } });
}

const RuxIconRvHookup = RuxIconRvHookup$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconRvHookup, defineCustomElement };
