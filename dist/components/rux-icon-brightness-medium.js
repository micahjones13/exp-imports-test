import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.9 13.4099L20 15.3099V17.9999C20 19.0999 19.1 19.9999 18 19.9999H15.32L13.42 21.8999C12.64 22.6799 11.37 22.6799 10.59 21.8999L8.69001 19.9999H6.00001C4.90001 19.9999 4.00001 19.0999 4.00001 17.9999V15.3199L2.10001 13.4199C1.32001 12.6399 1.32001 11.3699 2.10001 10.5899L4.00001 8.68989V5.99989C4.00001 4.89989 4.90001 3.99989 6.00001 3.99989H8.69001L10.58 2.09989C11.36 1.31989 12.63 1.31989 13.41 2.09989L15.31 3.99989H18C19.1 3.99989 20 4.89989 20 5.99989V8.68989L21.9 10.5799C22.68 11.3599 22.68 12.6299 21.9 13.4099ZM12 7.09989V16.8999C12 17.5099 12.55 18.0099 13.15 17.8899C15.91 17.3499 18 14.9199 18 11.9999C18 9.07989 15.91 6.64989 13.15 6.10989C12.55 5.98989 12 6.48989 12 7.09989Z" fill="currentColor"/></svg>';

const RuxIconBrightnessMedium$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-brightness-medium", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-brightness-medium"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-brightness-medium":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBrightnessMedium$1);
      }
      break;
  } });
}

const RuxIconBrightnessMedium = RuxIconBrightnessMedium$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBrightnessMedium, defineCustomElement };
