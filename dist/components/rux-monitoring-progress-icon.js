import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { M as MonitoringBadge, a as MonitoringLabel } from './MonitoringLabel.js';
import { d as defineCustomElement$2 } from './rux-status2.js';

const ruxMonitoringProgressIconCss = ":host{display:inline-flex;padding:0}:host([hidden]){display:none}*,*::before,*::after{box-sizing:border-box}.rux-advanced-status{display:flex;flex-direction:column;justify-content:flex-start;position:relative;margin:0;line-height:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rux-advanced-status__icon-group{display:flex;position:relative;margin:0 auto;width:4.5rem}rux-status{position:absolute;top:-0.25rem;left:-0.25rem;margin:0}.rux-advanced-status__badge{display:block;z-index:2;order:3;position:absolute;bottom:-0.75rem;right:-0.4rem;border:1px solid rgba(255, 255, 255, 0.6);border-radius:var(--radius-base);padding:0.65rem 0.25rem;color:#fff;font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-body-3-font-weight);letter-spacing:var(--font-body-3-letter-spacing);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:#000}.rux-advanced-status__label{color:var(--color-text-primary);font-family:var(--font-body-2-font-family);font-size:var(--font-body-2-font-size);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);text-align:center;text-overflow:ellipsis;white-space:nowrap;line-height:1.2;overflow:hidden;margin-top:1rem;width:100%;max-width:6.25rem}.rux-advanced-status__sublabel{font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-body-3-font-weight);letter-spacing:var(--font-body-3-letter-spacing);color:var(--color-text-primary);opacity:0.6;display:block}.rux-advanced-status__status rux-status::part(status){line-height:0}.rux-advanced-status__hidden{display:none}svg{margin:0 auto;width:3rem;height:3rem}svg.rux-status--off{stroke:var(--status-symbol-color-fill-off-on-dark, #9ea7ad);fill:var(--status-symbol-color-fill-off-on-dark, #9ea7ad)}svg.rux-status--standby{stroke:var(--status-symbol-color-fill-standby-on-dark, #2dccff);fill:var(--status-symbol-color-fill-standby-on-dark, #2dccff)}svg.rux-status--normal{stroke:var(--status-symbol-color-fill-normal-on-dark, #56f000);fill:var(--status-symbol-color-fill-normal-on-dark, #56f000)}svg.rux-status--caution{stroke:var(--status-symbol-color-fill-caution-on-dark, #fce83a);fill:var(--status-symbol-color-fill-caution-on-dark, #fce83a)}svg.rux-status--serious{stroke:var(--status-symbol-color-fill-serious-on-dark, #ffb300);fill:var(--status-symbol-color-fill-serious-on-dark, #ffb300)}svg.rux-status--critical{stroke:var(--status-symbol-color-fill-critical-on-dark, #ff3838);fill:var(--status-symbol-color-fill-critical-on-dark, #ff3838)}[data-progress] svg{transition:stroke-dashoffset 0.367s, stroke 0.367s;transform-origin:50% 50%}.rux-advanced-status__progress{color:var(--color-text-primary);font-family:var(--font-monospace-1-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-monospace-1-font-weight);letter-spacing:var(--font-monospace-1-letter-spacing);margin-top:-0.125rem;margin-left:-0.125rem;position:absolute;display:flex;justify-content:center;align-items:center;width:100%;height:100%;text-align:center}";

