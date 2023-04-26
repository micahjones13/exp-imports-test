'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const utils = require('./utils-b3539f54.js');

const ruxSliderCss = ".rux-help-text{margin-top:var(--spacing-2);color:var(--color-text-secondary);font-size:var(--font-body-2-font-size);font-family:var(--font-body-2-font-family);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--font-body-2-line-height);text-align:left}.rux-error-text{display:flex;align-items:center;text-align:left;width:fit-content;-webkit-order:3;order:3;display:flex;margin-top:var(--spacing-2);color:var(--color-text-error);font-size:var(--font-body-2-bold-font-size);font-family:var(--font-body-2-bold-font-family);font-weight:var(--font-body-2-bold-font-weight);letter-spacing:var(--font-body-2-bold-letter-spacing);line-height:var(--font-body-2-bold-line-height);text-align:left}.rux-error-text svg{width:calc(var(--spacing-4) + var(--spacing-1));height:calc(var(--spacing-4) + var(--spacing-1));color:var(--color-text-error);margin-right:var(--spacing-2);cursor:default}:host{--slider-track-before-thumb-height:var(--spacing-1);--_slider-thumb-size:calc(var(--spacing-4) + var(--spacing-1));--_slider-value-percent:50%;--_slider-top:calc(var(--_slider-thumb-size) / -2.4);display:flex;flex-grow:1;flex-flow:column;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--line-height-base)}.hidden,:host([hidden]){display:none}.rux-form-field{flex-direction:column}.rux-form-field label{margin-bottom:var(--spacing-2)}.rux-input-label{font-family:var(--font-control-body-1-font-family);font-size:var(--font-control-body-1-font-size);letter-spacing:var(--font-control-body-1-letter-spacing);font-weight:var(--font-control-body-1-font-weight);line-height:var(--font-control-body-1-line-height)}.with-axis-labels{padding-bottom:var(--spacing-8)}.rux-slider{height:calc(var(--spacing-4) + var(--spacing-1));position:relative;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing)}.rux-slider :hover{cursor:pointer}.rux-slider :disabled{cursor:not-allowed}.rux-slider .rux-range:disabled+#steplist{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-slider .rux-range:disabled+#steplist .tick{cursor:not-allowed}.rux-slider .rux-range:disabled+#steplist .tick-label .axis-label{cursor:not-allowed}.rux-slider #steplist{display:grid;padding:var(--spacing-0) calc(var(--_slider-thumb-size) / 2);cursor:default}.rux-slider #steplist .tick-label{grid-row:1;width:0;display:flex;flex-direction:column;align-items:center;font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);line-height:var(--font-body-3-line-height);letter-spacing:var(--font-body-3-letter-spacing);font-weight:var(--font-body-3-font-weight)}.rux-slider #steplist .tick-label .axis-label{padding-top:var(--spacing-1);cursor:default}.rux-slider #steplist .tick{background:var(--color-background-interactive-default);height:var(--spacing-1);width:var(--spacing-1);border-radius:var(--radius-circle);cursor:default}.rux-slider #steplist .tick-label:not(:first-child):not(:last-child){padding:0}.rux-slider #steplist :disabled{opacity:var(--opacity-disabled)}.rux-range{-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;appearance:none;background:none;width:100%;height:calc(var(--spacing-4) + var(--spacing-1));margin:var(--spacing-0);color:transparent;position:relative;z-index:1}input[type=range]:focus{outline:none}.rux-range::-webkit-slider-runnable-track{display:flex;align-items:center;max-width:100%;cursor:pointer;min-height:var(--spacing-050);max-height:var(--slider-track-before-thumb-height);background-image:linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), radial-gradient(circle, var(--color-background-interactive-default) 70%, var(--color-background-interactive-default) 70%, transparent 70%, transparent 100%);background-size:calc( var(--_slider-value-percent) - (var(--_slider-thumb-size) / 2) ) var(--slider-track-before-thumb-height), calc(100% - var(--_slider-thumb-size)) 1px, var(--spacing-1) var(--spacing-1);background-repeat:no-repeat no-repeat;background-position:calc(var(--_slider-thumb-size) / 2), calc(100% - (var(--_slider-thumb-size) / 2)), calc((var(--_slider-thumb-size) / 2) - var(--spacing-050))}.rux-range:disabled::-webkit-slider-runnable-track{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-range::-moz-range-track{display:flex;align-items:center;max-width:100%;cursor:pointer;min-height:var(--spacing-1);max-height:var(--slider-track-before-thumb-height);background-image:linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), radial-gradient(circle, var(--color-background-interactive-default) 70%, var(--color-background-interactive-default) 70%, transparent 70%, transparent 100%);background-size:calc( var(--_slider-value-percent) - (var(--_slider-thumb-size) / 2) ) var(--slider-track-before-thumb-height), calc(100% - var(--_slider-thumb-size)) 1px, var(--spacing-1) var(--spacing-1);background-repeat:no-repeat no-repeat;background-position:calc(var(--_slider-thumb-size) / 2), calc(100% - (var(--_slider-thumb-size) / 2)), calc((var(--_slider-thumb-size) / 2) - var(--spacing-050))}.rux-range:disabled::-moz-range-track,.rux-range:disabled::-moz-range-progress{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-input:disabled{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-range::-ms-track{display:flex;align-items:center;max-width:100%;cursor:pointer;border-radius:var(--radius-circle);min-height:var(--spacing-025);max-height:var(--spacing-1);background-image:linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default)), linear-gradient(var(--color-background-interactive-default), var(--color-background-interactive-default));background-size:var(--_slider-value-percent) var(--slider-track-before-thumb-height), 100% 1px;background-repeat:no-repeat no-repeat;background-position:left, right}.rux-range::-ms-fill-lower{height:var(--spacing-050);background-color:var(--color-background-interactive-default)}.rux-range::-ms-fill-upper{height:var(--spacing-050);background-color:var(--color-background-interactive-default)}.rux-range::-webkit-slider-thumb{-webkit-appearance:none;box-sizing:border-box;position:relative;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default);background-color:var(--color-background-base-default);cursor:pointer;z-index:6}.rux-range::-webkit-slider-thumb:hover{border-color:var(--color-background-interactive-hover);background-color:var(--color-background-base-default)}.rux-range:focus-visible::-webkit-slider-thumb{outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-range:disabled::-webkit-slider-thumb{cursor:not-allowed}.rux-range:disabled::-webkit-slider-thumb:hover{border-color:var(--color-background-interactive-default)}.rux-range:not(:disabled)::-webkit-slider-thumb:active{border-color:var(--color-background-interactive-default);background-color:var(--color-background-base-default)}.rux-range:not(:disabled)::-webkit-slider-thumb:focus,.rux-range:not(:disabled)::-webkit-slider-thumb:hover:not(:active){background-color:var(--color-background-base-default)}.rux-range::-moz-range-thumb{-moz-appearance:none;position:relative;box-sizing:border-box;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default);background-color:var(--color-background-base-default);cursor:pointer;z-index:6}.rux-range:not(:disabled)::-moz-range-thumb:active{border-color:var(--color-background-interactive-default);background-color:var(--color-background-base-default)}.rux-range::-moz-range-thumb:hover{border-color:var(--color-background-interactive-hover)}.rux-range:focus-visible::-moz-range-thumb{outline:var(--focus-outline);outline-offset:var(--focus-offset)}.rux-range:disabled::-moz-range-thumb{opacity:var(--opacity-disabled);cursor:not-allowed}.rux-range::-ms-thumb{position:relative;top:var(--_slider-top);height:var(--_slider-thumb-size);width:var(--_slider-thumb-size);border-radius:100%;border:2px solid var(--color-background-interactive-default);background-color:var(--color-background-base-default);cursor:pointer;z-index:6}.rux-range:disabled::-ms-thumb{opacity:0.4;cursor:not-allowed}.rux-range:focus-visible::-ms-thumb{outline:var(--focus-outline);outline-offset:var(--focus-offset)}";

