import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-a1205123.js';

const ruxOptionCss = ":host{display:block}";

const RuxOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["handleValueChange"],
    "label": ["handleValueChange"],
    "disabled": ["handleValueChange"]
  }; }
};
RuxOption.style = ruxOptionCss;

export { RuxOption as rux_option };
