import { Placement } from '@floating-ui/dom';
export declare type Status = 'off' | 'standby' | 'normal' | 'caution' | 'serious' | 'critical';
export declare type Classification = 'cui' | 'controlled' | 'confidential' | 'secret' | 'top-secret' | 'top-secret-sci' | 'unclassified';
export declare type StatusTypes = {
  [id: string]: boolean;
};
export declare type StatusTags = 'pass' | 'fail' | 'unknown';
export declare enum StatusSymbol {
  CRITICAL = "critical",
  SERIOUS = "serious",
  CAUTION = "caution",
  NORMAL = "normal",
  STANDBY = "standby",
  OFF = "off"
}
export declare type ExtendedPlacement = Placement | 'auto';
