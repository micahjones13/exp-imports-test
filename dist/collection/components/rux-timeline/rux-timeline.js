import { Host, h } from '@stencil/core';
import { 
// addHours,
// addMinutes,
differenceInMinutes, 
// startOfDay,
differenceInHours, format, } from 'date-fns';
import { dateRange } from './helpers';
import { validateTimezone } from './helpers';
/**
 * @part playhead - The timeline's playhead
 * @part time-region-container - The container for time regions. Use this part to set a maximum height and enable vertical scrolling.
 */
export class RuxTimeline {
  constructor() {
    this.slots = 'empty';
    this.playheadPositionInPixels = 200;
    this.columnWidth = 120;
    this.playheadHeight = 0;
    this.showPlayhead = true;
    /**
     * The timeline's start date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    this.start = '';
    /**
     * The timeline's end date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    this.end = '';
    /**
     * The timeline's zoom level.
     */
    this.zoom = 1;
    /**
     * The timeline's date time interval
     */
    this.interval = 'hour';
    /**
     * Controls the timezone that the timeline is localized to. Must be an IANA time zone name ("America/New_York") or an offset string.
     */
    this.timezone = 'UTC';
  }
  syncPlayhead() {
    if (this.playhead) {
      const time = this._calculatePlayheadFromTime(this.playhead);
      if (time) {
        this.playheadPositionInPixels = time;
      }
    }
  }
  handleZoomChange() {
    this._setZoom();
    this.syncPlayhead();
    this._updateRegions();
  }
  handleChange() {
    this._updateRegions();
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
    this._handleMouse = this._handleMouse.bind(this);
    this.syncPlayhead = this.syncPlayhead.bind(this);
    this._updateRegions = this._updateRegions.bind(this);
  }
  componentWillLoad() {
    this._setZoom();
    this.syncPlayhead();
  }
  get width() {
    let unitOfTime = 60;
    if (this.interval === 'day') {
      unitOfTime = 24;
    }
    return this.columnWidth / unitOfTime;
  }
  get columns() {
    let unitOfTime = 60;
    if (this.interval === 'day') {
      unitOfTime = 24;
    }
    return this.totalColumns * unitOfTime;
  }
  get totalColumns() {
    if (!this.start && !this.end) {
      return 0;
    }
    const range = dateRange(this.start, this.end, this.interval);
    return range.length;
  }
  /**
   * The relationship between 1px and the datetime it represents.
   * We need a way to map individual pixels to a particular time, so that
   * if the playhead or an event is positioned at 120px visually, we can determine
   * what exact time that represents.
   */
  get pxToTimeRatio() {
    if (this.interval === 'hour') {
      return this.columnWidth / 60; // for hours.
    }
    if (this.interval === 'day') {
      return this.columnWidth / 24; //tbd
    }
    return 2;
  }
  get formattedCurrentTime() {
    if (this.playhead) {
      return format(new Date(this.playhead), 'MM/dd/Y HH:mm:ss');
    }
    else {
      return null;
    }
  }
  initializeTracks() {
    const tracks = [...this.el.children].filter((el) => el.tagName.toLowerCase() === 'rux-track');
    tracks.map((el) => {
      el.width = this.width;
      el.columns = this.columns;
      el.interval = this.interval;
      el.start = this.start;
      el.end = this.end;
    });
  }
  /**
   * Give it a position (in pixels) and get the time that represents
   */
  // private _calculateTimeFromPlayhead(position: any) {
  //     // this.playheadPositionInPixels = position - 2
  //     const time = position - 200
  //     const min = time / this.pxToTimeRatio
  //     let newTime = new Date()
  //     if (this.interval === 'hour') {
  //         newTime = addMinutes(new Date(this.start), min)
  //     }
  //     if (this.interval === 'day') {
  //         /**
  //          * If the interval is day, we need to round the start/end times to the start of the day
  //          * Ie you passing 01/01/2020 06:00 as the start, the timeline needs to start at 00
  //          */
  //         const start = startOfDay(new Date(this.start))
  //         newTime = addHours(start, min)
  //     }
  //     return newTime
  // }
  /**
   * Give it a time, get where it should be positioned visually (in pixels)
   */
  _calculatePlayheadFromTime(time) {
    if (new Date(time) < new Date(this.start) ||
      new Date(time) > new Date(this.end)) {
      throw new RangeError(`Playhead date must be between ${new Date(this.start).toISOString()} - ${new Date(this.end).toISOString()}`);
    }
    let newTime = Math.abs(differenceInMinutes(new Date(this.start), new Date(time)));
    if (this.interval === 'day') {
      newTime = Math.abs(differenceInHours(new Date(this.start), new Date(time)));
    }
    const result = newTime * this.pxToTimeRatio + 200;
    return result;
  }
  /**
   * For debugging
   */
  _handleMouse(e) {
    var _a;
    const rect = this.el.getBoundingClientRect();
    const scrollOffset = this.timelineContainer
      ? (_a = this.timelineContainer) === null || _a === void 0 ? void 0 : _a.scrollLeft
      : 0;
    const position = e.clientX - rect.left + scrollOffset;
    if (position >= 200) {
      // this.playheadPositionInPixels = position - scrollOffset
      // const time = this._calculateTimeFromPlayhead(position)
      // this.playhead = time.toISOString()
    }
  }
  _handleSlotChange() {
    this._updateRegions();
  }
  /**
   * Syncs the Timeline's current interval and pxToTimeRatio to it's children and grandchildren
   * We're taking a props down, events up approach to data flow here.
   */
  _updateRegions() {
    var _a, _b;
    const slot = (_a = this.slotContainer) === null || _a === void 0 ? void 0 : _a.querySelectorAll('slot')[0];
    const tracks = [
      ...slot === null || slot === void 0 ? void 0 : slot.assignedElements({ flatten: true }).filter((node) => node.tagName.toLowerCase() === 'rux-track'),
    ];
    tracks.map((el) => {
      el.width = this.width;
      el.columns = this.columns;
      el.interval = this.interval;
      el.start = this.start;
      el.end = this.end;
      el.timezone = this.timezone;
    });
    const rulerSlot = (_b = this.rulerContainer) === null || _b === void 0 ? void 0 : _b.querySelector('slot');
    const rulerTrack = rulerSlot === null || rulerSlot === void 0 ? void 0 : rulerSlot.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === 'rux-track');
    if (rulerTrack) {
      rulerTrack.width = this.width;
      rulerTrack.columns = this.columns;
      rulerTrack.interval = this.interval;
      rulerTrack.start = this.start;
      rulerTrack.end = this.end;
      const rulerEl = [...rulerTrack.children].find((el) => el.tagName.toLowerCase() === 'rux-ruler');
      if (rulerEl) {
        validateTimezone(this.timezone).then(() => {
          rulerEl.timezone = this.timezone;
        });
        rulerEl.start = this.start;
        rulerEl.end = this.end;
        rulerEl.interval = this.interval;
      }
    }
  }
  _setZoom() {
    let unitOfTime = 60;
    if (this.interval === 'day') {
      unitOfTime = 24 * 5;
    }
    if (this.zoom >= 1) {
      this.columnWidth = this.zoom * unitOfTime;
    }
  }
  _handleScroll() {
    var _a, _b;
    // #TODO Maybe throttle this event w/ requestAnimationFrame?
    const scrollOffset = this.timelineContainer
      ? (_a = this.timelineContainer) === null || _a === void 0 ? void 0 : _a.scrollTop
      : 0;
    this.playheadHeight = scrollOffset;
    const leftOffset = this.timelineContainer
      ? (_b = this.timelineContainer) === null || _b === void 0 ? void 0 : _b.scrollLeft
      : 0;
    this.showPlayhead = leftOffset + 200 <= this.playheadPositionInPixels;
  }
  render() {
    return (h(Host, null, h("div", { style: { position: 'relative' } }, h("div", { class: "rux-timeline", onMouseMove: (ev) => this._handleMouse(ev), onScroll: () => this._handleScroll(), ref: (el) => (this.timelineContainer = el), part: "time-region-container" }, this.playhead && (h("div", { class: {
        'rux-playhead': true,
        hidden: !this.showPlayhead,
      }, part: "playhead", style: {
        top: `${this.playheadHeight}px`,
        left: `${this.playheadPositionInPixels}px`,
      } })), h("div", { class: "events", ref: (el) => (this.slotContainer = el) }, h("slot", { onSlotchange: this._handleSlotChange })), h("div", { class: "ruler", ref: (el) => (this.rulerContainer = el) }, h("slot", { name: "ruler" }))))));
  }
  static get is() { return "rux-timeline"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-timeline.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-timeline.css"]
    };
  }
  static get properties() {
    return {
      "start": {
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
          "text": "The timeline's start date. Must be an ISO string \"2021-02-02T05:00:00Z\""
        },
        "attribute": "start",
        "reflect": false,
        "defaultValue": "''"
      },
      "end": {
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
          "text": "The timeline's end date. Must be an ISO string \"2021-02-02T05:00:00Z\""
        },
        "attribute": "end",
        "reflect": false,
        "defaultValue": "''"
      },
      "zoom": {
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
          "text": "The timeline's zoom level."
        },
        "attribute": "zoom",
        "reflect": true,
        "defaultValue": "1"
      },
      "playhead": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The timeline's playhead date time. Must be an ISO string \"2021-02-02T05:00:00Z\""
        },
        "attribute": "playhead",
        "reflect": true
      },
      "interval": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'hour' | 'day'",
          "resolved": "\"day\" | \"hour\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The timeline's date time interval"
        },
        "attribute": "interval",
        "reflect": false,
        "defaultValue": "'hour'"
      },
      "timezone": {
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
          "text": "Controls the timezone that the timeline is localized to. Must be an IANA time zone name (\"America/New_York\") or an offset string."
        },
        "attribute": "timezone",
        "reflect": false,
        "defaultValue": "'UTC'"
      }
    };
  }
  static get states() {
    return {
      "playheadPositionInPixels": {},
      "columnWidth": {},
      "playheadHeight": {},
      "showPlayhead": {}
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "playhead",
        "methodName": "syncPlayhead"
      }, {
        "propName": "zoom",
        "methodName": "handleZoomChange"
      }, {
        "propName": "start",
        "methodName": "handleChange"
      }, {
        "propName": "end",
        "methodName": "handleChange"
      }, {
        "propName": "interval",
        "methodName": "handleChange"
      }, {
        "propName": "timezone",
        "methodName": "handleChange"
      }];
  }
}
