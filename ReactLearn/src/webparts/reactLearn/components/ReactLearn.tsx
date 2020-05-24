import * as React from 'react';
import styles from './ReactLearn.module.scss';
import { IReactLearnProps } from './IReactLearnProps';
import { escape } from '@microsoft/sp-lodash-subset';
import App from './App';

export default class ReactLearn extends React.Component < IReactLearnProps, {} > {
  public render(): React.ReactElement<IReactLearnProps> {
    function Welcome(props){
      return  (
        <div className ={styles.reactLearn}>
          <p  className ={styles.title}>Hello, {props.name}</p>
        </div>
      )
    }

    return(
    <div>
      <div>
        <Welcome name={this.props.property2}/>
        <Welcome name={this.props.property1}/>
        <Welcome name={this.props.description}/>
        <Welcome name={this.props.title}/>
        <App title ={this.props.property1}/>
      </div>
    </div>
  );
  }
}
