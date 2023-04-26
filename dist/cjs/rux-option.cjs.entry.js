'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxOptionCss = ":host{display:block}";

const RuxOption = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.optionChanged = index.createEvent(this, "rux-option-changed", 7);
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
    return (index.h(index.Host, { class: "rux-option", disabled: this.disabled }, this.label ? this.label : ''));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["handleValueChange"],
    "label": ["handleValueChange"],
    "disabled": ["handleValueChange"]
  }; }
};
RuxOption.style = ruxOptionCss;

exports.rux_option = RuxOption;
