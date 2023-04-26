import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.8384 3H18.2784C19.3344 3 20.1984 3.9 20.1984 5V19C20.1984 20.1 19.3344 21 18.2784 21H4.8384C3.7824 21 2.9184 20.1 2.9184 19V5C2.9184 3.9 3.7824 3 4.8384 3ZM12.5184 16C12.5184 16.55 12.9504 17 13.4784 17C14.0064 17 14.4384 16.55 14.4384 16V8C14.4384 7.45 14.0064 7 13.4784 7C12.9504 7 12.5184 7.45 12.5184 8V11H10.5984V8C10.5984 7.45 10.1664 7 9.6384 7C9.1104 7 8.6784 7.45 8.6784 8V12C8.6784 12.55 9.1104 13 9.6384 13H12.5184V16Z" fill="currentColor"/></svg>';

const RuxIconLooks4$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-looks-4", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-looks-4"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-looks-4":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLooks4$1);
      }
      break;
  } });
}

const RuxIconLooks4 = RuxIconLooks4$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLooks4, defineCustomElement };
