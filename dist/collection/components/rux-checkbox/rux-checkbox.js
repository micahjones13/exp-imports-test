import { h, Host, } from '@stencil/core';
import { renderHiddenInput, hasSlot } from '../../utils/utils';
let id = 0;
/**
 * @slot (default) - the label of the checkbox.
 * @slot help-text -  the help text
 * @part form-field - the form field wrapper container
 * @part help-text - the help text element
 * @part label - the label of rux-checkbox
 */
export class RuxCheckbox {
  constructor() {
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
    this.hasLabelSlot = hasSlot(this.el);
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
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
      renderHiddenInput(true, el, name, value || 'on', disabled, checked);
    }
    return (h(Host, null, h("div", { class: "rux-form-field", part: "form-field" }, h("label", { class: {
        'rux-checkbox': true,
        'rux-checkbox--disabled': disabled,
        'rux-checkbox--focused': isFocused,
      }, htmlFor: checkboxId }, h("input", { type: "checkbox", class: {
        'rux-checkbox__input': true,
        'rux-checkbox__input--no-label': !hasLabel,
      }, name: name, id: checkboxId, disabled: disabled, checked: checked,
      //Allows storybook's indetermiante control to take effect.
      indeterminate: indeterminate, value: value, onChange: _onClick, onInput: _onInput, onBlur: _onBlur, onFocus: _onFocus, ref: (el) => (this._inputEl = el) }), h("div", { class: "rux-checkbox__control" }, indeterminate ? (h("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "M4 8h10v2H4z" }), h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" }))) : checked ? (h("svg", { fill: "none", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "m14.899 4.806-6.883 9.83-1.639-1.147 6.883-9.83z" }), h("path", { fill: "var(--_checkbox-checkmark-color-fill)", d: "m9.163 12.997-1.147 1.638L3.1 11.194l1.147-1.638z" }), h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" }))) : (h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 18 18" }, h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", fill: "var(--_checkbox-color-background)" }), h("rect", { x: ".5", y: ".5", width: "17", height: "17", rx: "1.5", stroke: "var(--_checkbox-color-border)" })))), h("div", { part: "label", class: {
        'rux-checkbox__label': true,
        hidden: !hasLabel,
      } }, hasLabelSlot ? null : label, h("slot", { onSlotchange: _handleSlotChange })))), h("div", { class: {
        'rux-help-text': !!helpText || hasHelpSlot,
        hidden: !helpText && !hasHelpSlot,
      }, part: "help-text" }, h("slot", { name: "help-text", onSlotchange: _handleSlotChange }, helpText))));
  }
  static get is() { return "rux-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-checkbox.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-checkbox.css"]
    };
  }
  static get properties() {
    return {
      "helpText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The help or explanation text"
        },
        "attribute": "help-text",
        "reflect": false
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The checkbox name"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The checkbox value"
        },
        "attribute": "value",
        "reflect": true,
        "defaultValue": "''"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The checkbox label text. For HTML content, use the default slot instead."
        },
        "attribute": "label",
        "reflect": false
      },
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Toggles checked state of a checkbox"
        },
        "attribute": "checked",
        "reflect": true,
        "defaultValue": "false"
      },
      "indeterminate": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Toggles indeterminate state of a checkbox. The indeterminate property does not exist in HTML, but can be set in JS. [HTML Checkbox & Indeterminate State](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate)"
        },
        "attribute": "indeterminate",
        "reflect": true,
        "defaultValue": "false"
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Disables the checkbox via HTML disabled attribute. Checkbox takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "hasLabelSlot": {},
      "hasHelpSlot": {},
      "isFocused": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxChange",
        "name": "ruxchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxInput",
        "name": "ruxinput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an alteration to the input's value is committed by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxFocus",
        "name": "ruxfocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an element has gained focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "ruxBlur",
        "name": "ruxblur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when an element has lost focus - [HTMLElement/blur_event](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "updateChecked"
      }, {
        "propName": "indeterminate",
        "methodName": "updateIndeterminate"
      }];
  }
}
