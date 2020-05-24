import * as React from 'react';

import { IReactLearnProps } from './IReactLearnProps';
import { escape } from '@microsoft/sp-lodash-subset';
import CardList from './Card';
import Form from './Form';
import { CardProps } from './Card';
import StarBoard from './StarBoard';



export interface AppProps{
  title: string;
}

export interface AppState{
  profiles: CardProps[]
}
export default class App extends React.Component<AppProps, AppState> {

  constructor (props) {
    super(props);

    this.state = {
      profiles: []
    };
  }
 private addNewProfile = (profileData) => {
   console.log(profileData);
   this.setState(prevState => ({
     profiles:[...prevState.profiles, profileData]
   }))
 }

 public render():React.ReactElement<AppProps> {

  return(
    <div>

      <Form  onSubmit = {this.addNewProfile}/>
      <CardList  profiles={this.state.profiles}/>
      <StarBoard id ={5}/>
    </div>
  );
 }
}


