import * as React from 'react';
import styles from '../EventSpo.module.scss';
import { IEventSpoProps } from './IEventSpoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Chrome from '../statelessComponents/chrome/chrome';

export default class EventSpo extends React.Component < IEventSpoProps, {} > {
  public render(): React.ReactElement<IEventSpoProps> {
    return(
      <Chrome>
      Welcome to the event hub
    </Chrome>
    );
  }
}
