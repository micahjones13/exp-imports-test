import { h } from '@stencil/core';
import MonitoringBadge from '../../common/functional-components/MonitoringBadge/MonitoringBadge';
import MonitoringLabel from '../../common/functional-components/MonitoringLabel';
/**
 * @part container - The component's container element
 * @part radial-progress - The "donut"-style progress meter
 * @part icon-group - A wrapper element containing the status icon, radial progress, and notification elements.
 * @part status-icon - The component's status symbol
 * @part progress-display - The component's progress value
 * @part monitoring-badge - The component's notification badge
 * @part monitoring-label - The component's label
 * @part monitoring-sublabel - The component's sublabel
 */
export class RuxMonitoringProgressIcon {
  constructor() {
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
  static get is() { return "rux-monitoring-progress-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-monitoring-progress-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-monitoring-progress-icon.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Displays a label below the icon"
        },
        "attribute": "label",
        "reflect": false
      },
      "sublabel": {
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
          "text": "Displays a smaller label underneath the icon label"
        },
        "attribute": "sublabel",
        "reflect": false
      },
      "range": {
        "type": "unknown",
        "mutable": true,
        "complexType": {
          "original": "Array<RangeItem>",
          "resolved": "RangeItem[]",
          "references": {
            "Array": {
              "location": "global"
            },
            "RangeItem": {
              "location": "local"
            }
          }
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items in this Array define thresholds for changing the status style of the progress icon.\nFor each item in the Array, the icon will be styled with the given status while the progress value\nis less than or equal to the Array item\u2019s threshold and greater than the next smallest item\u2018s threshold.\nBoth progress and the Array items\u2019 threshold values can be positive or negative.\nIf no min is specified, the component assumes the Array's first status threshold begins at 0."
        }
      },
      "notifications": {
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
          "text": "If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.\nNumbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands, `'1.5M'`\nfor millions, `'1.5B'` for billions, and `'\u221E'` for one trillion or higher."
        },
        "attribute": "notifications",
        "reflect": false
      },
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
          "text": "Sets the minimum value for the progress range. When progress is this number, it reads 0%.\nWhen it is halfway between min and max, it will read 50%."
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
          "text": "Sets the maximum value for the progress range. When progress is this number, it reads 100%.\nWhen it is halfway between min and max, it will read 50%."
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
      },
      "progress": {
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
          "text": "Displays this value as a percentage of where it lies between min and max\nin the center of the donut graph and styles a proportional\nsegment of the graph. Progress can be positive or negative (the later useful for countdowns).\nThe progress value must exist within the thresholds specified in the range property below, and must be\nan integer. If a non-integer value is passed in, progress will default to 0. If progress ever\nbecomes less than min or greater than max, it will be set to equal min or max respectively."
        },
        "attribute": "progress",
        "reflect": true,
        "defaultValue": "0"
      }
    };
  }
  static get states() {
    return {
      "_status": {},
      "_graphProgress": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "progress",
        "methodName": "checkProgress"
      }, {
        "propName": "range",
        "methodName": "checkRange"
      }];
  }
}
