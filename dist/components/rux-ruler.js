import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as dateRange } from './helpers.js';

const ruxRulerCss = ":host{display:contents}.rux-track{display:contents}.ruler-time{display:flex;align-items:center;padding:12px 20px}";

const RuxRuler$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  get el() { return this; }
  static get style() { return ruxRulerCss; }
}, [1, "rux-ruler", {
    "interval": [8],
    "start": [1],
    "end": [1],
    "timezone": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-ruler"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-ruler":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxRuler$1);
      }
      break;
  } });
}

const RuxRuler = RuxRuler$1;
const defineCustomElement = defineCustomElement$1;

export { RuxRuler, defineCustomElement };
