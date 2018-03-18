export interface IPanel {
  state: EStatePanel;
  style: string;
  togglePanel(): void;
  closePanel(): void;
  openPanel(): void;
}

export enum EStatePanel {
  open,
  close
}

export enum EPanel {
  left,
  right
}
