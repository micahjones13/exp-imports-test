import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.00003V3.21003C12 2.76003 11.46 2.54003 11.15 2.86003L7.35003 6.65003C7.15003 6.85003 7.15003 7.16003 7.35003 7.36003L11.14 11.15C11.46 11.46 12 11.24 12 10.79V8.00003C15.73 8.00003 18.68 11.42 17.86 15.29C17.39 17.56 15.55 19.39 13.29 19.86C9.72003 20.61 6.54003 18.16 6.06003 14.85C5.99003 14.37 5.57003 14 5.08003 14C4.48003 14 4.00003 14.53 4.08003 15.13C4.70003 19.52 8.88003 22.77 13.61 21.85C16.73 21.24 19.24 18.73 19.85 15.61C20.84 10.48 16.94 6.00003 12 6.00003Z" fill="currentColor"/></svg>';

const RuxIconReplay$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-replay", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-replay"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-replay":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconReplay$1);
      }
      break;
  } });
}

const RuxIconReplay = RuxIconReplay$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconReplay, defineCustomElement };
