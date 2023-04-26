import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @slot (default) - Used for instances of rux-tab
 */
export declare class RuxTabs {
  el: HTMLRuxTabsElement;
  /**
   *  Holds all `<rux-tab-panel>` components based on the event emitted from the `<rux-tab-panels>` component.
   */
  _panels: Array<HTMLRuxTabPanelElement>;
  /**
   *  Holds all `<rux-tab>` components that are children of `<rux-tabs>`.
   */
  _tabs: Array<HTMLRuxTabElement>;
  /**
   * If passed or set to true, displays the tabs in a smaller style, suitable for limited-space uses.
   */
  small?: boolean;
  handleListen(e: CustomEvent): void;
  handleSmallChange(): void;
  onKeydown(e: any): void;
  /**
   * Fires whenever a new tab is selected, and emits the selected tab on the event.detail.
   */
  ruxSelected: EventEmitter;
  connectedCallback(): void;
  private _addTabs;
  private _registerPanels;
  private _onPress;
  private _onClick;
  private _reset;
  private _setTab;
  render(): any;
}
