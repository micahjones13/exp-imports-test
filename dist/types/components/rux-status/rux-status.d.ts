import { Status } from '../../common/commonTypes.module';
export declare class RuxStatus {
  /**
   * Sets the status symbol, valid options are critical, serious, caution, normal, standby and off
   */
  status?: Status;
  el: HTMLRuxStatusElement;
  validateStatus(newValue: string): void;
  connectedCallback(): void;
  render(): any;
}
