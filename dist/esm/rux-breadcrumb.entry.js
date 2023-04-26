import { r as registerInstance, g as getElement } from './index-a1205123.js';

const ruxBreadcrumbCss = "::slotted(rux-breadcrumb-item){margin-inline-end:var(--spacing-2)}ol{list-style:none;padding:0;margin:0;display:flex;align-items:center;gap:var(--spacing-2);flex-wrap:wrap}ol li{display:flex;align-items:center}ol li:after{content:\"\";display:inline-block;background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.29 6.70978C8.9 7.09978 8.9 7.72978 9.29 8.11978L13.17 11.9998L9.29 15.8798C8.9 16.2698 8.9 16.8998 9.29 17.2898C9.68 17.6798 10.31 17.6798 10.7 17.2898L15.29 12.6998C15.68 12.3098 15.68 11.6798 15.29 11.2898L10.7 6.69978C10.32 6.31978 9.68 6.31978 9.29 6.70978Z' fill='%23A4ABB6'%3E%3C/path%3E%3C/svg%3E\");background-position:center center;background-repeat:no-repeat;background-size:100%;width:var(--spacing-4);height:var(--spacing-4);padding-inline-start:var(--spacing-2)}ol li:last-child::after{display:none}";

const RuxBreadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // observe changes to LightDOM children
  componentWillLoad() {
    new MutationObserver(() => this._updateShadowRoot()).observe(this.el, {
      childList: true,
    });
    this._updateShadowRoot();
  }
  _updateShadowRoot() {
    const navEl = document.createElement('nav');
    navEl.setAttribute('part', 'container');
    navEl.setAttribute('aria-label', 'Breadcrumb');
    const listEl = document.createElement('ol');
    listEl.setAttribute('part', 'base');
    let slotIndex = 0;
    const children = Array.from(this.el.children);
    for (const childEl of children) {
      const listItemEl = document.createElement('li');
      const slotEl = document.createElement('slot');
      childEl.slot = slotEl.name = `slot-${++slotIndex}`;
      listItemEl.append(slotEl);
      listEl.append(listItemEl);
    }
    navEl.append(listEl);
    if (this.el.shadowRoot) {
      const existingNavEl = this.el.shadowRoot.querySelector('nav');
      if (existingNavEl) {
        existingNavEl.replaceWith(navEl);
      }
      else {
        this.el.shadowRoot.append(navEl);
      }
    }
  }
  get el() { return getElement(this); }
};
RuxBreadcrumb.style = ruxBreadcrumbCss;

export { RuxBreadcrumb as rux_breadcrumb };
