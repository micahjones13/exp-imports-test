'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxSelectCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{display:block;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left;scrollbar-color:var(--color-border-interactive-muted) var(--color-background-surface-default);}:host ::-webkit-scrollbar{width:var(--spacing-4);height:var(--spacing-4);background-color:transparent}:host ::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:var(--spacing-2);border:3px solid transparent;background-clip:padding-box}:host ::-webkit-scrollbar-thumb:vertical{border-left-width:var(--border-width-lg)}:host ::-webkit-scrollbar-thumb:horizontal{border-top-width:var(--border-width-lg)}:host ::-webkit-scrollbar-thumb:active,:host ::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}:host ::-webkit-scrollbar-track,:host ::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default, #1b2d3e);box-shadow:var(--scrollbar-shadow-inner-vertical)}:host ::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical)}:host ::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-horizontal)}.hidden,:host([hidden]){display:none}label{display:inline-block;margin-bottom:calc(var(--spacing-3) - 2px);color:var(--color-text-primary);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);letter-spacing:var(--font-control-body-1-letter-spacing);line-height:var(--font-control-body-1-line-height)}label .rux-label__asterisk{margin-left:var(--spacing-1)}.rux-select:not(.rux-select--multiple){background-image:url(\"data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6875 14.6375L14.925 17.875C15.4125 18.3625 16.2 18.3625 16.6875 17.875L19.925 14.6375C20.7125 13.85 20.15 12.5 19.0375 12.5H12.5625C11.45 12.5 10.9 13.85 11.6875 14.6375Z' fill='%234DACFF'/%3E%3C/svg%3E%0A\"), linear-gradient(to left, var(--color-background-surface-selected) var(--spacing-8), var(--color-background-base-default) var(--spacing-8));background-position:center right var(--spacing-025), center left var(--spacing-0);background-repeat:no-repeat}.rux-select:not(.rux-select--multiple):active:not(:disabled){background-image:url(\"data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6875 14.6375L14.925 17.875C15.4125 18.3625 16.2 18.3625 16.6875 17.875L19.925 14.6375C20.7125 13.85 20.15 12.5 19.0375 12.5H12.5625C11.45 12.5 10.9 13.85 11.6875 14.6375Z' fill='%234DACFF'/%3E%3C/svg%3E%0A\"), linear-gradient(to left, var(--color-background-surface-selected) var(--spacing-8), var(--color-background-base-default) var(--spacing-8))}.rux-select:not(.rux-select--multiple):hover:not(:disabled){cursor:pointer}.rux-select{box-sizing:border-box;position:relative;background:var(--color-background-base-default);appearance:none;-webkit-appearance:none;-moz-appearance:none;width:100%;border:1px solid var(--color-border-interactive-muted);border-radius:var(--radius-base);color:var(--color-background-interactive-default);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);letter-spacing:var(--font-control-body-1-letter-spacing);user-select:none}.rux-select--small{padding:var(--spacing-1) var(--spacing-2);padding-right:calc(var(--spacing-2) + var(--spacing-8))}.rux-select--medium{padding:var(--spacing-2);padding-right:calc(var(--spacing-2) + var(--spacing-8))}.rux-select--large{padding:var(--spacing-3) var(--spacing-2);padding-right:calc(var(--spacing-2) + var(--spacing-8))}.rux-select--multiple{background:var(--color-background-base-default);padding:0}.rux-select--multiple:disabled{cursor:not-allowed}.rux-select--multiple:disabled option:hover{cursor:not-allowed}.rux-select--multiple option{padding:calc(var(--spacing-2) - 1px) var(--spacing-0) calc(var(--spacing-2) - 1px) var(--spacing-4);text-indent:var(--spacing-4)}.rux-select--multiple option:hover{color:var(--color-background-interactive-hover);background-color:var(--color-background-surface-hover);cursor:pointer}.rux-select--multiple option:checked{background:var(--color-background-surface-selected);color:var(--color-text-primary)}.rux-select--multiple option:disabled{cursor:not-allowed}.rux-select--multiple option:disabled:hover{color:var(--color-background-interactive-default);opacity:var(--opacity-disabled);background-color:linear-gradient(to left, var(--color-background-surface-selected) var(--spacing-8), var(--color-background-base-default) var(--spacing-8));cursor:not-allowed}.rux-select:hover{border:1px solid var(--color-background-interactive-hover)}.rux-select:focus-visible{outline:var(--focus-outline);outline-offset:var(--focus-offset);border:1px solid var(--color-background-interactive-default)}.rux-select:disabled{opacity:0.4;cursor:not-allowed}.rux-select:disabled:hover{border:1px solid var(--color-border-interactive-muted)}.rux-select:disabled:hover option{background:var(--color-background-base-default);color:var(--color-background-interactive-default)}.rux-select::-ms-expand{display:none}.rux-select:focus::-ms-value{background:transparent}.rux-select option{opacity:1;color:var(--color-background-interactive-default);border-radius:0}.rux-select option:hover{color:var(--color-background-interactive-hover);background-color:var(--color-background-surface-hover)}.rux-select option:focus{color:var(--color-text-primary);background-color:var(--color-background-surface-selected)}.rux-select option:disabled{cursor:not-allowed;color:#4dacff66}.rux-select optgroup{text-indent:var(--spacing-4);color:var(--select-menu-text-color);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);font-style:normal}.rux-select.rux-select--invalid{border:1px solid var(--color-text-error)}.rux-select.rux-select--invalid:disabled:hover{border:1px solid var(--color-text-error)}.rux-select.rux-select--invalid:hover{border:1px solid var(--color-background-interactive-hover)}";

