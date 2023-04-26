'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxCheckboxCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:inline-block;--_checkbox-checkmark-color-fill:var(--color-border-interactive-default);--_checkbox-color-border:var(--color-border-interactive-muted);--_checkbox-color-background:var(--color-background-base-default)}.hidden,:host([hidden]){display:none}.rux-form-field{display:flex;font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);letter-spacing:var(--font-control-body-1-letter-spacing);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);color:var(--color-text-primary);position:relative}label{display:flex;align-items:center}.rux-checkbox{display:flex;cursor:pointer}.rux-checkbox--disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-checkbox__input{position:absolute;pointer-events:none;width:var(--spacing-6);height:var(--spacing-6);margin:var(--spacing-0);opacity:0}.rux-checkbox__input--no-label{margin-right:var(--spacing-0)}.rux-checkbox--focused{border-radius:var(--focus-radius);outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-checkbox__control{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));padding:var(--spacing-050)}.rux-checkbox__control svg{width:100%;height:100%}.rux-checkbox:not(.rux-checkbox--disabled) .rux-checkbox__control:hover{--_checkbox-color-border:var(--color-border-interactive-hover)}.rux-checkbox__label{margin-left:var(--spacing-2)}";

let id = 0;
const RuxCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxChange = index.createEvent(this, "ruxchange", 7);
    this.ruxInput = index.createEvent(this, "ruxinput", 7);
    this.ruxFocus = index.createEvent(this, "ruxfocus", 7);
    this.ruxBlur = index.createEvent(this, "ruxblur", 7);
    this.checkboxId = `rux-checkbox-${++id}`;
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.isFocused = false;
    /**
     * The checkbox name
     */
    this.name = '';
    /**
     * The checkbox value
     */
    this.value = '';
    /**
     * Toggles checked state of a checkbox
     */
    this.checked = false;
    /**
     * Toggles indeterminate state of a checkbox. The indeterminate property does not exist in HTML, but can be set in JS. [HTML Checkbox & Indeterminate State](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate)
     */
    this.indeterminate = false;
    /**
     * Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    this._onBlur = () => {
      this.isFocused = false;
      this.ruxBlur.emit();
    };
    this._onFocus = () => {
      var _a;
      this.isFocused = ((_a = this._inputEl) === null || _a === void 0 ? void 0 : _a.matches(':focus-visible')) ? true : false;
      this.ruxFocus.emit();
    };
  }
  updateChecked() {
    if (this._inputEl) {
      this._inputEl.checked = this.checked;
    }
  }
  updateIndeterminate() {
    if (this._inputEl) {
      this._inputEl.indeterminate = this.indeterminate;
    }
  }
  connectedCallback() {
    this._onClick = this._onClick.bind(this);
    this._onInput = this._onInput.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  componentWillLoad() {
    this._handleSlotChange();
  }
  componentDidLoad() {
    if (this._inputEl && this.indeterminate) {
      // indeterminate property does not exist in HTML but is accessible via js
      this._inputEl.indeterminate = true;
    }
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleSlotChange() {
    this.hasLabelSlot = utils.hasSlot(this.el);
    this.hasHelpSlot = utils.hasSlot(this.el, 'help-text');
  }
  _onClick(e) {
    const target = e.target;
    if (this.indeterminate) {
      this.indeterminate = false;
    }
    this.checked = target.checked;
    this.ruxChange.emit();
  }
  _onInput(e) {
    const target = e.target;
    this.value = target.value;
    this.ruxInput.emit();
  }
  render() {
    const { _handleSlotChange, _onBlur, _onFocus, _onClick, _onInput, checkboxId, checked, disabled, el, helpText, hasHelpSlot, name, value, indeterminate, label, isFocused, hasLabel, hasLabelSlot, } = this;
    if (!indeterminate) {
      utils.renderHiddenInput(true, el, name, value || 'on', disabled, checked);
    }
    return (index.h(index.Host, null, index.h("div", { class: "rux-form-field", part: "form-field" }, index.h("label", { class: {
        'rux-checkbox': true,
        'rux-checkbox--disabled': disabled,
        'rux-checkbox--focused': isFocused,
      }, htmlFor: checkboxId }, index.h("input", { type: "checkbox", class: {
        'rux-checkbox__input': true,
        'rux-checkbox__input--no-label': !hasLabel,
      }, name: name, id: checkboxId, disabled: disabled, checked: checked,
      //Allows storybook's indetermiante control to take effect.
      indeterminate: indeterminate, value: value, onChange: _onClick, onInput: _onInput, onBlur: _onBlur, onFocus: _onFocus, ref: (el) => (this._inputEl = el) }), index.h("div", { class: "rux-checkbox__control" }, indeterminate ? (index.h("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, index.h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), index.h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "M4 8h10v2H4z" }), index.h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" }))) : checked ? (index.h("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, index.h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), index.h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "m14.899 4.806-6.883 9.83-1.639-1.147 6.883-9.83z" }), index.h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "m9.163 12.997-1.147 1.638L3.1 11.194l1.147-1.638z" }), index.h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" }))) : (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 18" }, index.h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), index.h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" })))), index.h("div", { part: "label", class: {
        'rux-checkbox__label': true,
        hidden: !hasLabel,
      } }, hasLabelSlot ? null : label, index.h("slot", { onSlotchange: _handleSlotChange })))), index.h("div", { class: {
        'rux-help-text': !!helpText || hasHelpSlot,
        hidden: !helpText && !hasHelpSlot,
      }, part: "help-text" }, index.h("slot", { name: "help-text", onSlotchange: _handleSlotChange }, helpText))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "checked": ["updateChecked"],
    "indeterminate": ["updateIndeterminate"]
  }; }
};
RuxCheckbox.style = ruxCheckboxCss;

exports.rux_checkbox = RuxCheckbox;
