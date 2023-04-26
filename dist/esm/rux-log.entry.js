import { r as registerInstance, h, H as Host } from './index-a1205123.js';

const ruxLogCss = ":host{display:block;overflow:hidden}:host([hidden]){display:none}.rux-log{border:1px solid var(--log-color-border)}.rux-log__header-event-cell{width:80%}.header-event-container{display:flex;align-items:center}.rux-log__filter{margin-left:auto;width:170px}rux-datetime{min-width:calc(var(--spacing-20) - var(--spacing-050));display:inline-block}rux-status{margin:var(--spacing-0) var(--spacing-1)}rux-table-header-cell{width:1%;border-width:1px;border-style:solid;border-color:var(--color-background-base-default);height:calc( var(--spacing-10) + var(--spacing-1) - 2px )}rux-table-cell{height:calc( var(--spacing-8) - var(--spacing-050) - 1px )}.rux-log__notification{width:2000%;align-content:center;color:var(--color-text-inverse);background-color:var(--color-background-interactive-default);padding:var(--spacing-2)}";

const RuxLog = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * An array of objects to display as log
     */
    this.data = [];
    /**
     * Accepts [IANA timezone string format](https://www.iana.org/time-zones) such as `America/Los_Angeles`. Default timezone is `UTC`. See [`toLocaleString()` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString#Parameters) for more details.
     */
    this.timezone = 'UTC';
  }
  _setFilter(e) {
    this.filter = e.target.value;
  }
  get filteredData() {
    if (this.filter) {
      const filter = this.filter;
      return this.data.filter((row) => row.message.includes(filter));
    }
    else {
      return this.data;
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "rux-log" }, h("slot", { name: "table" }, h("rux-table", null, h("slot", { name: "table-header" }, h("rux-table-header", { class: "relative" }, h("slot", { name: "table-header-row" }, h("rux-table-header-row", null, h("rux-table-header-cell", null, "Time"), h("rux-table-header-cell", null), h("rux-table-header-cell", { class: "rux-log__header-event-cell" }, h("div", { class: "header-event-container" }, "Event", h("rux-input", { size: "small", class: "rux-log__filter", type: "search", placeholder: "Search...", onRuxinput: (event) => this._setFilter(event) }))))))), this.filter && (h("div", { class: "rux-log__notification", part: "log-notification" }, "A filter with ", h("b", null, this.filter), " is enabled.", ' ', this.data.length -
      this.filteredData.length, ' ', "of ", this.data.length, " records are currently hidden.")), h("slot", { name: "table-body" }, h("rux-table-body", null, this.filteredData.map((row) => (h("rux-table-row", null, h("rux-table-cell", null, h("rux-datetime", { hour: "2-digit", "time-zone": this.timezone, minute: "2-digit", second: "2-digit", date: row.timestamp })), h("rux-table-cell", null, h("rux-status", { status: row.status })), h("rux-table-cell", null, row.message)))))))))));
  }
};
RuxLog.style = ruxLogCss;

export { RuxLog as rux_log };
