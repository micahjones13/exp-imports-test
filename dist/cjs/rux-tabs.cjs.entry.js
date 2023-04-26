'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-bc114c83.js');

const ruxTabsCss = ":host{box-sizing:border-box;display:flex;justify-content:flex-start;height:100%;width:auto;margin:0;padding:0;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}:host(:not(:focus-within)){contain:content;}:host([hidden]){display:none}";

const RuxTabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ruxSelected = index.createEvent(this, "ruxselected", 7);
    /**
     *  Holds all `<rux-tab-panel>` components based on the event emitted from the `<rux-tab-panels>` component.
     */
    this._panels = [];
    /**
     *  Holds all `<rux-tab>` components that are children of `<rux-tabs>`.
     */
    this._tabs = [];
  }
  handleListen(e) {
    const sourcePanel = e.target;
    const sourcePanelLabelId = sourcePanel.getAttribute('aria-labelledby');
    /**
     * The registerPanel event will be emitted from any Tab Panel,
     * not just the Panels associated with this component.
     * In scenarios where there could be multiple tab panels,
     * we want to filter out and only add the panels that belong
     * to this specific Tab group.
     */
    if (sourcePanelLabelId === this.el.id) {
      this._registerPanels(e);
    }
  }
  handleSmallChange() {
    //determine whether or not to pass small attr to child tabs
    if (this.small) {
      this._tabs.forEach((tab) => tab.setAttribute('small', ''));
    }
    else {
      this._tabs.forEach((tab) => {
        if (tab.hasAttribute('small')) {
          tab.removeAttribute('small');
        }
      });
    }
  }
  onKeydown(e) {
    var _a;
    // Get all tabs inside of the tab group and then
    // filter out disabled tabs since we need to skip those
    const tabs = this._tabs.filter((tab) => !tab.disabled);
    // Only move the tab if the current focus is in the tab group
    if (e.target && tabs.includes(e.target)) {
      const index = tabs.findIndex((tab) => tab === e.target);
      let next;
      // If hitting arrow down or arrow right, move to the next tab
      // If we're on the last tab, move to the first tab
      if (['ArrowDown', 'ArrowRight'].includes(e.code)) {
        next = index === tabs.length - 1 ? tabs[0] : tabs[index + 1];
      }
      // If hitting arrow up or arrow left, move to the previous tab
      // If we're on the first tab, move to the last tab
      if (['ArrowUp', 'ArrowLeft'].includes(e.code)) {
        next = index === 0 ? tabs[tabs.length - 1] : tabs[index - 1];
      }
      if (next && tabs.includes(next)) {
        const nextFocus = (_a = next.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.rux-tab');
        nextFocus.focus();
      }
    }
  }
  connectedCallback() {
    this._addTabs();
  }
  _addTabs() {
    this._tabs = Array.from(this.el.querySelectorAll('rux-tab'));
  }
  _registerPanels(e) {
    this._panels = [];
    e.detail.forEach((panel) => {
      this._panels.push(panel);
    });
    // run addTabs if this event was heard.
    this._addTabs();
    // Default to first tab if none are selected
    const selectedTab = this._tabs.find((tab) => tab.selected) || this._tabs[0];
    this._setTab(selectedTab);
  }
  _onPress(e) {
    e.key === 'Enter' ? this._onClick(e) : null;
  }
  _onClick(e) {
    const target = e.target;
    //get the tab in case complex html is nested inside rux-tab
    const tab = target.closest('rux-tab');
    this.ruxSelected.emit(tab);
    if (tab.getAttribute('disabled') === null) {
      this._setTab(tab);
    }
  }
  _reset() {
    // hide everything
    // Only reset the tabs and panels that are part of this instance of rux-tabs
    this._tabs.forEach((tab) => {
      if (tab.parentElement === this.el)
        tab.selected = false;
    });
    this._panels.forEach((panel) => {
      var _a;
      if (((_a = panel.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute('aria-labelledby')) ===
        this.el.id)
        panel.classList.add('hidden');
    });
  }
  _setTab(selectedTab) {
    this._reset();
    // find the panel whose aria-labeldby attribute matches the tab’s id
    const selectedPanel = this._panels.find((panel) => panel.getAttribute('aria-labelledby') ===
      selectedTab.getAttribute('id'));
    if (selectedTab)
      selectedTab.selected = true;
    if (selectedPanel)
      selectedPanel.classList.remove('hidden');
  }
  render() {
    return (index.h(index.Host, { onClick: (e) => this._onClick(e), onKeyPress: (e) => this._onPress(e), role: "tablist" }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "small": ["handleSmallChange"]
  }; }
};
RuxTabs.style = ruxTabsCss;

exports.rux_tabs = RuxTabs;
