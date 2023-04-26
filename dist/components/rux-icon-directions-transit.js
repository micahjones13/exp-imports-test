import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C7.58 2 4 2.5 4 6V15.5C4 17.43 5.57 19 7.5 19L6.35 20.15C6.04 20.46 6.26 21 6.71 21H17.3C17.75 21 17.97 20.46 17.65 20.15L16.5 19C18.43 19 20 17.43 20 15.5V6C20 2.5 16.42 2 12 2ZM7.5 17C6.67 17 6 16.33 6 15.5C6 14.67 6.67 14 7.5 14C8.33 14 9 14.67 9 15.5C9 16.33 8.33 17 7.5 17ZM6 11H11V6H6V11ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17ZM13 11H18V6H13V11Z" fill="currentColor"/></svg>';

const RuxIconDirectionsTransit$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-directions-transit", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-directions-transit"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-directions-transit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDirectionsTransit$1);
      }
      break;
  } });
}

const RuxIconDirectionsTransit = RuxIconDirectionsTransit$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDirectionsTransit, defineCustomElement };
