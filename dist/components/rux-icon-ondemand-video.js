import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V20C8 20.55 8.45 21 9 21H15C15.55 21 16 20.55 16 20V19H21C22.1 19 22.99 18.1 22.99 17L23 5C23 3.89 22.1 3 21 3ZM20 17H4C3.45 17 3 16.55 3 16V6C3 5.45 3.45 5 4 5H20C20.55 5 21 5.45 21 6V16C21 16.55 20.55 17 20 17ZM10.5 14.15L14.48 11.87C15.15 11.48 15.15 10.52 14.48 10.13L10.5 7.85C9.83 7.47 9 7.95 9 8.72V13.28C9 14.04 9.83 14.53 10.5 14.15Z" fill="currentColor"/></svg>';

const RuxIconOndemandVideo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-ondemand-video", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-ondemand-video"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-ondemand-video":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconOndemandVideo$1);
      }
      break;
  } });
}

const RuxIconOndemandVideo = RuxIconOndemandVideo$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconOndemandVideo, defineCustomElement };