let id = 0;
const RuxSlider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxInput = index.createEvent(this, "ruxinput", 7);
    this.ruxBlur = index.createEvent(this, "ruxblur", 7);
    this.ruxChange = index.createEvent(this, "ruxchange", 7);
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
    this.hasLabelSlot = utils.hasSlot(this.el, 'label');
    this.hasErrorSlot = utils.hasSlot(this.el, 'error-text');
    this.hasHelpSlot = utils.hasSlot(this.el, 'help-text');
  }
  _getTickWidths() {
    const width = 100 / (this.axisLabels.length - 1);
    return width;
  }
  render() {
    const { el, sliderId, label, errorText, helpText, hasLabel, hasErrorSlot, hasHelpSlot, _handleSlotChange, min, max, value, step, disabled, name, _onInput, _onBlur, _onChange, } = this;
    utils.renderHiddenInput(true, el, name, JSON.stringify(this.value), disabled);
    return (index.h(index.Host, null, index.h("div", { class: "rux-form-field", part: "form-field" }, hasLabel ? (index.h("label", { class: {
        'rux-input-label': true,
        hidden: !this.hasLabel,
      }, "aria-hidden": this.hasLabel ? 'false' : 'true', htmlFor: sliderId, part: "label" }, index.h("slot", { name: "label" }, label))) : null, index.h("div", { class: {
        'rux-slider': true,
        'with-axis-labels': this.axisLabels.length > 0,
      } }, index.h("input", { id: sliderId, onInput: _onInput, onChange: _onChange, type: "range", class: "rux-range", min: min, max: max, step: step, value: value, disabled: disabled, "aria-label": "slider", "aria-disabled": disabled ? 'true' : 'false', onBlur: _onBlur, part: "input", list: "steplist" }), this.axisLabels.length > 0 ? (index.h("datalist", { id: "steplist", style: {
        gridTemplateColumns: `[tick] repeat(${this.axisLabels.length - 1}, ${this._getTickWidths()}%)`,
      } }, this.axisLabels.map((label) => {
      return (index.h("div", { class: "tick-label", part: "tick-container" }, index.h("div", { class: "tick", part: "tick" }), this.ticksOnly ? null : (index.h("div", { class: "axis-label", part: "axis-label" }, label))));
    }))) : null)), index.h("div", { class: {
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
    "label": ["handleLabelChange"],
    "value": ["handleChange"],
    "min": ["handleChange"],
    "max": ["handleChange"],
    "step": ["handleStep"]
  }; }
};
RuxSlider.style = ruxSliderCss;

exports.rux_slider = RuxSlider;