const RuxSelect = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxSelectChanged = index.createEvent(this, "ruxchange", 7);
    this.ruxBlur = index.createEvent(this, "ruxblur", 7);
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    /**
     * Disables the select menu via HTML disabled attribute. Select menu takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored.
     */
    this.disabled = false;
    /**
     * Sets the field as required
     */
    this.required = false;
    /**
     * Presentational only. Renders the Select Menu as invalid.
     */
    this.invalid = false;
    /**
     * Enables multiselect
     */
    this.multiple = false;
    /**
     * Sets the Name of the Input Element
     */
    this.name = '';
    /**
     * The size of rux-select
     */
    this.size = 'medium';
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  onValueChange() {
    this._syncOptionsFromValue();
  }
  handleLabelChange() {
    this._handleLabelSlotChange();
  }
  handleGroupChange() {
    this._syncOptionsToNativeSelect();
  }
  handleOptionChange() {
    this._syncOptionsToNativeSelect();
  }
  /**
   * Sets element as focused
   */
  async setFocus(options) {
    this.selectEl.focus(options);
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleLabelSlotChange = this._handleLabelSlotChange.bind(this);
  }
  componentWillLoad() {
    this._handleLabelSlotChange();
    if (this.value) {
      this._handleSlotChange();
    }
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  _handleLabelSlotChange() {
    this.hasLabelSlot = utils.hasSlot(this.el, 'label');
  }
  async _handleSlotChange() {
    await this._syncOptionsToNativeSelect();
    await this._syncOptionsFromValue();
    this.hasErrorSlot = utils.hasSlot(this.el, 'error-text');
    this.hasHelpSlot = utils.hasSlot(this.el, 'help-text');
  }
  /**
   * The native select element doesn't play nicely with slots. If an <option> isn't a direct child element, it won't render properly.
   * As a solution, we expose a slot outside the shadow-DOMed <select> and then manually copy the contents inside the shadow DOM.
   *
   * A RuxOptionGroup component is required because onSlotchange won't fire if we use the native <optgroup> and we change just its options.
   * RuxOptionGroup exists only to fire a change event that we can listen to.
   */
  _syncOptionsToNativeSelect() {
    var _a;
    const slot = (_a = this.slotContainer) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
    if (slot) {
      this.selectEl.innerHTML = '';
      const assignedElements = slot.assignedElements({
        flatten: true,
      });
      assignedElements.map((item) => {
        const option = item;
        if (option.tagName.toLowerCase() === 'rux-option') {
          this._appendOptionToNativeSelect(option.label, option.value, option.disabled, this.selectEl, option.title);
        }
        if (option.tagName.toLowerCase() === 'rux-option-group') {
          const children = [
            ...Array.from(option.querySelectorAll('rux-option')),
          ];
          this._appendOptGroupToNativeSelect(option.label ? option.label : 'Group', children, option.title);
        }
      });
    }
    return Promise.resolve();
  }
  _appendOptGroupToNativeSelect(groupName, children, title) {
    const group = Object.assign(document.createElement('optgroup'), {
      label: groupName,
      title: title,
    });
    children.map((option) => {
      this._appendOptionToNativeSelect(option.label, option.value, option.disabled, group, option.title);
      this.selectEl.appendChild(group);
    });
    this.selectEl.appendChild(group);
  }
  _appendOptionToNativeSelect(label, value, disabled, target, title) {
    const item = Object.assign(document.createElement('option'), {
      innerHTML: label ? label : '',
      value: value,
      disabled: disabled,
      title: title,
    });
    target.appendChild(item);
  }
  _syncOptionsFromValue() {
    if (this.selectEl) {
      const options = [
        ...Array.from(this.selectEl.querySelectorAll('option')),
      ];
      options.map((option) => {
        if (Array.isArray(this.value)) {
          option.selected = this.value.includes(option.value);
        }
        else {
          option.selected = option.value === this.value;
        }
      });
    }
    return Promise.resolve();
  }
  _onChange(e) {
    const target = e.target;
    const values = [...target.options]
      .filter((option) => {
      return option.selected;
    })
      .map((option) => {
      return option.value;
    });
    if (values.length === 1) {
      this.value = values[0];
    }
    else {
      this.value = values;
    }
    this.ruxSelectChanged.emit();
  }
  render() {
    const { disabled, required, label, inputId, labelId, invalid, name, multiple, errorText, helpText, hasHelpSlot, hasErrorSlot, _handleSlotChange, } = this;
    utils.renderHiddenSelect(true, this.el, this.name, this.value, this.disabled);
    return (index.h(index.Host, null, index.h("label", { id: labelId, htmlFor: inputId, "aria-hidden": this.hasLabel ? 'false' : 'true', part: "label" }, index.h("span", { class: { hidden: !this.hasLabel } }, index.h("slot", { onSlotchange: this._handleLabelSlotChange, name: "label" }, label, this.required && (index.h("span", { part: "required", class: "rux-label__asterisk" }, "*"))))), index.h("select", { class: {
        'rux-select': true,
        'rux-select--small': this.size === 'small',
        'rux-select--medium': this.size === 'medium',
        'rux-select--large': this.size === 'large',
        'rux-select--invalid': invalid,
        'rux-select--multiple': multiple,
      }, ref: (el) => (this.selectEl = el), id: inputId, disabled: disabled, required: required, multiple: multiple, name: name, onChange: (e) => this._onChange(e), onBlur: this._onBlur, part: "select" }), index.h("div", { "aria-hidden": "true", class: "hidden", ref: (el) => (this.slotContainer = el) }, index.h("slot", { onSlotchange: this._handleSlotChange })), index.h("div", { class: {
        'rux-error-text': !!errorText || hasErrorSlot,
        hidden: !errorText && !hasErrorSlot,
      }, part: "error-text" }, index.h("svg", { fill: "none", width: "14", height: "14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14 14" }, index.h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z", fill: "currentColor" })), index.h("slot", { name: "error-text", onSlotchange: _handleSlotChange }, errorText)), index.h("div", { class: {
        'rux-help-text': (!!helpText || hasHelpSlot) &&
          (!errorText || !hasErrorSlot),
        hidden: (!helpText && !hasHelpSlot) ||
          !!errorText ||
          hasErrorSlot,
      }, part: "help-text" }, index.h("slot", { name: "help-text", onSlotchange: _handleSlotChange }, helpText))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["onValueChange"],
    "label": ["handleLabelChange"]
  }; }
};
RuxSelect.style = ruxSelectCss;

exports.rux_select = RuxSelect;
