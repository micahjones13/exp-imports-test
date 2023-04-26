import { h } from '@stencil/core';
import MonitoringBadge from '../../common/functional-components/MonitoringBadge/MonitoringBadge';
import MonitoringLabel from '../../common/functional-components/MonitoringLabel';
/**
 * @part container - the components container
 * @part monitoring-badge - The component's notification badge
 * @part monitoring-label - The component's label
 * @part monitoring-sublabel - The component's sublabel
 * @part status-icon - the components status symbol
 */
export class RuxMonitoringIcon {
  constructor() {
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
  static get is() { return "rux-monitoring-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-monitoring-icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-monitoring-icon.css"]
    };
  }
  static get properties() {
    return {
      "status": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Status",
          "resolved": "\"caution\" | \"critical\" | \"normal\" | \"off\" | \"serious\" | \"standby\"",
          "references": {
            "Status": {
              "location": "import",
              "path": "../../common/commonTypes.module"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Styles the icon according to the Astro Status colors.\nValid options are the Astro statuses `critical`, `serious`, `caution`, `normal`, `standby`, and `off`."
        },
        "attribute": "status",
        "reflect": true,
        "defaultValue": "'normal'"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Displays a label below the icon"
        },
        "attribute": "label",
        "reflect": false
      },
      "sublabel": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Displays a smaller label underneath the icon label"
        },
        "attribute": "sublabel",
        "reflect": false
      },
      "icon": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Displays an Astro icon matching this string. For a [full list of available icons,\nsee the Icons section in Astro UXDS Guidelines](https://astrouxds.com/ui-components/icons-and-symbols)"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "'antenna-transmit'"
      },
      "notifications": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If provided and greater than `0`, displays an outlined number badge at the bottom right of the icon.\nNumbers above `9999` are abbreviated to `'10K'` or `'100K'` for numbers in the thousands,\n`'1.5M'` for millions, `'1.5B'` for billions, and uses `'\u221E'` for one trillion or higher."
        },
        "attribute": "notifications",
        "reflect": false,
        "defaultValue": "0"
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "status",
        "methodName": "validateStatus"
      }];
  }
}