const RuxMonitoringProgressIcon$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this._circumference = 56 * 2 * Math.PI;
    this._defaultRangeList = [
      {
        threshold: 17,
        status: 'off',
      },
      {
        threshold: 33,
        status: 'standby',
      },
      {
        threshold: 49,
        status: 'normal',
      },
      {
        threshold: 65,
        status: 'caution',
      },
      {
        threshold: 81,
        status: 'serious',
      },
      {
        threshold: 100,
        status: 'critical',
      },
    ];
    /**
     * Sets the minimum value for the progress range. When progress is this number, it reads 0%.
     * When it is halfway between min and max, it will read 50%.
     */
    this.min = 0;
    /**
     * Sets the maximum value for the progress range. When progress is this number, it reads 100%.
     * When it is halfway between min and max, it will read 50%.
     */
    this.max = 100;
    /**
     * Displays this value as a percentage of where it lies between min and max
     * in the center of the donut graph and styles a proportional
     * segment of the graph. Progress can be positive or negative (the later useful for countdowns).
     * The progress value must exist within the thresholds specified in the range property below, and must be
     * an integer. If a non-integer value is passed in, progress will default to 0. If progress ever
     * becomes less than min or greater than max, it will be set to equal min or max respectively.
     */
    this.progress = 0;
    this._status = 'off';
    this._graphProgress = 0;
  }
  checkProgress(newValue, oldValue) {
    if (Number.isInteger(this.progress)) {
      if (newValue !== oldValue) {
        this._updateProgress();
      }
    }
    else {
      this.progress = 0;
    }
  }
  checkRange(newValue, oldValue) {
    if (newValue !== oldValue) {
      this._updateProgress();
    }
  }
  componentWillLoad() {
    if (!this.range || this.range.length < 1) {
      this.range = this._defaultRangeList;
    }
    if (Number.isInteger(this.progress)) {
      this.range = this.range.sort((a, b) => a.threshold >= b.threshold ? 1 : -1);
      this._updateProgress();
    }
    else {
      this.progress = 0;
    }
  }
  get status() {
    return this._status;
  }
  _updateProgress() {
    if (this.progress > this.max) {
      this.progress = this.max;
    }
    if (this.progress < this.min) {
      this.progress = this.min;
    }
    const rangeStatus = this.range.find((range) => this.progress <= range.threshold);
    this._status = rangeStatus ? rangeStatus.status : this.range[0].status;
    this._graphProgress =
      this._circumference -
        ((this.progress - this.min) / (this.max - this.min)) *
          this._circumference;
  }
  render() {
    return (h("div", { id: "rux-advanced-status__icon", class: "rux-advanced-status", part: "container" }, h("div", { class: "rux-advanced-status__icon-group", part: "icon-group" }, h("rux-status", { status: this._status, part: "status-icon" }), h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 128 128", class: `rux-status--${this._status}`, part: "radial-progress" }, h("g", { id: "progress" }, h("circle", { cx: "60", cy: "60", r: "56", fill: "transparent", stroke: "rgba(40, 63, 88, 1)", "stroke-width": "10", transform: "rotate(-90 61 60)" }), h("circle", { cx: "60", cy: "60", r: "56", fill: "transparent", "stroke-dasharray": "351.8583772 351.8583772", "stroke-dashoffset": this._graphProgress, "stroke-linecap": "round", "stroke-width": "10", class: "progress-ring__circle", transform: "rotate(-90 61 60)" }))), h("div", { class: "rux-advanced-status__progress", part: "progress-display" }, Math.ceil(((this.progress - this.min) /
      (this.max - this.min)) *
      100), "%"), h(MonitoringBadge, { notifications: this.notifications })), h(MonitoringLabel, { label: this.label, sublabel: this.sublabel })));
  }
  static get watchers() { return {
    "progress": ["checkProgress"],
    "range": ["checkRange"]
  }; }
  static get style() { return ruxMonitoringProgressIconCss; }
}, [1, "rux-monitoring-progress-icon", {
    "label": [1],
    "sublabel": [1],
    "range": [1040],
    "notifications": [2],
    "min": [2],
    "max": [2],
    "progress": [514],
    "_status": [32],
    "_graphProgress": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-monitoring-progress-icon", "rux-status"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-monitoring-progress-icon":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxMonitoringProgressIcon$1);
      }
      break;
    case "rux-status":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const RuxMonitoringProgressIcon = RuxMonitoringProgressIcon$1;
const defineCustomElement = defineCustomElement$1;

export { RuxMonitoringProgressIcon, defineCustomElement };
