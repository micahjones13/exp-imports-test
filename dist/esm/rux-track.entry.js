import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';
import { d as differenceInMinutes } from './index-f52e2c8a.js';
import { d as differenceInHours } from './index-be45298b.js';
import './index-33004084.js';

const ruxTrackCss = ".rux-track{background:var(--color-background-surface-default);width:fit-content;border-bottom:2px solid var(--color-background-base-default)}.rux-track__header{box-sizing:border-box;padding:11px 8px 13px 8px;background:var(--color-background-surface-default);border-right:2px solid var(--color-background-base-default);display:flex;align-items:center;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);position:sticky;left:0;min-width:184px;z-index:2}.rux-timeline{scrollbar-color:var(--color-border-interactive-muted);position:relative;display:grid;grid-template-rows:auto;background:var(--color-background-surface-default)}";

const RuxTrack = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @internal - The grid's width. Set automatically from the parent Timeline component.
     */
    this.width = 0;
    /**
     * @internal - The number of grid columns to display. Set automatically from the parent Timeline component.
     */
    this.columns = 0;
    /**
     * @internal - The Track's start date. Set automatically from the parent Timeline component.
     */
    this.start = '';
    /**
     * @internal - The Track's end date. Set automatically from the parent Timeline component.
     */
    this.end = '';
    /**
     * @internal - The Track's time zone. Set automatically from the parent Timeline component.
     */
    this.timezone = 'UTC';
  }
  handleUpdate(_newValue, old) {
    if (old) {
      this.initializeRows();
    }
  }
  handleTimezoneUpdate() {
    this.initializeRows();
  }
  handleTimeRegionChange(e) {
    this.initializeRows();
    e.stopPropagation();
  }
  connectedCallback() {
    this._handleSlotChange = this._handleSlotChange.bind(this);
  }
  /**
   * Tracks are displayed as a (CSS) grid of cells.
   * Each cell can represent a minute or hour depending on the interval.
   */
  _calculateGridColumnFromTime(time) {
    if (this.start) {
      const timelineStart = new Date(this.start);
      if (this.interval === 'hour') {
        const difference = Math.abs(differenceInMinutes(timelineStart, new Date(time)));
        return difference + 2;
      }
      if (this.interval === 'day') {
        const difference = Math.abs(differenceInHours(timelineStart, new Date(time)));
        return difference + 2;
      }
    }
    return 0;
  }
  _validateTimeRegion(start, end) {
    if (!start) {
      return {
        success: false,
        error: 'Time Region must have a start date provided',
      };
    }
    if (!end) {
      return {
        success: false,
        error: 'Time Region must have a end date provided',
      };
    }
    if (new Date(start) > new Date(end)) {
      return {
        success: false,
        error: `The Time Region start date must be before the end date: ${start} - ${end}`,
      };
    }
    if (new Date(start) > new Date(this.end)) {
      return {
        success: false,
        error: `The Time Region start date does not fall within the Timeline's range: ${start} - ${this.start}/${this.end}`,
      };
    }
    if (new Date(start) < new Date(this.start) &&
      new Date(end) < new Date(this.start)) {
      return {
        success: false,
        error: `The Time Region start and end dates do not fall within the Timeline's range: ${start} - ${end}`,
      };
    }
    return {
      success: true,
    };
  }
  /**
   * Time Regions are dumb and don't know anything about the grid.
   * The Track is responsible for lining up the Time Regions with the grid.
   */
  initializeRows() {
    const children = [...this.el.children].filter((el) => el.tagName.toLowerCase() === 'rux-time-region');
    children.forEach((el) => {
      const isHidden = el.style.visibility === 'hidden';
      const isValid = this._validateTimeRegion(el.start, el.end);
      /**
       * Store temp vars to use for calculating a Time Region's position in the grid
       * If a Time Region's range is outside the Timeline's range (a partial event),
       * visually it is treated as if its start/end dates = the timeline's.
       * */
      let start = el.start;
      let end = el.end;
      if (isValid.success) {
        if (el.start < this.start && el.end > this.end) {
          el.partial = 'ongoing';
          start = this.start;
          end = this.end;
        }
        else if (el.start < this.start) {
          el.partial = 'start';
          start = this.start;
        }
        else if (el.end > this.end) {
          el.partial = 'end';
          end = this.end;
        }
        else {
          el.partial = 'none';
        }
        el.timezone = this.timezone;
        el.style.gridRow = '1';
        el.style.display = 'block';
        const gridColumn = `${this._calculateGridColumnFromTime(start)} / ${this._calculateGridColumnFromTime(end)}`;
        el.style.gridColumn = gridColumn;
      }
      else {
        if (!isHidden) {
          el.style.display = 'none';
        }
      }
    });
  }
  _handleSlotChange() {
    this.initializeRows();
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-timeline rux-track", style: {
        gridTemplateColumns: `[header] 200px repeat(${this.columns}, ${this.width}px)`,
      }, part: "container" }, h("div", { class: "rux-track__header", part: "track-header", style: {
        gridRow: '1',
      } }, h("slot", { name: "label" })), h("slot", { onSlotchange: this._handleSlotChange }))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "start": ["handleUpdate"],
    "end": ["handleUpdate"],
    "interval": ["handleUpdate"],
    "timezone": ["handleTimezoneUpdate"]
  }; }
};
RuxTrack.style = ruxTrackCss;

export { RuxTrack as rux_track };
