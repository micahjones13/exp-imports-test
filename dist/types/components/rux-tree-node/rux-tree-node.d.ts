import { EventEmitter } from '../../stencil-public-runtime';
export declare class RuxTreeNode {
  private componentId;
  el: HTMLRuxTreeNodeElement;
  children: Array<HTMLRuxTreeNodeElement>;
  hasPrefix: boolean;
  hasSuffix: boolean;
  /**
   * Sets the expanded state
   */
  expanded: boolean;
  /**
   * Sets the selected state
   */
  selected: boolean;
  /**
   * Fires when the user selects a tree node and emits the node's id on the event.detail.
   */
  ruxTreeNodeSelected: EventEmitter<string>;
  /**
   * Fires when the user expands a tree node and emits the node's id on the event.detail.
   */
  ruxTreeNodeExpanded: EventEmitter<string>;
  /**
   * Fires when the user collapses a tree node and emits the node's id on the event.detail.
   */
  ruxTreeNodeCollapsed: EventEmitter<string>;
  handleExpandedChange(newValue: boolean): void;
  handleSelectedChange(newValue: boolean): void;
  handleKeyDown(ev: KeyboardEvent): true | undefined;
  connectedCallback(): void;
  componentWillLoad(): void;
  get hasChildren(): boolean;
  private _checkForPrefixAndSuffix;
  /**
   * Sets the expanded state
   * @param value
   */
  setExpanded(value: boolean): Promise<void>;
  /**
   * Sets the selected state
   * @param value
   */
  setSelected(value: boolean): Promise<void>;
  private _handleSlotChange;
  /**
   * Manually set the aria-level attribute.
   * Tree is responsible for setting the root node levels.
   */
  private _setAriaLevel;
  private _handleArrowClick;
  private _handleTreeNodeClick;
  private _expandNextNode;
  private _focusItem;
  private _collapseParent;
  private _focusNext;
  private _getVisibleNodes;
  render(): any;
}
