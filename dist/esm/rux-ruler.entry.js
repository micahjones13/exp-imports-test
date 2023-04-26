import { r as registerInstance, h, H as Host, g as getElement } from './index-a1205123.js';
import { d as dateRange } from './helpers-13900c69.js';
import './index-fe8e5d4f.js';
import './index-bf9fd6cc.js';
import './index-33004084.js';
import './index-8434b33d.js';
import './index-be45298b.js';

const ruxRulerCss = ":host{display:contents}.rux-track{display:contents}.ruler-time{display:flex;align-items:center;padding:12px 20px}";

const RuxRuler = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * @internal The Timeline's interval. Set automatically from the parent Timeline component
     */
    this.interval = '';
    /**
     * @internal The Timeline's start date. Set automatically from the parent Timeline component
     */
    this.start = '';
    /**
     * @internal The Timeline's end date. Set automatically from the parent Timeline component
     */
    this.end = '';
    /**
     * @internal - The Ruler's time zone. Set automatically from the parent Timeline component.
     */
    this.timezone = 'UTC';
  }
  get dateRange() {
    return dateRange(new Date(this.start), new Date(this.end), this.interval, 1, this.timezone);
  }
  getColumn(index) {
    let unitOfTime = 60;
    if (this.interval === 'day') {
      unitOfTime = 24;
    }
    const start = unitOfTime * index + 2;
    const end = start + unitOfTime;
    return `${unitOfTime * index + 2} / ${end}`;
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-ruler rux-track" }, this.dateRange.map((time, index) => (h("span", { class: {
        'ruler-time': true,
      }, style: {
        gridRow: '1',
        gridColumn: this.getColumn(index),
      } }, time))))));
  }
  get el() { return getElement(this); }
};
RuxRuler.style = ruxRulerCss;

export { RuxRuler as rux_ruler };
