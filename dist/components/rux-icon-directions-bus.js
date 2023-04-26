import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 18.22C4.39 17.67 4 16.88 4 16V6C4 2.5 7.58 2 12 2C16.42 2 20 2.5 20 6V16C20 16.88 19.61 17.67 19 18.22V19.5C19 20.33 18.32 21 17.5 21C16.67 21 16 20.32 16 19.5V19H8V19.5C8 20.33 7.33 21 6.5 21C5.67 21 5 20.33 5 19.5V18.22ZM6 15.5C6 16.33 6.67 17 7.5 17C8.33 17 9 16.33 9 15.5C9 14.67 8.33 14 7.5 14C6.67 14 6 14.67 6 15.5ZM16.5 17C15.67 17 15 16.33 15 15.5C15 14.67 15.67 14 16.5 14C17.33 14 18 14.67 18 15.5C18 16.33 17.33 17 16.5 17ZM6 11H18V6H6V11Z" fill="currentColor"/></svg>';

const RuxIconDirectionsBus$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-directions-bus", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-directions-bus"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-directions-bus":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconDirectionsBus$1);
      }
      break;
  } });
}

const RuxIconDirectionsBus = RuxIconDirectionsBus$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconDirectionsBus, defineCustomElement };
