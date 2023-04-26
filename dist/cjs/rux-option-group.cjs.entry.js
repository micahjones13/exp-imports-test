'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxOptionGroupCss = ":host{display:block}";

const RuxOptionGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.groupChanged = index.createEvent(this, "rux-option-group-changed", 7);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  _handleSlotChange() {
    this.groupChanged.emit();
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", { onSlotchange: this._handleSlotChange })));
  }
  get el() { return index.getElement(this); }
};
RuxOptionGroup.style = ruxOptionGroupCss;

exports.rux_option_group = RuxOptionGroup;
