import * as React from 'react';

import { IReactLearnProps } from './IReactLearnProps';
import { escape } from '@microsoft/sp-lodash-subset';
//import axios from 'axios';
import { HttpClient, HttpClientConfiguration } from '@microsoft/sp-http';


export interface FormProps{
  title?: string;
  httpClient ?: HttpClient;
  onSubmit : (any) => void
}


export default class Form  extends React.Component<FormProps, {}> {


  state ={userName : ''}

  private handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.github.com/users/${this.state.userName}`);
    const body = await response.json();
    this.props.onSubmit(body);
    this.setState({userName : ''});
  };


 private  onChanged = ( event) => {
    this.setState ( {userName : event.target.value})
    console.log (event.target.value);
  }

  public render():React.ReactElement<FormProps> {
  return(
    <form id ="submitform" onSubmit = {this.handleSubmit.bind(this)}>
      <input type = "text"
              id ="gitName"
              placeholder = "Githubusername"
              value = {this.state.userName}
              onChange = {this.onChanged}
              required >
      </input>
      <button>Add  card </button>
    </form>
  );
 }
}
