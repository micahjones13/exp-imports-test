import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const svgIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.8725 5.4725L8.3225 4.0225C8.6325 3.7125 9.1725 3.9325 9.1725 4.3825V8.6725C9.1725 8.9525 8.9525 9.1725 8.6725 9.1725H4.3825C3.9325 9.1725 3.7125 8.6325 4.0225 8.3225L5.4725 6.8725L3.2925 4.7125C2.9025 4.3225 2.9025 3.6825 3.2925 3.2925C3.6825 2.9025 4.3225 2.9025 4.7125 3.2925L6.8725 5.4725ZM18.5275 6.8725L19.9775 8.3225C20.2875 8.6325 20.0675 9.1725 19.6175 9.1725H15.3275C15.0475 9.1725 14.8275 8.9525 14.8275 8.6725V4.3825C14.8275 3.9325 15.3675 3.7125 15.6775 4.0225L17.1275 5.4725L19.2875 3.2925C19.6775 2.9025 20.3175 2.9025 20.7075 3.2925C21.0975 3.6825 21.0975 4.3225 20.7075 4.7125L18.5275 6.8725ZM4.0225 15.6775L5.4725 17.1275L3.2925 19.2875C2.9025 19.6775 2.9025 20.3175 3.2925 20.7075C3.6825 21.0975 4.3225 21.0975 4.7125 20.7075L6.8725 18.5275L8.3225 19.9775C8.6325 20.2875 9.1725 20.0675 9.1725 19.6175V15.3275C9.1725 15.0475 8.9525 14.8275 8.6725 14.8275H4.3825C3.9325 14.8275 3.7125 15.3675 4.0225 15.6775ZM17.1275 18.5275L15.6775 19.9775C15.3675 20.2875 14.8275 20.0675 14.8275 19.6175V15.3275C14.8275 15.0475 15.0475 14.8275 15.3275 14.8275H19.6175C20.0675 14.8275 20.2875 15.3675 19.9775 15.6775L18.5275 17.1275L20.7075 19.2875C21.0975 19.6775 21.0975 20.3175 20.7075 20.7075C20.3175 21.0975 19.6775 21.0975 19.2875 20.7075L17.1275 18.5275Z" fill="currentColor"/></svg>';

const RuxIconZoomInMap$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
}, [0, "rux-icon-zoom-in-map", {
    "size": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon-zoom-in-map"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon-zoom-in-map":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIconZoomInMap$1);
      }
      break;
  } });
}

const RuxIconZoomInMap = RuxIconZoomInMap$1;
const defineCustomElement = defineCustomElement$1;

export { RuxIconZoomInMap, defineCustomElement };
