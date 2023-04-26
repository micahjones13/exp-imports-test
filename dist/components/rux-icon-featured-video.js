import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 3H21C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3ZM4 12H11C11.55 12 12 11.55 12 11V6C12 5.45 11.55 5 11 5H4C3.45 5 3 5.45 3 6V11C3 11.55 3.45 12 4 12Z" fill="currentColor"/></svg>';

const RuxIconFeaturedVideo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-featured-video", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-featured-video"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-featured-video":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconFeaturedVideo$1);
      }
      break;
  } });
}

const RuxIconFeaturedVideo = RuxIconFeaturedVideo$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconFeaturedVideo, defineCustomElement };
