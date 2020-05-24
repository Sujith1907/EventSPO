import * as React from 'react';

import { IReactLearnProps } from './IReactLearnProps';
import { escape } from '@microsoft/sp-lodash-subset';


export interface CardProps {
  name: string;
  avatar_url : string;
  company: string;
  id: number

}

export interface CardListProps {
  profiles: CardProps[]
}


export default class CardList extends React.Component<CardListProps,{}> {
 public render():React.ReactElement<CardListProps> {
  const items = this.props.profiles;

  return(
    <div >
      {console.log (items)};
      {/* when we use spread operator, the values automatically becomes props to the component */}
     {items.map ( profile => <Card key ={profile.id} {...profile}></Card>)}
     <Card {...this.props[0]} />
    </div>
  );
 }
}

class Card extends React.Component <CardProps, {} > {
  public render():React.ReactElement<CardProps> {
    const profile = this.props;
    return(
      <div >
        <img src={profile.avatar_url} style ={{width :'150px'}} />
        <div >
         <div style = {{fontSize: '125%', display: 'inline-block'}}>{profile.name}</div>
         <div >{profile.company}</div>

        </div>
      </div>
    );
}
}
