import { Host, h } from '@stencil/core';
import { AppMeta } from './appMeta/appMeta';
/**
 * @slot (default) - Used for any additional center content (RuxClock, RuxTabs, etc.)
 * @slot left-side - Used to prepend a RuxIcon or similar element
 * @slot app-meta - Used to display the Application's metadata (Domain, Name, State, Version, etc.)
 * @slot right-side - Used to append optional content
 *
 * @part app-state - The container for the applications state
 * @part container - The container for global-status-bar
 * @part username - The container for the username
 * @part app-meta - The container for the Application's metadata
 * @part center - The container for the default slot content
 */
export class RuxGlobalStatusBar {
  constructor() {
    /**
     * Declares whether the menu-icon will be shown in the left-side slot
     */
    this.includeIcon = false;
    /**
     * Declares what text will render and whether the app-state component will be shown in the app-meta slot
     */
    this.appState = '';
    /**
     * Declares the color of the the app-state component background
     */
    this.appStateColor = 'tag1';
    /**
     * Declares what text will render and whether the username component will be shown in the app-meta slot
     */
    this.username = '';
    /**
     * Sets the icon to be displayed in the default rux-icon component
     */
    this.menuIcon = 'apps';
  }
  render() {
    const TagColor = {
      tag1: 'var(--color-palette-teal-600)',
      tag2: 'var(--color-palette-purple-600)',
      tag3: 'var(--color-palette-pink-600)',
      tag4: 'var(--color-palette-hotorange-600)',
    };
    return (h(Host, null, h("header", { part: "container" }, h("slot", { name: "left-side" }, this.includeIcon && (h("rux-icon", { icon: `${this.menuIcon}`, size: "small", class: this.appState || this.username
        ? 'shifted-up'
        : '', exportparts: "icon" }))), h("slot", { name: "app-meta" }, (this.appDomain ||
      this.appName ||
      this.appVersion) && (h(AppMeta, { domain: this.appDomain, name: this.appName, version: this.appVersion }, h("div", { class: "app-state-wrapper" }, this.appState && (h("div", { class: "app-state", part: "app-state", style: {
        backgroundColor: `${TagColor[this.appStateColor]}`,
      } }, this.appState)), this.username && (h("div", { class: "username", part: "username" }, this.username)))))), h("div", { class: "slotted-content", part: "middle" }, h("slot", null)), h("slot", { name: "right-side" }))));
  }
  static get is() { return "rux-global-status-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["rux-global-status-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["rux-global-status-bar.css"]
    };
  }
  static get properties() {
    return {
      "includeIcon": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Declares whether the menu-icon will be shown in the left-side slot"
        },
        "attribute": "include-icon",
        "reflect": false,
        "defaultValue": "false"
      },
      "appState": {
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
          "text": "Declares what text will render and whether the app-state component will be shown in the app-meta slot"
        },
        "attribute": "app-state",
        "reflect": false,
        "defaultValue": "''"
      },
      "appStateColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'tag1' | 'tag2' | 'tag3' | 'tag4'",
          "resolved": "\"tag1\" | \"tag2\" | \"tag3\" | \"tag4\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Declares the color of the the app-state component background"
        },
        "attribute": "app-state-color",
        "reflect": false,
        "defaultValue": "'tag1'"
      },
      "username": {
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
          "text": "Declares what text will render and whether the username component will be shown in the app-meta slot"
        },
        "attribute": "username",
        "reflect": false,
        "defaultValue": "''"
      },
      "appDomain": {
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
          "text": "Sets the domain of the application to be displayed in the app-meta element"
        },
        "attribute": "app-domain",
        "reflect": false
      },
      "appName": {
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
          "text": "Sets the name of the application to be displayed in the app-meta element"
        },
        "attribute": "app-name",
        "reflect": false
      },
      "appVersion": {
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
          "text": "Sets the version of the application to be displayed in the app-meta element"
        },
        "attribute": "app-version",
        "reflect": false
      },
      "menuIcon": {
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
          "text": "Sets the icon to be displayed in the default rux-icon component"
        },
        "attribute": "menu-icon",
        "reflect": true,
        "defaultValue": "'apps'"
      }
    };
  }
}
