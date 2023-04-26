import { h, } from '@stencil/core';
/**
 * @part label - the label of rux-segmented-button
 */
export class RuxSegmentedButton {
  constructor() {
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
  static get is() { return "rux-segmented-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-segmented-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-segmented-button.css"]
    };
  }
  static get properties() {
    return {
      "data": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "SegmentedButton[]",
          "resolved": "SegmentedButton[]",
          "references": {
            "SegmentedButton": {
              "location": "import",
              "path": "./rux-segmented-button.model"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items in this Array are the individual button segments."
        },
        "defaultValue": "[]"
      },
      "selected": {
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
          "text": "When passed in on load, this selects the first button segment with a matching label. When the selected segment changes, this property updates with the currently selected value, which reflects back to the component attribute. If no button segment label matches this string, then no segment is selected. This value takes priority over setting selected boolean property on the items in the data array."
        },
        "attribute": "selected",
        "reflect": true,
        "defaultValue": "''"
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
          "text": "Changes size of segmented button from small to medium or large."
        },
        "attribute": "size",
        "reflect": true
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
          "text": "Sets the disabled attribute."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      }
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
          "text": "Fires when the value property has changed and emits that value on the event.detail."
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
        "propName": "data",
        "methodName": "onDataChange"
      }];
  }
}
