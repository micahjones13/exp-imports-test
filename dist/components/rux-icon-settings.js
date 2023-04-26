import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 12C19.5 12.34 19.47 12.66 19.43 12.98L21.54 14.63C21.73 14.78 21.78 15.05 21.66 15.27L19.66 18.73C19.54 18.95 19.28 19.04 19.05 18.95L16.56 17.95C16.04 18.34 15.48 18.68 14.87 18.93L14.49 21.58C14.46 21.82 14.25 22 14 22H10C9.75002 22 9.54002 21.82 9.51002 21.58L9.13002 18.93C8.52002 18.68 7.96002 18.35 7.44002 17.95L4.95002 18.95C4.73002 19.03 4.46002 18.95 4.34002 18.73L2.34002 15.27C2.22002 15.05 2.27002 14.78 2.46002 14.63L4.57002 12.98C4.53002 12.66 4.50002 12.33 4.50002 12C4.50002 11.67 4.53002 11.34 4.57002 11.02L2.46002 9.37C2.27002 9.22 2.21002 8.95 2.34002 8.73L4.34002 5.27C4.46002 5.05 4.72002 4.96 4.95002 5.05L7.44002 6.05C7.96002 5.66 8.52002 5.32 9.13002 5.07L9.51002 2.42C9.54002 2.18 9.75002 2 10 2H14C14.25 2 14.46 2.18 14.49 2.42L14.87 5.07C15.48 5.32 16.04 5.65 16.56 6.05L19.05 5.05C19.27 4.97 19.54 5.05 19.66 5.27L21.66 8.73C21.78 8.95 21.73 9.22 21.54 9.37L19.43 11.02C19.47 11.34 19.5 11.66 19.5 12ZM8.50002 12C8.50002 13.93 10.07 15.5 12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.50002 10.07 8.50002 12Z" fill="currentColor"/></svg>';

const RuxIconSettings$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-settings", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-settings"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-settings":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconSettings$1);
      }
      break;
  } });
}

const RuxIconSettings = RuxIconSettings$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconSettings, defineCustomElement };
