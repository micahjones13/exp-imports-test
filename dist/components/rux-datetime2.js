import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const RuxDatetime = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * The date time to be formatted
     */
    this.date = new Date();
    /**
     * The locale
     */
    this.locale = 'default';
    /**
     * Display date in 12 hour time.
     */
    this.hour12 = false;
  }
  render() {
    const date = new Date(this.date);
    const { day, era, hour, hour12, locale, minute, month, second, timeZone, timeZoneName, weekday, year, } = this;
    // try catch here and throw a console error for now
    return new Intl.DateTimeFormat(locale, {
      day,
      era,
      hour,
      hour12,
      minute,
      month,
      second,
      timeZone,
      timeZoneName,
      weekday,
      year,
    }).format(date);
  }
}, [1, "rux-datetime", {
    "date": [1],
    "locale": [1],
    "weekday": [1],
    "era": [1],
    "year": [1],
    "month": [1],
    "day": [1],
    "hour": [1],
    "minute": [1],
    "second": [1],
    "timeZoneName": [1, "time-zone-name"],
    "timeZone": [1, "time-zone"],
    "hour12": [4, "hour-12"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["rux-datetime"];
  components.forEach(tagName => { switch (tagName) {
    case "rux-datetime":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, RuxDatetime);
      }
      break;
  } });
}

export { RuxDatetime as R, defineCustomElement as d };
