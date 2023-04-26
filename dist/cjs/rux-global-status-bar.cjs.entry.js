'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const AppMeta = ({ domain, name, version }, children) => (index.h("div", { class: "app-meta", part: "app-meta" },
  index.h("div", { class: "app-info-wrapper" },
    domain && index.h("h1", { class: "app-domain" }, domain),
    name && index.h("h1", { class: "app-name" }, name),
    version && index.h("span", { class: "app-version" }, version)),
  children));

const ruxGlobalStatusBarCss = ":host{display:block;position:sticky;z-index:50;top:0;left:0;height:var(--spacing-24);width:-webkit-fill-available;width:-moz-available;width:stretch;padding:0 var(--spacing-6);box-sizing:border-box;background-color:var(--gsb-color-background);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;contain:layout;line-height:var(--line-height-base);font-family:var(--font-body-1-font-family);font-size:var(--font-body-1-font-size);font-weight:var(--font-body-1-font-weight);letter-spacing:var(--font-body-1-letter-spacing)}:host([hidden]){display:none}header{overflow:hidden;display:flex;height:100%;width:100%;align-items:center;justify-content:space-between;box-sizing:border-box}slot[name=left-side]>*,::slotted(*[slot=left-side]){margin-right:var(--spacing-2)}slot[name=left-side]>rux-icon,::slotted(rux-icon[slot=left-side]){height:calc(var(--spacing-8) + var(--spacing-050));font-size:var(--spacing-8)}slot[name=left-side]>.shifted-up,::slotted(.shifted-up[slot=left-side]){height:calc(var(--spacing-14) + var(--spacing-050))}slot[name=right-side]>rux-monitoring-icon,::slotted(rux-monitoring-icon[slot=right-side]){display:flex;align-items:center;padding-right:calc(var(--spacing-4) + var(--spacing-2));padding-top:var(--spacing-2)}.app-meta,::slotted(*[slot=app-meta]){display:inline-flex;flex-wrap:wrap;padding:var(--spacing-0);margin:var(--spacing-0) auto var(--spacing-0) var(--spacing-0);color:var(--color-palette-neutral-000);white-space:nowrap}.app-info-wrapper{flex-basis:100%;display:flex;align-items:baseline;min-height:var(--spacing-10);padding-bottom:var(--spacing-1);min-width:10.625rem}.app-meta h1{margin-bottom:var(--spacing-0);margin-top:var(--spacing-0);font-family:var(--font-heading-1-font-family);font-size:var(--font-heading-1-font-size);font-weight:var(--font-heading-1-font-weight);letter-spacing:var(--font-heading-1-letter-spacing);line-height:var(--font-heading-1-line-height)}.app-meta h1.app-domain{margin-right:var(--spacing-2);font-family:var(--font-heading-1-bold-font-family);font-size:var(--font-heading-1-bold-font-size);font-weight:var(--font-heading-1-bold-font-weight);letter-spacing:var(--font-heading-1-bold-letter-spacing);line-height:var(--font-heading-1-line-height)}.app-name{margin-right:var(--spacing-2)}.app-version{display:inline-block;font-family:var(--font-heading-6-font-family);font-size:var(--font-heading-6-font-size);font-weight:var(--font-heading-6-font-weight);letter-spacing:var(--font-heading-6-letter-spacing);line-height:var(--font-heading-6-line-height)}.app-state-wrapper{display:flex}.app-state{box-sizing:border-box;color:var(--color-palette-neutral-000);background-color:var(--color-palette-neutral-1000);border-radius:var(--radius-base);font-family:var(--font-body-2-font-family);font-size:var(--font-body-2-font-size);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--line-height-xs);padding:calc(var(--spacing-050) + var(--spacing-025)) var(--spacing-2);text-align:center;margin-right:var(--spacing-2);white-space:nowrap}.username{box-sizing:border-box;flex-basis:50%;font-family:var(--font-body-2-font-family);font-size:var(--font-body-2-font-size);font-weight:var(--font-body-2-font-weight);letter-spacing:var(--font-body-2-letter-spacing);line-height:var(--line-height-xs);padding:calc(var(--spacing-050) + var(--spacing-025)) var(--spacing-0);height:calc(var(--spacing-6) - var(--spacing-050))}.slotted-content{display:inline-flex;justify-content:center;flex-basis:100%}::slotted(*){--opacity-disabled:40%;--color-background-base-default:#101923;--color-background-base-header:#172635;--color-background-base-hover:#142435;--color-background-base-selected:#1c3f5e;--color-background-surface-default:#1b2d3e;--color-background-surface-header:#172635;--color-background-surface-hover:#1c3851;--color-background-surface-selected:#1c3f5e;--color-background-interactive-default:#4dacff;--color-background-interactive-hover:#92cbff;--color-text-primary:#ffffff;--color-text-secondary:#d4d8dd;--color-text-placeholder:#a4abb6;--color-text-inverse:#080c11;--color-text-interactive-default:#4dacff;--color-text-interactive-hover:#92cbff;--color-text-white:#ffffff;--color-text-black:#000000;--color-text-error:#ff3838;--color-border-interactive-default:#4dacff;--color-border-interactive-hover:#92cbff;--color-border-interactive-muted:#2b659b;--color-border-error:#ff3838;--color-border-focus-default:#da9ce7;--color-status-critical:#ff3838;--color-status-serious:#ffb302;--color-status-caution:#fce83a;--color-status-normal:#56f000;--color-status-standby:#2dccff;--color-status-off:#a4abb6;--color-classification-topsecretsci:#fce83a;--color-classification-topsecret:#ff8c00;--color-classification-secret:#c8102e;--color-classification-confidential:#0033a0;--color-classification-cui:#502b85;--color-classification-unclassified:#007a33;--border-width-focus-default:1px;--spacing-focus-default:0.125rem;--shadow-overlay:0px 4px 4px 1px rgba(0, 0, 0, 0.45)}";

const RuxGlobalStatusBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("header", { part: "container" }, index.h("slot", { name: "left-side" }, this.includeIcon && (index.h("rux-icon", { icon: `${this.menuIcon}`, size: "small", class: this.appState || this.username
        ? 'shifted-up'
        : '', exportparts: "icon" }))), index.h("slot", { name: "app-meta" }, (this.appDomain ||
      this.appName ||
      this.appVersion) && (index.h(AppMeta, { domain: this.appDomain, name: this.appName, version: this.appVersion }, index.h("div", { class: "app-state-wrapper" }, this.appState && (index.h("div", { class: "app-state", part: "app-state", style: {
        backgroundColor: `${TagColor[this.appStateColor]}`,
      } }, this.appState)), this.username && (index.h("div", { class: "username", part: "username" }, this.username)))))), index.h("div", { class: "slotted-content", part: "middle" }, index.h("slot", null)), index.h("slot", { name: "right-side" }))));
  }
};
RuxGlobalStatusBar.style = ruxGlobalStatusBarCss;

exports.rux_global_status_bar = RuxGlobalStatusBar;
