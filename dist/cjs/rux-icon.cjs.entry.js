'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxIconCss = ":host{display:inline-flex;color:var(--color-background-interactive-default)}:host([hidden]){display:none}svg,svg>svg{height:100%;width:auto}.icon{display:inline-flex}";

const RuxIcon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    // eslint-disable-next-line
    this.svg = '';
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'normal';
  }
  render() {
    const SVG = `rux-icon-${this.icon}`;
    return (index.h(index.Host, null, index.h(SVG, { class: "icon", part: "icon", size: this.size })));
  }
};
RuxIcon.style = ruxIconCss;

exports.rux_icon = RuxIcon;
