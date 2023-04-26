'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');
const helpers = require('./helpers-15f03cb1.js');
require('./index-c37ac937.js');
require('./index-21b709f7.js');
require('./index-117877ea.js');
require('./index-81f27cc2.js');
require('./index-953a2c41.js');

const ruxRulerCss = ":host{display:contents}.rux-track{display:contents}.ruler-time{display:flex;align-items:center;padding:12px 20px}";

const RuxRuler = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return helpers.dateRange(new Date(this.start), new Date(this.end), this.interval, 1, this.timezone);
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
    return (index.h(index.Host, null, index.h("div", { class: "rux-ruler rux-track" }, this.dateRange.map((time, index$1) => (index.h("span", { class: {
        'ruler-time': true,
      }, style: {
        gridRow: '1',
        gridColumn: this.getColumn(index$1),
      } }, time))))));
  }
  get el() { return index.getElement(this); }
};
RuxRuler.style = ruxRulerCss;

exports.rux_ruler = RuxRuler;
