import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.00613 20.7974C7.07104 21.4685 7.64294 22 8.33 22H15.66L15.789 21.9939C15.8539 21.9877 15.9173 21.9769 15.9789 21.9618L16.0472 21.9433L16.166 21.9013L16.3061 21.8345L16.4346 21.7541L16.5121 21.695L16.5893 21.6266L16.7101 21.4943L16.7834 21.3932L16.8512 21.2777L16.9127 21.1413L16.9522 21.0216L16.9746 20.9276L16.9954 20.7808L17 20.67V5.33L16.9939 5.20262C16.929 4.53149 16.3571 4 15.67 4H14V3L13.9932 2.8838C13.9352 2.38801 13.5107 2 13 2H11L10.8838 2.00676C10.388 2.0648 10 2.48929 10 3V4H8.33L8.20262 4.00613C7.53149 4.07104 7 4.64294 7 5.33V20.67L7.00613 20.7974ZM11 3H13V5H15.67L15.7352 5.00689C15.8834 5.03847 16 5.1745 16 5.33V17H7.999L8 5.33L8.00689 5.2648C8.03847 5.11659 8.1745 5 8.33 5H11V3Z" fill="currentColor"/></svg>';

const RuxIconBattery20$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-battery-20", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-battery-20"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-battery-20":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconBattery20$1);
      }
      break;
  } });
}

const RuxIconBattery20 = RuxIconBattery20$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconBattery20, defineCustomElement };
