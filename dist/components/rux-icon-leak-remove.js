import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.93003 4.16002C10.03 3.56002 9.54003 3.02002 8.93003 3.02002C8.52003 3.02002 8.18003 3.28002 8.03003 3.64002L9.65003 5.26002C9.78003 4.91002 9.87003 4.54002 9.93003 4.16002ZM12.97 3.03002C13.57 3.03002 14.03 3.55002 13.97 4.14002C13.82 5.63002 13.36 7.03002 12.67 8.29002L11.19 6.81002C11.6 5.91002 11.88 4.93002 11.98 3.90002C12.03 3.40002 12.47 3.03002 12.97 3.03002ZM20.12 12.04C20.62 11.99 21 11.56 21 11.05C21 10.46 20.49 9.99002 19.9 10.05C18.4 10.2 17 10.66 15.74 11.35L17.22 12.83C18.12 12.42 19.09 12.14 20.12 12.04ZM21 15.09C21 14.48 20.46 14 19.86 14.09C19.48 14.15 19.11 14.25 18.75 14.37L20.37 15.99C20.74 15.84 21 15.5 21 15.09ZM5.12003 3.56002L20.44 18.88C20.83 19.27 20.83 19.9 20.45 20.31C20.06 20.7 19.43 20.7 19.04 20.31L16.91 18.18C16.51 18.77 16.21 19.44 16.09 20.17C16.01 20.66 15.6 21.02 15.11 21.02C14.5 21.02 14.01 20.48 14.11 19.88C14.3 18.71 14.79 17.65 15.48 16.75L14.05 15.32C12.96 16.66 12.24 18.32 12.06 20.14C12.01 20.64 11.57 21.01 11.07 21.01C10.47 21.01 10.01 20.49 10.07 19.9C10.3 17.62 11.23 15.55 12.63 13.9L10.15 11.42C8.50003 12.83 6.42003 13.75 4.14003 13.98C3.55003 14.04 3.04003 13.57 3.04003 12.98C3.04003 12.47 3.42003 12.04 3.92003 11.99C5.73003 11.82 7.39003 11.1 8.73003 10L7.30003 8.57002C6.40003 9.26002 5.34003 9.75002 4.17003 9.94002C3.57003 10.03 3.03003 9.55002 3.03003 8.94002C3.03003 8.44002 3.39003 8.04002 3.87003 7.94002C4.60003 7.82002 5.27003 7.53002 5.86003 7.12002L3.71003 4.97002C3.32003 4.58002 3.32003 3.95002 3.71003 3.56002C4.10003 3.17002 4.73003 3.17002 5.12003 3.56002Z" fill="currentColor"/></svg>';

const RuxIconLeakRemove$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-leak-remove", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-leak-remove"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-leak-remove":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconLeakRemove$1);
      }
      break;
  } });
}

const RuxIconLeakRemove = RuxIconLeakRemove$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconLeakRemove, defineCustomElement };
