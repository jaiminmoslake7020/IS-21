export type LoadingSlice = {
  canvasLoading: boolean,
  loadingMsg: undefined | string,
  progressPercentage: undefined | number,
  loadingLocation: undefined | string,
};

export interface NotificationType {
  id: string,
  type: 'warning' | 'error' | 'info' | 'success',
  title: string,
  message: string,
  caughtError?: any,
  statusCode?: number,
  time?:number,
}

export interface ErrorType extends NotificationType {
  type: 'error',
}

export interface WarningType extends NotificationType {
  type: 'warning',
}

export interface InfoType extends NotificationType {
  type: 'info',
}

export interface SuccessType extends NotificationType {
  type: 'success',
}

export type FeedbackSlice = {
  notifications: NotificationType[],
};
