import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 8.68989V5.99989C20 4.89989 19.1 3.99989 18 3.99989H15.31L13.41 2.09989C12.63 1.31989 11.36 1.31989 10.58 2.09989L8.69001 3.99989H6.00001C4.90001 3.99989 4.00001 4.89989 4.00001 5.99989V8.68989L2.10001 10.5899C1.32001 11.3699 1.32001 12.6399 2.10001 13.4199L4.00001 15.3199V17.9999C4.00001 19.0999 4.90001 19.9999 6.00001 19.9999H8.69001L10.59 21.8999C11.37 22.6799 12.64 22.6799 13.42 21.8999L15.32 19.9999H18C19.1 19.9999 20 19.0999 20 17.9999V15.3099L21.9 13.4099C22.68 12.6299 22.68 11.3599 21.9 10.5799L20 8.68989ZM10.85 12.6499H13.15L12 8.99989L10.85 12.6499ZM13.6 13.9999L14.09 15.3999C14.22 15.7599 14.55 15.9999 14.94 15.9899C15.56 15.9899 15.99 15.3799 15.78 14.7999L13.34 7.93989C13.13 7.37989 12.6 6.99989 12 6.99989C11.4 6.99989 10.87 7.37989 10.67 7.94989L8.23001 14.8099C8.02001 15.3899 8.45001 15.9999 9.07001 15.9999C9.45001 15.9999 9.78001 15.7599 9.91001 15.3999L10.4 13.9999H13.6Z" fill="currentColor"/></svg>';

const RuxIconBrightnessAuto$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-brightness-auto", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-brightness-auto"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-brightness-auto":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBrightnessAuto$1);
      }
      break;
  } });
}

const RuxIconBrightnessAuto = RuxIconBrightnessAuto$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBrightnessAuto, defineCustomElement };
