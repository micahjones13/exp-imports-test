import { r as registerInstance, h, g as getElement } from './index-a1205123.js';
import { M as MonitoringLabel, a as MonitoringBadge } from './MonitoringLabel-c1ce25e3.js';

const ruxMonitoringIconCss = ":host{display:inline-flex;padding:0}:host([hidden]){display:none}*,*::before,*::after{box-sizing:border-box}.rux-advanced-status{display:flex;flex-direction:column;justify-content:flex-start;position:relative;margin:var(--spacing-0);line-height:0;font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rux-advanced-status__icon-group{display:flex;position:relative;margin:var(--spacing-0) auto;width:calc(var(--spacing-16) + var(--spacing-2))}rux-icon{order:2;margin:0 auto}.rux-advanced-status__status{position:absolute;margin:0}.rux-advanced-status__badge{display:block;z-index:2;order:3;position:absolute;left:calc(var(--spacing-14) - var(--spacing-050));top:calc(var(--spacing-025) * -5);box-shadow:inset 0 0 0 1px var(--color-text-secondary);border-radius:var(--radius-base);padding:var(--spacing-2) var(--spacing-1);color:var(--color-palette-neutral-000);font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-body-3-font-weight);letter-spacing:var(--font-body-3-letter-spacing);text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:#000}.rux-advanced-status__label{color:var(--color-text-primary);font-family:var(--font-body-2-font-family);font-size:var(--font-body-2-font-size);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);text-align:center;text-overflow:ellipsis;white-space:nowrap;line-height:var(--line-height-sm);overflow:hidden;width:100%;max-width:calc(var(--spacing-24) + var(--spacing-2))}.rux-advanced-status__sublabel{font-family:var(--font-body-3-font-family);font-size:var(--font-body-3-font-size);font-weight:var(--font-body-3-font-weight);letter-spacing:var(--font-body-3-letter-spacing);color:var(--gsb-color-text);display:block}.rux-advanced-status__status rux-status::part(status){line-height:0}.rux-advanced-status__hidden{display:none}:host([status=off]) rux-icon{color:var(--status-symbol-color-fill-off-on-dark)}:host([status=standby]) rux-icon{color:var(--status-symbol-color-fill-standby-on-dark)}:host([status=normal]) rux-icon{color:var(--status-symbol-color-fill-normal-on-dark)}:host([status=caution]) rux-icon{color:var(--status-symbol-color-fill-caution-on-dark)}:host([status=serious]) rux-icon{color:var(--status-symbol-color-fill-serious-on-dark)}:host([status=critical]) rux-icon{color:var(--status-symbol-color-fill-critical-on-dark)}";

const RuxMonitoringIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Styles the icon according to the Astro Status colors.
     * Valid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`.
     */
    this.status = 'normal';
    /**
     * Displays an Astro icon matching this string. For a [full list of available icons,
     * see the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)
     */
    this.icon = 'antenna-transmit';
    /**
     * If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.
     * Numbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands,
     * `'1.5M'` for millions, `'1.5B'` for billions, and uses `'∞'` for one trillion or higher.
     */
    this.notifications = 0;
  }
  componentDidRender() {
    this.handleNotificatonWidth();
  }
  validateStatus(newValue) {
    const statusTypes = {
      off: true,
      standby: true,
      normal: true,
      caution: true,
      serious: true,
      critical: true,
    };
    if (!statusTypes[newValue]) {
      throw new Error('valid status required');
    }
  }
  handleNotificatonWidth() {
    const badge = this.el.shadowRoot.querySelector('.rux-advanced-status__badge');
    if (badge) {
      /** Size and position of the icon. */
      const iconRect = this.el.getBoundingClientRect();
      /** Size and position of the badge. */
      const badgeRect = badge.getBoundingClientRect();
      /** Offset between the right-edge of the badge and the right-edge of the icon. */
      const offset = badgeRect.right - iconRect.right;
      // if the offset is greater than zero, increase the minimum width of the badge
      if (offset > 0) {
        this.el.style.minWidth = iconRect.width + offset + 'px';
      }
    }
  }
  render() {
    return (h("div", { id: "rux-advanced-status__icon", class: "rux-advanced-status", part: "container" }, h("div", { class: "rux-advanced-status__icon-group" }, h("div", { class: "rux-advanced-status__status" }, h("rux-status", { status: this.status, part: "status-icon" })), h("rux-icon", { icon: this.icon, class: `rux-status--${this.status}`, size: "2.5rem", exportparts: "icon" }), h(MonitoringBadge, { notifications: this.notifications })), h(MonitoringLabel, { label: this.label, sublabel: this.sublabel })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "status": ["validateStatus"]
  }; }
};
RuxMonitoringIcon.style = ruxMonitoringIconCss;

export { RuxMonitoringIcon as rux_monitoring_icon };
