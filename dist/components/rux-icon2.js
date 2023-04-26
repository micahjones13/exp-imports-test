import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const ruxIconCss = ":host{display:inline-flex;color:var(--color-background-interactive-default)}:host([hidden]){display:none}svg,svg>svg{height:100%;width:auto}.icon{display:inline-flex}";

const RuxIcon = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    // eslint-disable-next-line
    this.svg = '';
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'normal';
  }
  render() {
    const SVG = `rux-icon-${this.icon}`;
    return (h(Host, null, h(SVG, { class: "icon", part: "icon", size: this.size })));
  }
  static get style() { return ruxIconCss; }
}, [1, "rux-icon", {
    "size": [513],
    "icon": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxIcon);
      }
      break;
  } });
}

export { RuxIcon as R, defineCustomElement as d };
