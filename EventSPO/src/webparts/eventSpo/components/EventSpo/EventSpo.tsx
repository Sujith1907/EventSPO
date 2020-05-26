import * as React from 'react';
import styles from '../EventSpo.module.scss';
import { IEventSpoProps } from './IEventSpoProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Chrome from '../statelessComponents/chrome/chrome';
import EventInfo from '../EventInfo/EventInfo';
import Members from '../Members/Members';
import {HashRouter, Switch , Route} from 'react-router-dom';

export default class EventSpo extends React.Component < IEventSpoProps, {} > {
  public render(): React.ReactElement<IEventSpoProps> {
    return(
      <HashRouter>
        <Chrome>
        <Switch>
              <Route path="/members" component={Members} />
              <Route path="/" component={EventInfo} exact />
              <Route render={() => <h1>Page Not found</h1>} />
          </Switch>
        </Chrome>
      </HashRouter>
    );
  }
}
