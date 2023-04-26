import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hasSlot } from './utils.js';

const ruxRadioCss = ":host{display:inline-block;box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:inherit}.rux-form-field{display:flex;flex-direction:column;font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);letter-spacing:var(--font-control-body-1-letter-spacing);font-weight:var(--font-control-body-1-font-weight);color:var(--color-text-primary)}.rux-radio{display:flex;position:relative;line-height:1.2}.rux-radio input[type=radio]{-webkit-appearance:none;appearance:none;margin:0}.rux-radio input[type=radio]+label{position:relative;display:flex;align-items:center;justify-content:flex-start;color:var(--color-text-primary);cursor:pointer}.rux-radio input[type=radio]+label::before{box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;content:\"\";align-self:start;height:calc(var(--spacing-4) + var(--spacing-1));width:calc(var(--spacing-4) + var(--spacing-1));margin:calc(var(--spacing-1) / 2);margin-right:calc( var(--spacing-2) + (var(--spacing-1) / 2) );border:1px solid var(--color-border-interactive-muted);border-radius:var(--radius-circle);background-color:var(--color-background-base-default)}.rux-radio input[type=radio]+label::after{position:absolute;top:5px;display:flex;content:\"\"}.rux-radio input[type=radio]+.rux-radio--no-label::before{margin-right:calc(var(--spacing-1) / 2)}.rux-radio input[type=radio]:checked+label::before{background-color:var(--color-background-base-default);border-color:var(--color-border-interactive-muted)}.rux-radio input[type=radio]:checked+label::after{position:absolute;top:var(--spacing-2);display:flex;content:\"\";left:var(--spacing-2);height:var(--spacing-2);width:var(--spacing-2);border-radius:var(--radius-circle);background-color:var(--color-background-interactive-default)}.rux-radio input[type=radio]:disabled+label{cursor:not-allowed;opacity:var(--opacity-disabled)}.rux-radio input[type=radio]:not(:disabled):hover+label::before,.rux-radio input[type=radio]:not(:disabled):checked:hover+label::before{border-color:var(--color-background-interactive-hover)}.rux-radio input[type=radio]:not(:disabled):hover+label::after,.rux-radio input[type=radio]:not(:disabled):checked:hover+label::after{background-color:var(--color-background-interactive-default)}.rux-radio input[type=radio]:not(:disabled):focus-visible+label,.rux-radio input[type=radio]:not(:disabled):checked:focus-visible+label{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}:host([hidden]){display:none}";

let id = 0;
const RuxRadio$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ruxBlur = createEvent(this, "ruxblur", 7);
    this.radioId = `rux-radio-${++id}`;
    this.radioGroup = null;
    this.hasLabelSlot = false;
    /**
     * The tabindex of the radio button.
     * @internal
     */
    this.buttonTabindex = -1;
    /**
     * The radio name
     */
    this.name = '';
    /**
     * The radio value
     */
    this.value = '';
    /**
     * Toggles checked state of a radio
     */
    this.checked = false;
    /**
     * Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  /** @internal */
  async setFocus(ev) {
    var _a;
    ev.stopPropagation();
    ev.preventDefault();
    (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /** @internal */
  async setButtonTabindex(value) {
    this.buttonTabindex = value;
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this.radioGroup = this.el.closest('rux-radio-group');
    this._syncFromGroup = this._syncFromGroup.bind(this);
    if (this.radioGroup) {
      this._syncFromGroup();
      this.radioGroup.addEventListener('ruxchange', this._syncFromGroup);
    }
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  disconnectedCallback() {
    if (this.radioGroup) {
      this.radioGroup.removeEventListener('ruxchange', this._syncFromGroup);
    }
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el);
  }
  /**
   * Sets checked property when the parent Radio Group value changes.
   */
  _syncFromGroup() {
    if (this.radioGroup && this.radioGroup.value) {
      this.checked = this.radioGroup.value === this.value;
    }
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  render() {
    const { label, radioId, checked, disabled, name, value, _onChange, _onBlur, hasLabel, buttonTabindex, } = this;
    return (h("div", { class: "rux-form-field", part: "form-field" }, h("div", { class: "rux-radio" }, h("input", { type: "radio", name: name, id: radioId, disabled: disabled, checked: checked, value: value, tabindex: buttonTabindex, onChange: _onChange, onBlur: _onBlur, ref: (el) => (this.inputEl = el) }), h("label", { htmlFor: radioId, part: "label", class: {
        'rux-radio--no-label': !hasLabel,
      } }, h("slot", null, label)))));
  }
  get el() { return this; }
  static get watchers() { return {
    "label": ["handleLabelChange"]
  }; }
  static get style() { return ruxRadioCss; }
}, [1, "rux-radio", {
    "name": [1],
    "value": [1],
    "checked": [1540],
    "disabled": [516],
    "label": [1],
    "hasLabelSlot": [32],
    "buttonTabindex": [32],
    "setFocus": [64],
    "setButtonTabindex": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-radio"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-radio":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxRadio$1);
      }
      break;
  } });
}

const RuxRadio = RuxRadio$1;
const defineCustomElement = defineCustomElement$1;

export { RuxRadio, defineCustomElement };
