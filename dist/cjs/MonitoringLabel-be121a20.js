'use strict';

const index = require('./index-bc114c83.js');

const collapseNotifications = (value) => {
  const n = Math.floor(value);
  // don't show any values less than 0
  if (n <= 0)
    return null;
  // get the place value
  const thousand = Math.floor((n / 1000) % 1000); // only return a whole number
  const million = (n / 1000000) % 1000000; // return a decimal value for numbers like 1.2m
  const billion = (n / 1000000000) % 1000000000; // return a decimal value for numbers like 1.2b
  const trillion = (n / 1000000000000) % 1000000000000; // trillion is just to offer an overflow instance
  // set the display to its original state
  let _shorthand = n.toString();
  //If the value is more than a trillion, show infinite. Prevents an issue where certain, very large amounts are being shown incorrectly.
  if (value > 1000000000000) {
    _shorthand = '∞';
  }
  else {
    if (trillion >= 1) {
      _shorthand = '∞';
    }
    else if (billion >= 1) {
      _shorthand = `${billion.toFixed(1).toString()}B`;
    }
    else if (million >= 1) {
      _shorthand = `${million.toFixed(1).toString()}M`;
    }
    else if (thousand >= 1) {
      _shorthand = `${thousand}K`;
    }
  }
  return _shorthand;
};
const MonitoringBadge = ({ notifications, }) => (index.h("div", { class: `rux-advanced-status__badge ${notifications > 0 ? '' : 'rux-advanced-status__hidden'}`, part: "monitoring-badge" }, notifications && collapseNotifications(notifications)));

const MonitoringLabel = ({ label, sublabel, }) => (index.h("div", { class: "rux-advanced-status__label", part: "monitoring-label" },
  index.h("span", null, label),
  index.h("span", { class: `rux-advanced-status__sublabel ${!sublabel ? 'rux-advanced-status__hidden' : ''}`, part: "monitoring-sublabel" }, sublabel)));

exports.MonitoringBadge = MonitoringBadge;
exports.MonitoringLabel = MonitoringLabel;
