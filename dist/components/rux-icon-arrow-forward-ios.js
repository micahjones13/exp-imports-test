import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.37999 21.0098C7.86999 21.4998 8.65999 21.4998 9.14999 21.0098L17.46 12.6998C17.85 12.3098 17.85 11.6798 17.46 11.2898L9.14999 2.9798C8.65999 2.4898 7.86999 2.4898 7.37999 2.9798C6.88999 3.4698 6.88999 4.2598 7.37999 4.7498L14.62 11.9998L7.36999 19.2498C6.88999 19.7298 6.88999 20.5298 7.37999 21.0098Z" fill="currentColor"/></svg>';

const RuxIconArrowForwardIos$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-arrow-forward-ios", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-arrow-forward-ios"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-arrow-forward-ios":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconArrowForwardIos$1);
      }
      break;
  } });
}

const RuxIconArrowForwardIos = RuxIconArrowForwardIos$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconArrowForwardIos, defineCustomElement };
