import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const ruxOptionGroupCss = ":host{display:block}";

const RuxOptionGroup$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.groupChanged = createEvent(this, "rux-option-group-changed", 7);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange() {
    this.groupChanged.emit();
  }
  render() {
    return (h(Host, null, h("slot", { onSlotchange: this._handleSlotChange })));
  }
  get el() { return this; }
  static get style() { return ruxOptionGroupCss; }
}, [1, "rux-option-group", {
    "label": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-option-group"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-option-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxOptionGroup$1);
      }
      break;
  } });
}

const RuxOptionGroup = RuxOptionGroup$1;
const defineCustomElement = defineCustomElement$1;

export { RuxOptionGroup, defineCustomElement };
