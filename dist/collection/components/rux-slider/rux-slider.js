import { h, Host, } from '@stencil/core';
import { hasSlot, renderHiddenInput } from '../../utils/utils';
let id = 0;
/**
 * @slot label - The slider label
 * @slot help-text - the help text
 * @slot error-text - the error text
 * @part error-text - The error text element
 * @part form-field - The form-field wrapper container
 * @part help-text - The help text element
 * @part input - The input element
 * @part label - The input label when `label` prop is set
 * @part tick-container - The container of the tick mark and axis-label
 * @part tick - the tick mark
 * @part axis-label - the axis label
 */
export class RuxSlider {
  constructor() {
    this.sliderId = `rux-slider-${++id}`;
    this.hasLabelSlot = false;
    this.hasHelpSlot = false;
    this.hasErrorSlot = false;
    /**
     * Min value of the slider.
     */
    this.min = 0;
    /**
     * Max value of slider.
     */
    this.max = 100;
    /**
     * Step amount of slider value.
     */
    this.step = 1;
    /**
     * Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/input_type_range>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
     */
    this.value = (this.max - this.min) / 2 + this.min;
    /**
     *  Shows tick marks and labels in the order provided and aligns evenly based on the length.
     */
    this.axisLabels = [];
    /**
     * Hides labels and only shows tick marks if axis-labels is provided.
     */
    this.ticksOnly = false;
    /**
     * Determines if the slider is disabled.
     */
    this.disabled = false;
    /**
     * Name of the Input Field for Form Submission
     */
    this.name = '';
    this._onBlur = () => {
      this.ruxBlur.emit();
    };
  }
  componentWillLoad() {
    this._updateValue();
    this._getBrowser(navigator.userAgent.toLowerCase());
    this._handleSlotChange();
  }
  connectedCallback() {
    this._onInput = this._onInput.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._onChange = this._onChange.bind(this);
  }
  disconnectedCallback() {
    this.el.shadowRoot.removeEventListener('slotchange', this._handleSlotChange);
  }
  handleLabelChange() {
    this._handleSlotChange();
  }
  handleChange() {
    this._updateValue();
  }
  handleStep() {
    // Value needs to be a multiple of step, otherwise slider begins to look wrong
    this.value = this._closestMultiple(this.value, this.step);
  }
  get hasLabel() {
    return this.label ? true : this.hasLabelSlot;
  }
  //Returns the closest multiple of two given numbers.
  _closestMultiple(n, x) {
    if (x > n)
      return x;
    n = n + x / 2;
    n = n - (n % x);
    return n;
  }
  _updateValue() {
    // If min is not a number, change it to 0
    if (!this.min && this.min != 0) {
      this.min = 0;
    }
    //If max is not a number, change it to 100
    if (!this.max && this.max != 0) {
      this.max = 100;
    }
    // If value is not a number, change it to default.
    if (!this.value && this.value != 0) {
      this.value = (this.max - this.min) / 2 + this.min;
    }
    //If step is not a number, change it to 1
    if (!this.step) {
      this.step = 1;
    }
    //Min can't be >= max
    if (this.min >= this.max) {
      this.min = this.max - this.step;
    }
    // If min is given and is greater than value, then set value to the min.
    if (this.value < this.min) {
      this.value = this.min;
    }
    //If max is given and is less than value, set value to max
    if (this.max < this.value) {
      this.value = this.max;
    }
    this._setValuePercent();
  }
  //Sets the --slider-value-percent CSS var
  _setValuePercent() {
    const dif = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.el.style.setProperty('--_slider-value-percent', `${dif}%`);
  }
  _onInput(e) {
    const target = e.target;
    this.value = parseFloat(target.value);
    this._setValuePercent();
    this.ruxInput.emit();
  }
  _onChange() {
    this.ruxChange.emit();
  }
  _getBrowser(ua) {
    //Safari needs 0px top for the thumb to look normal.
    //Safari needs differnet padding on ticks.
    if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1) {
      this.el.style.setProperty('--_slider-top', '0px');
      this.el.style.setProperty('--slider-tick-padding-top', '7px');
    }
    //firefox - thumb too large, tick padding not enough
    if (ua.indexOf('firefox') > -1) {
      this.el.style.setProperty('--slider-tick-padding-top', '3px');
      //? Better to set this here, or in the css with a calc(--slider-thumb-size - 4px)?
      // this.el.style.setProperty('--slider-thumb-size', '15px')
    }
  }
  _handleSlotChange() {
    this.hasLabelSlot = hasSlot(this.el, 'label');
    this.hasErrorSlot = hasSlot(this.el, 'error-text');
    this.hasHelpSlot = hasSlot(this.el, 'help-text');
  }
  _getTickWidths() {
    const width = 100 / (this.axisLabels.length - 1);
    return width;
  }
  render() {
    const { el, sliderId, label, errorText, helpText, hasLabel, hasErrorSlot, hasHelpSlot, _handleSlotChange, min, max, value, step, disabled, name, _onInput, _onBlur, _onChange, } = this;
    renderHiddenInput(true, el, name, JSON.stringify(this.value), disabled);
    return (h(Host, null, h("div", { class: "rux-form-field", part: "form-field" }, hasLabel ? (h("label", { class: {
        'rux-input-label': true,
        hidden: !this.hasLabel,
      }, "aria-hidden": this.hasLabel ? 'false' : 'true', htmlFor: sliderId, part: "label" }, h("slot", { name: "label" }, label))) : null, h("div", { class: {
        'rux-slider': true,
        'with-axis-labels': this.axisLabels.length > 0,
      } }, h("input", { id: sliderId, onInput: _onInput, onChange: _onChange, type: "range", class: "rux-range", min: min, max: max, step: step, value: value, disabled: disabled, "aria-label": "slider", "aria-disabled": disabled ? 'true' : 'false', onBlur: _onBlur, part: "input", list: "steplist" }), this.axisLabels.length > 0 ? (h("datalist", { id: "steplist", style: {
        gridTemplateColumns: `[tick] repeat(${this.axisLabels.length - 1}, ${this._getTickWidths()}%)`,
      } }, this.axisLabels.map((label) => {
      return (h("div", { class: "tick-label", part: "tick-container" }, h("div", { class: "tick", part: "tick" }), this.ticksOnly ? null : (h("div", { class: "axis-label", part: "axis-label" }, label))));
    }))) : null)), h("div", { class: {
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
  static get is() { return "rux-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-slider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-slider.css"]
    };
  }
  static get properties() {
    return {
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Min value of the slider."
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "0"
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Max value of slider."
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
      },
      "step": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Step amount of slider value."
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "1"
      },
      "value": {
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
          "text": "Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/input_type_range>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "(this.max! - this.min!) / 2 + this.min!"
      },
      "axisLabels": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Shows tick marks and labels in the order provided and aligns evenly based on the length."
        },
        "defaultValue": "[]"
      },
      "ticksOnly": {
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
          "text": "Hides labels and only shows tick marks if axis-labels is provided."
        },
        "attribute": "ticks-only",
        "reflect": false,
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
          "text": "Determines if the slider is disabled."
        },
        "attribute": "disabled",
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
          "text": "Name of the Input Field for Form Submission"
        },
        "attribute": "name",
        "reflect": false,
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
          "text": "The slider label text. For HTML content, use the `label` slot instead."
        },
        "attribute": "label",
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
        "method": "ruxInput",
        "name": "ruxinput",
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
      }, {
        "method": "ruxChange",
        "name": "ruxchange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Fired when the element's value is altered by the user - [HTMLElement/change_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)"
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
        "propName": "label",
        "methodName": "handleLabelChange"
      }, {
        "propName": "value",
        "methodName": "handleChange"
      }, {
        "propName": "min",
        "methodName": "handleChange"
      }, {
        "propName": "max",
        "methodName": "handleChange"
      }, {
        "propName": "step",
        "methodName": "handleStep"
      }];
  }
}
/*
                                return (
                                    <div class="tick-label">
                                        <div class="tick"></div>
                                        <option>{label}</option>
                                    </div>
                                )

*/
