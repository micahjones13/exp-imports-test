import { Host, h } from '@stencil/core';
/**
 * @part progress - the native progress element
 * @part output - the native output element
 */
export class RuxProgress {
  constructor() {
    /**
     * Current progress value between 0 and 100 (or the max, if defined below).
     */
    this.value = 0;
    /**
     * For progress bars where progress bars have a maximum value greater or less than 100
     */
    this.max = 100;
    /**
     * Hides the progress label
     */
    this.hideLabel = false;
  }
  connectedCallback() {
    if (this.value) {
      this._checkValueNotOverMax(this.max, this.value);
    }
  }
  watchHandler() {
    if (this.value) {
      this._checkValueNotOverMax(this.max, this.value);
    }
  }
  _getProgressAsString() {
    // If max = '', just return the value.
    if (!this.max) {
      return this.value;
    }
    if (this.value === undefined || isNaN(this.value)) {
      return '0%';
    }
    else {
      return this.max === 100
        ? `${this.value}%`
        : `${this.value}/${this.max}`;
    }
  }
  _checkValueNotOverMax(max, value) {
    if (max && max < value) {
      max = value;
      this.max = max;
      console.warn('The given max for <rux-progress> was less than the given value. Max has been changed to equal value in the meantime. Please be sure max and value are correct on the <rux-progress> component.');
    }
  }
  render() {
    return (h(Host, null, h("progress", { class: "rux-progress", value: this.value, max: this.max, part: "progress" }), h("output", { class: "rux-progress__value", hidden: this.hideLabel, part: "output" }, this._getProgressAsString()), h("slot", null)));
  }
  static get is() { return "rux-progress"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-progress.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-progress.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Current progress value between 0 and 100 (or the max, if defined below)."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      },
      "max": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "For progress bars where progress bars have a maximum value greater or less than 100"
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
      },
      "hideLabel": {
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
          "text": "Hides the progress label"
        },
        "attribute": "hide-label",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "watchHandler"
      }];
  }
}
