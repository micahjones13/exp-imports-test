'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxSwitchCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:block}.rux-switch{position:relative;display:flex;height:calc(var(--spacing-4) + var(--spacing-1));white-space:nowrap}.rux-switch__button{display:flex;align-items:center;cursor:pointer}.rux-switch__button::before{position:relative;display:flex;content:\"\";border-radius:var(--switch-radius-track);border:0;box-shadow:var(--color-border-interactive-muted) 0 0 0 1px inset;background-color:var(--color-background-base-default);height:var(--spacing-3);width:var(--spacing-8);margin:var(--spacing-1);z-index:2;transition:0.1s background-color linear}.rux-switch__button::after{position:absolute;content:\"\";left:0;z-index:3;height:calc(var(--spacing-4) + var(--spacing-1));width:calc(var(--spacing-4) + var(--spacing-1));border-radius:var(--radius-circle);box-shadow:var(--color-background-interactive-default) 0 0 0 1px inset;background-color:var(--color-background-base-default);transition:0.1s left linear, 0.1s border-color linear}.rux-switch__input{appearance:none;-webkit-appearance:none;margin:0}.rux-switch__input:checked+.rux-switch__button::before{box-shadow:var(--color-background-interactive-default) 0 0 0 1px inset;background-color:var(--color-background-interactive-default)}.rux-switch__input:checked+.rux-switch__button::after{left:calc(var(--spacing-4) + var(--spacing-1));background-color:var(--color-background-base-default);box-shadow:var(--color-background-interactive-default) 0 0 0 1px inset}.rux-switch__input:focus-visible+.rux-switch__button{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-switch__input:disabled+.rux-switch__button{cursor:not-allowed;opacity:var(--opacity-disabled)}.rux-switch:hover .rux-switch__input:not(:disabled)+.rux-switch__button::before,.rux-switch:hover .rux-switch__input:checked:not(:disabled)+.rux-switch__button::before{border-color:var(--color-background-interactive-default)}.rux-switch:hover .rux-switch__input:not(:disabled)+.rux-switch__button::after,.rux-switch:hover .rux-switch__input:checked:not(:disabled)+.rux-switch__button::after{box-shadow:var(--color-background-interactive-hover) 0 0 0 1px inset}.rux-switch:hover .rux-switch__input:not(:disabled)+.rux-switch__button::before{background-color:var(--color-background-base-default)}.rux-switch:hover .rux-switch__input:checked:not(:disabled)+.rux-switch__button::before{background-color:var(--color-background-interactive-default)}.rux-switch__label{font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);margin-left:0.75rem;color:var(--color-text-primary)}.rux-form-field{display:flex;flex-direction:column;color:var(--color-text-primary)}.hidden,:host([hidden]){display:none}";

let id = 0;
const RuxSwitch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxChange = index.createEvent(this, "ruxchange", 7);
    this.ruxInput = index.createEvent(this, "ruxinput", 7);
    this.ruxBlur = index.createEvent(this, "ruxblur", 7);
    this.switchId = `rux-switch-${++id}`;
    this.hasLabelSlot = false;
    /**
     * The switch name
     */
    this.name = '';
    /**
     * The switch value
     */
    this.value = '';
    /**
     * Toggles checked state of a switch
     */
    this.checked = false;
    /**
     * Disables the switch via HTML disabled attribute. Switch takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  connectedCallback() {
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleSlotChange() {
    this.hasLabelSlot = utils.hasSlot(this.el, 'label');
  }
  _onChange(e) {
    const target = e.target;
    this.checked = target.checked;
    this.ruxChange.emit(this.checked);
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxInput.emit();
  }
  render() {
    const { switchId, checked, disabled, name, value } = this;
    utils.renderHiddenInput(true, this.el, this.name, this.value ? this.value : 'on', this.disabled, this.checked);
    return (index.h(index.Host, { class: "rux-form-field", "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, role: "switch" }, index.h("div", { class: {
        'rux-switch': true,
      } }, index.h("input", { role: "switch", type: "checkbox", class: "rux-switch__input", name: name, id: switchId, disabled: disabled, checked: checked, value: value, "aria-checked": `${checked}`, onChange: this._onChange, onInput: this._onInput, onBlur: this._onBlur }), index.h("label", { class: "rux-switch__button", htmlFor: switchId, part: "switch" }, index.h("span", { class: {
        'rux-switch__label': true,
        hidden: !this.hasLabel,
      }, part: "label" }, index.h("slot", { onSlotchange: this._handleSlotChange, name: "label" }, this.label))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "label": ["handleLabelChange"]
  }; }
};
RuxSwitch.style = ruxSwitchCss;

exports.rux_switch = RuxSwitch;
