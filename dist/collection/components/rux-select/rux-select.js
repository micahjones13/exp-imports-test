/* eslint react/jsx-no-bind: 0 */ // --> OFF
import { Host, h, } from '@stencil/core';
import { hasSlot, renderHiddenSelect } from '../../utils/utils';
/**
 * @slot (default) - The select options
 * @slot label - The select label
 * @slot help-text -  the help text
 * @slot error-text -  the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part label - The select label
 * @part select - The select element
 * @part required - The asterisk when required is true
 */
export class RuxSelect {
  constructor() {
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
    this.hasLabelSlot = hasSlot(this.el, 'label');
  }
  async _handleSlotChange() {
    await this._syncOptionsToNativeSelect();
    await this._syncOptionsFromValue();
    this.hasErrorSlot = hasSlot(this.el, 'error-text');
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
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
    renderHiddenSelect(true, this.el, this.name, this.value, this.disabled);
    return (h(Host, null, h("label", { id: labelId, htmlFor: inputId, "aria-hidden": this.hasLabel ? 'false' : 'true', part: "label" }, h("span", { class: { hidden: !this.hasLabel } }, h("slot", { onSlotchange: this._handleLabelSlotChange, name: "label" }, label, this.required && (h("span", { part: "required", class: "rux-label__asterisk" }, "*"))))), h("select", { class: {
        'rux-select': true,
        'rux-select--small': this.size === 'small',
        'rux-select--medium': this.size === 'medium',
        'rux-select--large': this.size === 'large',
        'rux-select--invalid': invalid,
        'rux-select--multiple': multiple,
      }, ref: (el) => (this.selectEl = el), id: inputId, disabled: disabled, required: required, multiple: multiple, name: name, onChange: (e) => this._onChange(e), onBlur: this._onBlur, part: "select" }), h("div", { "aria-hidden": "true", class: "hidden", ref: (el) => (this.slotContainer = el) }, h("slot", { onSlotchange: this._handleSlotChange })), h("div", { class: {
        'rux-error-text': !!errorText || hasErrorSlot,
        hidden: !errorText && !hasErrorSlot,
      }, part: "error-text" }, h("svg", { fill: "none", width: "14", height: "14", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14 14" }, h("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.393 12.25c.898 0 1.458-.974 1.009-1.75L8.009 2.91a1.166 1.166 0 0 0-2.018 0L1.598 10.5c-.449.776.111 1.75 1.01 1.75h8.784ZM7 8.167a.585.585 0 0 1-.583-.584V6.417c0-.321.262-.584.583-.584.32 0 .583.263.583.584v1.166c0 .321-.262.584-.583.584Zm-.583 1.166V10.5h1.166V9.333H6.417Z", fill: "currentColor" })), h("slot", { name: "error-text", onSlotchange: _handleSlotChange }, errorText)), h("div", { class: {
        'rux-help-text': (!!helpText || hasHelpSlot) &&
          (!errorText || !hasErrorSlot),
        hidden: (!helpText && !hasHelpSlot) ||
          !!errorText ||
          hasErrorSlot,
      }, part: "help-text" }, h("slot", { name: "help-text", onSlotchange: _handleSlotChange }, helpText))));
  }
  static get is() { return "rux-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-select.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Disables the select menu via HTML disabled attribute. Select menu takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "required": {
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
          "text": "Sets the field as required"
        },
        "attribute": "required",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "The select label text. For HTML content, use the `label` slot instead."
        },
        "attribute": "label",
        "reflect": false
      },
      "inputId": {
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
          "text": "Id for the Select Input"
        },
        "attribute": "input-id",
        "reflect": false
      },
      "labelId": {
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
          "text": "Id for the Label"
        },
        "attribute": "label-id",
        "reflect": false
      },
      "invalid": {
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
          "text": "Presentational only. Renders the Select Menu as invalid."
        },
        "attribute": "invalid",
        "reflect": true,
        "defaultValue": "false"
      },
      "multiple": {
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
          "text": "Enables multiselect"
        },
        "attribute": "multiple",
        "reflect": true,
        "defaultValue": "false"
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
          "text": "Sets the Name of the Input Element"
        },
        "attribute": "name",
        "reflect": true,
        "defaultValue": "''"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[] | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the selected option. If multiple is true, this is an array."
        },
        "attribute": "value",
        "reflect": false
      },
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
      "errorText": {
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
          "text": "The validation error text"
        },
        "attribute": "error-text",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'small' | 'medium' | 'large'",
          "resolved": "\"large\" | \"medium\" | \"small\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The size of rux-select"
        },
        "attribute": "size",
        "reflect": true,
        "defaultValue": "'medium'"
      }
    };
  }
  static get states() {
    return {
      "hasLabelSlot": {},
      "hasHelpSlot": {},
      "hasErrorSlot": {}
    };
  }
  static get events() {
    return [{
        "method": "ruxSelectChanged",
        "name": "ruxchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event Emitted when the Value of the Select is Changed"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
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
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "(options?: FocusOptions) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            },
            "FocusOptions": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets element as focused",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "onValueChange"
      }, {
        "propName": "label",
        "methodName": "handleLabelChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "rux-option-group-changed",
        "method": "handleGroupChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "rux-option-changed",
        "method": "handleOptionChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
