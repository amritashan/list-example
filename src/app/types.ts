export enum Statuses {
  NORMAL = 'normal',
  WARNING = 'warning',
  ERROR = 'error',
};

export interface ListItem {
  title: string;
  subtitle: string;
  status: Statuses;
}

export interface TextStyle {
  fontColor: string;
}

export type SupportedStyles = { [key in Statuses]: TextStyle };

export const supportedStyles: SupportedStyles = {
  normal: {
    fontColor: 'black',
  },
  warning: {
    fontColor: 'orange',
  },
  error: {
    fontColor: 'red',
  }
};
