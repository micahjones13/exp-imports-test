import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 14V10C5 9.45002 5.45 9.00002 6 9.00002H9L12.29 5.70002C12.92 5.07002 14 5.52002 14 6.41002V17.58C14 18.47 12.92 18.92 12.29 18.29L9 15H6C5.45 15 5 14.55 5 14ZM16 7.97002C17.48 8.71002 18.5 10.23 18.5 12C18.5 13.77 17.48 15.29 16 16.02V7.97002Z" fill="currentColor"/></svg>';

const RuxIconVolumeDown$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-volume-down", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-volume-down"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-volume-down":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconVolumeDown$1);
      }
      break;
  } });
}

const RuxIconVolumeDown = RuxIconVolumeDown$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconVolumeDown, defineCustomElement };
