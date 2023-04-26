import { r as registerInstance, h, H as Host } from './index-a1205123.js';

const ruxIconCss = ":host{display:inline-flex;color:var(--color-background-interactive-default)}:host([hidden]){display:none}svg,svg>svg{height:100%;width:auto}.icon{display:inline-flex}";

const RuxIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // eslint-disable-next-line
    this.svg = '';
    /**
     * The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em')
     */
    this.size = 'normal';
  }
  render() {
    const SVG = `rux-icon-${this.icon}`;
    return (h(Host, null, h(SVG, { class: "icon", part: "icon", size: this.size })));
  }
};
RuxIcon.style = ruxIconCss;

export { RuxIcon as rux_icon };
