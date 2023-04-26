import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const ruxOptionCss = ":host{display:block}";

const RuxOption$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.optionChanged = createEvent(this, "rux-option-changed", 7);
    /** Sets the option as disabled */
    this.disabled = false;
  }
  handleValueChange() {
    this.optionChanged.emit();
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange() {
    this.optionChanged.emit();
  }
  render() {
    return (h(Host, { class: "rux-option", disabled: this.disabled }, this.label ? this.label : ''));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["handleValueChange"],
    "label": ["handleValueChange"],
    "disabled": ["handleValueChange"]
  }; }
  static get style() { return ruxOptionCss; }
}, [1, "rux-option", {
    "value": [513],
    "label": [513],
    "disabled": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-option"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-option":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxOption$1);
      }
      break;
  } });
}

const RuxOption = RuxOption$1;
const defineCustomElement = defineCustomElement$1;

export { RuxOption, defineCustomElement };
