import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const ruxSegmentedButtonCss = ":host{display:block;box-sizing:border-box;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base);text-align:left}:host([disabled]){opacity:var(--opacity-disabled);cursor:not-allowed;pointer-events:none}:host([disabled]) label{border-color:var(--color-background-interactive-default)}:host([hidden]){display:none}*,*::before,*::after{box-sizing:inherit}.rux-segmented-button{display:inline-flex;padding:var(--spacing-0);margin:var(--spacing-0);list-style:none;border-radius:var(--radius-base);background-color:var(--color-background-base-default)}.rux-segmented-button__segment{width:auto;margin:var(--spacing-0);padding:var(--spacing-0)}.rux-segmented-button__segment:first-child{border-radius:var(--radius-base) 0 0 var(--radius-base)}.rux-segmented-button__segment:last-child{border-radius:0 var(--radius-base) var(--radius-base) 0}.rux-segmented-button__segment+.rux-segmented-button__segment label{border-right:none}.rux-segmented-button__segment:hover+.rux-segmented-button__segment label{border-left-color:var(--color-background-interactive-hover)}.rux-segmented-button__segment.--focused{outline:var(--focus-outline);outline-offset:var(--focus-offset);z-index:1}.rux-segmented-button__segment label{display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;width:100%;margin:var(--spacing-0);border:1px solid var(--color-background-interactive-default);color:var(--color-background-interactive-default);background-color:var(--color-background-base-default);font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);letter-spacing:var(--font-control-body-1-letter-spacing);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rux-segmented-button__segment label:hover{background-color:var(--color-background-surface-hover);border-color:var(--color-background-interactive-hover);color:var(--color-background-interactive-default);outline:none}.rux-segmented-button__segment .rux-segmented-button-label{height:calc(var(--spacing-8) + var(--spacing-1));padding:var(--spacing-2) var(--spacing-4);cursor:pointer}.rux-segmented-button__segment .rux-segmented-button-label--small{height:calc(var(--spacing-6) + var(--spacing-1));padding:var(--spacing-1) var(--spacing-4)}.rux-segmented-button__segment .rux-segmented-button-label--large{height:calc(var(--spacing-10) + var(--spacing-1));padding:var(--spacing-3) var(--spacing-4)}.rux-segmented-button__segment input{position:absolute;opacity:0}.rux-segmented-button__segment input:checked+label{background-color:var(--color-background-surface-selected);color:var(--color-text-primary)}.rux-segmented-button__segment input:checked:hover+label{background-color:var(--color-background-surface-selected);color:var(--color-text-primary);border-color:var(--color-background-interactive-hover)}.rux-segmented-button__segment:first-child label{border-radius:var(--radius-base) 0 0 var(--radius-base);border-right:none}.rux-segmented-button__segment:first-child label:hover{border-color:var(--color-background-interactive-hover)}.rux-segmented-button__segment:last-child label{border-radius:0 var(--radius-base) var(--radius-base) 0;border-right:1px solid var(--color-background-interactive-default)}.rux-segmented-button__segment:last-child label:hover{border-right-color:var(--color-background-interactive-hover)}";

const RuxSegmentedButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.ruxChange = createEvent(this, "ruxchange", 7);
    /**
     * Items in this Array are the individual button segments.
     */
    this.data = [];
    /**
     * When passed in on load, this selects the first button segment with a matching label. When the selected segment changes, this property updates with the currently selected value, which reflects back to the component attribute. If no button segment label matches this string, then no segment is selected. This value takes priority over setting selected boolean property on the items in the data array.
     */
    this.selected = '';
    /**
     * Sets the disabled attribute.
     */
    this.disabled = false;
  }
  onDataChange(newValue) {
    if (newValue) {
      const initialSelection = this.data.find((segment) => segment.selected);
      if (initialSelection) {
        this._setSelected(initialSelection.label);
      }
      else {
        if (!this.selected) {
          this._setSelected(this.data[0].label);
        }
      }
    }
  }
  connectedCallback() {
    this._handleChange = this._handleChange.bind(this);
    const initialSelection = this.data.find((segment) => segment.selected) || this.data[0];
    if (initialSelection) {
      this._setSelected(initialSelection.label);
    }
  }
  _handleChange(e) {
    const el = e.target;
    this._setSelected(el.value);
    this.ruxChange.emit(el.value);
  }
  _setSelected(label) {
    this.data.map((item) => {
      item.selected = item.label === label;
    });
    this.selected = label;
  }
  _slugify(label) {
    label = label.replace(/^\s+|\s+$/g, ''); // trim
    label = label.toLowerCase();
    label = label
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
    return label;
  }
  _isSelected(label) {
    if (this.selected === label) {
      return true;
    }
    const selectedData = this.data.find((item) => item.label === label);
    if (selectedData && selectedData.selected) {
      return true;
    }
    return false;
  }
  _handleFocus(e) {
    var _a;
    const target = e.currentTarget;
    target.matches(':focus-visible')
      ? (_a = target.closest('li')) === null || _a === void 0 ? void 0 : _a.classList.add('--focused')
      : null;
  }
  _handleBlur(e) {
    var _a;
    const target = e.currentTarget;
    (_a = target.closest('li')) === null || _a === void 0 ? void 0 : _a.classList.remove('--focused');
  }
  render() {
    return (h("ul", { class: {
        'rux-segmented-button': true,
        'rux-segmented-button--small': this.size === 'small',
        'rux-segmented-button--large': this.size === 'large',
      } }, this.data.map((item) => (h("li", { class: "rux-segmented-button__segment" }, h("input", { type: "radio", name: "rux-group", id: this._slugify(item.label), value: item.label, checked: this._isSelected(item.label), "data-label": item.label, onChange: this._handleChange, disabled: this.disabled, onFocus: this._handleFocus, onBlur: this._handleBlur }), h("label", { htmlFor: this._slugify(item.label), part: "label", class: {
        'rux-segmented-button-label': true,
        'rux-segmented-button-label--small': this.size === 'small',
        'rux-segmented-button-label--large': this.size === 'large',
      } }, item.label))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "data": ["onDataChange"]
  }; }
  static get style() { return ruxSegmentedButtonCss; }
}, [1, "rux-segmented-button", {
    "data": [16],
    "selected": [1537],
    "size": [513],
    "disabled": [516]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-segmented-button"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-segmented-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxSegmentedButton$1);
      }
      break;
  } });
}

const RuxSegmentedButton = RuxSegmentedButton$1;
const defineCustomElement = defineCustomElement$1;

export { RuxSegmentedButton, defineCustomElement };
