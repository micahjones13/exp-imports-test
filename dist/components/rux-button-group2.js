import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const ruxButtonGroupCss = ":host{display:inline}:host([hidden]){display:none}.rux-button-group{display:flex}.rux-button-group ::slotted(rux-button:not(:last-child)){margin-right:var(--spacing-2)}.rux-button-group--left{justify-content:flex-start}.rux-button-group--right{justify-content:flex-end}.rux-button-group--center{justify-content:center}";

const RuxButtonGroup = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The horizontal alignment of buttons within the group
     */
    this.hAlign = 'left';
  }
  render() {
    const { hAlign } = this;
    return (h("div", { class: {
        'rux-button-group': true,
        'rux-button-group--left': hAlign === 'left',
        'rux-button-group--right': hAlign === 'right',
        'rux-button-group--center': hAlign === 'center',
      }, part: "container" }, h("slot", null)));
  }
  static get style() { return ruxButtonGroupCss; }
}, [1, "rux-button-group", {
    "hAlign": [1, "h-align"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-button-group"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-button-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxButtonGroup);
      }
      break;
  } });
}

export { RuxButtonGroup as R, defineCustomElement as d };
