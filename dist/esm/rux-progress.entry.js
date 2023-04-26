import { r as registerInstance, h, H as Host } from './index-a1205123.js';

const ruxProgressCss = ":host{position:relative;display:flex;justify-content:space-between;align-items:center;padding:var(--spacing-0);height:calc(var(--spacing-4) + var(--spacing-1))}:host([hidden]){display:none}.rux-progress[value]{appearance:none;background-color:var(--color-background-surface-default);border:1px solid var(--color-background-surface-default);border-radius:var(--progress-radius-outer);box-shadow:0 0 0 1px var(--color-background-interactive-default);height:calc(var(--spacing-4) + var(--spacing-050));width:100%;box-sizing:border-box;overflow:hidden}.rux-progress[value]::-webkit-progress-bar{background-color:transparent}.rux-progress[value]::-webkit-progress-value{border-radius:0 var(--spacing-4) var(--spacing-4) 0;height:var(--spacing-4);max-width:100%;background:var(--color-background-interactive-default);transition:width 0.3s ease;-moz-transition:width 0.3s ease;-webkit-transition:width 0.3s ease;-o-transition:width 0.3s ease}.rux-progress[value]::-ms-fill{border-radius:0 var(--spacing-4) var(--spacing-4) 0;border:none;height:var(--spacing-4);max-width:100%;background-color:var(--color-background-interactive-default)}.rux-progress[value]::-moz-progress-bar{border-radius:0 var(--spacing-4) var(--spacing-4) 0;height:var(--spacing-4);max-width:100%;background:var(--color-background-interactive-default)}.rux-progress__value{font-family:var(--font-body-1-font-family);font-weight:var(--font-body-1-font-weight);font-size:var(--font-body-1-font-size);letter-spacing:var(--font-body-1-letter-spacing);line-height:var(--font-body-1-line-height);margin-left:var(--spacing-2);text-align:right;color:var(--color-text-primary)}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}";

const RuxProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  static get watchers() { return {
    "value": ["watchHandler"]
  }; }
};
RuxProgress.style = ruxProgressCss;

export { RuxProgress as rux_progress };
