'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const index$1 = require('./index-c37ac937.js');
require('./index-21b709f7.js');

const ruxTimeRegionCss = ":host{display:block}.rux-time-region{background:var(--color-background-base-default);padding:0.25rem;overflow:hidden;color:var(--color-text-primary);border-radius:3px;border-style:solid;border-width:1px;border-color:var(--color-background-interactive-default)}.rux-time-region__content{display:flex;align-items:center;font-family:var(--font-body-2-font-family);font-size:var(--font-body-2-font-size);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing)}.rux-time-region__content ::slotted(rux-status),.rux-time-region__content rux-status{margin-right:0.125rem}.rux-time-region__datetime{margin-top:0.25rem;text-align:right;font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-body-3-font-weight);letter-spacing:var(--font-body-3-letter-spacing)}.rux-time-region--selected{background:var(--color-background-interactive-default);border:1px solid var(--color-background-interactive-default);--status-symbols:var(--status-symbols-light);color:var(--color-text-inverse)}.rux-time-region--selected.rux-time-region--partial-start{border-color:var(--color-palette-neutral-1000);border-left-style:dashed;border-left-width:2px}.rux-time-region--selected.rux-time-region--partial-end{border-color:var(--color-palette-neutral-1000);border-right-width:2px;border-right-style:dashed}.rux-time-region--normal:not(.rux-time-region--selected){border-color:var(--status-symbol-color-fill-normal-on-dark)}.rux-time-region--critical:not(.rux-time-region--selected){border-color:var(--status-symbol-color-fill-critical-on-dark)}.rux-time-region--caution:not(.rux-time-region--selected){border-color:var(--status-symbol-color-fill-caution-on-dark)}.rux-time-region--standby:not(.rux-time-region--selected){border-color:var(--status-symbol-color-fill-standby-on-dark)}.rux-time-region--serious:not(.rux-time-region--selected){border-color:var(--status-symbol-color-fill-serious-on-dark)}.rux-time-region--off:not(.rux-time-region--selected){border-color:var(--status-symbol-color-fill-off-on-dark)}.hidden{visibility:hidden}.rux-time-region--partial-start{border-left-style:dashed;border-left-width:2px}.rux-time-region--partial-start.rux-time-region--selected{border-right-color:var(--color-palette-neutral-1000)}.rux-time-region--partial-end.rux-time-region--selected{border-left-color:var(--color-palette-neutral-1000)}.rux-time-region--partial-end{border-right-width:2px;border-right-style:dashed}";

const RuxTimeRegion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxTimeRegionChange = index.createEvent(this, "ruxtimeregionchange", 7);
    /**
     * The start date. Must be an ISO string "2021-02-02T05:00:00Z".
     */
    this.start = '';
    /**
     * The end date. Must be an ISO string "2021-02-02T05:00:00Z"
     */
    this.end = '';
    /**
     * Optionally hide the bottom right timestamp.
     */
    this.hideTimestamp = false;
    /**
     * Visually indicates a partial time regions. Partial time regions are time regions that start or end outside of the current range of the timeline.
     */
    this.partial = 'none';
    /**
     * Visually displays the selected state
     */
    this.selected = false;
    /**
     * @internal - The Time Regions's time zone. Set automatically from the parent Track component.
     */
    this.timezone = 'UTC';
  }
  handleTimeUpdate() {
    this.ruxTimeRegionChange.emit({
      start: this.start,
      end: this.end,
    });
  }
  get formattedTime() {
    if (!this.start || !this.end) {
      return false;
    }
    try {
      return (index$1.formatInTimeZone(new Date(this.start), this.timezone, 'HH:mm') +
        ' - ' +
        index$1.formatInTimeZone(new Date(this.end), this.timezone, 'HH:mm'));
    }
    catch (e) {
      return false;
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { part: "container", class: {
        'rux-time-region': true,
        'rux-time-region--normal': this.status === 'normal',
        'rux-time-region--critical': this.status === 'critical',
        'rux-time-region--serious': this.status === 'serious',
        'rux-time-region--caution': this.status === 'caution',
        'rux-time-region--standby': this.status === 'standby',
        'rux-time-region--off': this.status === 'off',
        'rux-time-region--selected': this.selected,
        'rux-time-region--partial-start': this.partial === 'start' ||
          this.partial === 'ongoing',
        'rux-time-region--partial-end': this.partial === 'end' ||
          this.partial === 'ongoing',
      } }, index.h("div", { class: "rux-time-region__content" }, this.status ? (index.h("rux-status", { class: {
        'light-theme': this.selected,
      }, status: this.status })) : null, index.h("slot", null)), !this.hideTimestamp ? (index.h("div", { class: "rux-time-region__datetime", part: "timestamp" }, this.formattedTime)) : null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "start": ["handleTimeUpdate"],
    "end": ["handleTimeUpdate"]
  }; }
};
RuxTimeRegion.style = ruxTimeRegionCss;

exports.rux_time_region = RuxTimeRegion;
