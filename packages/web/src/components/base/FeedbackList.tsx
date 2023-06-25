import React from 'react';
import Feedback from './Feedback';
import { NotificationType } from '../../types/reducers';

type ErrorListProps = {
  notifications: NotificationType[],
  removeItem: Function,
  showRealError?: boolean,
};

function FeedbackList(props:ErrorListProps) {
  const { notifications, removeItem, showRealError } = props;
  return (
    <div data-cypress-id="notification-list" className="absolute right-0 top-20 z-[1500]" >
      {
        // eslint-disable-next-line max-len
        notifications.map((e:NotificationType) => <Feedback key={e.id} notification={e} showRealError={showRealError || false} remove={() => { removeItem(e.id); }} />)
      }
    </div>
  );
}

FeedbackList.defaultProps = {
  showRealError: false,
};

export default FeedbackList;
