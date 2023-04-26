import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-a1205123.js';

const ruxOptionGroupCss = ":host{display:block}";

const RuxOptionGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
RuxOptionGroup.style = ruxOptionGroupCss;

export { RuxOptionGroup as rux_option_group };
