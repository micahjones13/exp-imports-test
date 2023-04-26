import { h, } from '@stencil/core';
import { hasSlot } from '../../utils/utils';
let id = 0;
/**
 * @slot (default) - The radio label
 * @part form-field - the form field of the radio
 * @part label - the label of the radio
 */
export class RuxRadio {
  constructor() {
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
  static get is() { return "rux-radio"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-radio.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-radio.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "The radio name"
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "''"
      },
      "value": {
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
          "text": "The radio value"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
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
          "text": "Toggles checked state of a radio"
        },
        "attribute": "checked",
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
          "text": "Disables the radio via HTML disabled attribute. Radio takes on a distinct visual state. Cursor uses the not-allowed system replacement and all keyboard and mouse events are ignored."
        },
        "attribute": "disabled",
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
          "text": "The radio label text. For HTML content, use the default slot instead."
        },
        "attribute": "label",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "hasLabelSlot": {},
      "buttonTabindex": {}
    };
  }
  static get events() {
    return [{
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
          "signature": "(ev: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "setButtonTabindex": {
        "complexType": {
          "signature": "(value: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "label",
        "methodName": "handleLabelChange"
      }];
  }
}
