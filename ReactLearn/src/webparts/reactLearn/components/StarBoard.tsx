import * as React from 'react';
import styles from './ReactLearn.module.scss';
import { IReactLearnProps } from './IReactLearnProps';
import { escape } from '@microsoft/sp-lodash-subset';
import * as lodash from '@microsoft/sp-lodash-subset'

export interface StarProps {
  id: number

}

export interface StarState {
  stars: number;
  availableNums : number[];
  candidateNums : number[];
}

export interface NumberProps {

number: number;
numberStatus: string;
}
export interface NumberState {

}
export interface StarDisplayProps {

  utils : { sum: any;
            range:any;
            random: any;
            randomSumIn : any
          };
}

export interface StarDisplayState {
  stars: number;

}

export default class StarBoard extends React.Component<StarProps,StarState> {

  constructor (props) {
    super(props);
    this.state = {
                  stars: this.utils.random(1,9),
                  availableNums: [1,2,3,4,5],
                  candidateNums:[2,3]
                  };
  }



  private colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  private utils = {
    // Sum an array
    sum: (arr:Array<number>) => arr.reduce((acc, curr) => acc + curr, 0),
    // create an array of numbers between min and max (edges included)
    range :( min:number, max: number, arr: number[])  => {
      while (min <= max) {

        arr.push(min++)
      }
      return arr
    },
    // pick a random number between min and max (edges included)
    random: (min:number, max:number) => min + Math.floor(Math.random() * (max - min + 1)),
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr :number[], max :number) => {
      const sets = [[]];
      const sums = [];

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = this.utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[this.utils.random(0, sums.length - 1)];
    },
  };

  public render():React.ReactElement<StarProps> {
   /*  const sum = this.utils.sum([1,2,3]);
    console.log( sum);
    const range = this.utils.range(1,10,[]);
    console.log(range);
    const random = this.utils.random(1,10);
    console.log(random); */
    const candidatesAreWrong = this.utils.sum(this.state.candidateNums) > this.state.stars;

    const randomSumIn = this.utils.random( 1,6);
    /* const numberStatus: string = (number) => {
      if(!this.state.availableNums.(number)) 
      {
        return 'used';
      }
    } */

    this.state.stars = this.utils.random(1,9);

  return(
    <div className ={styles.reactLearn}>
      <div className= {styles.game}>
      <div className={styles.help}>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className={styles.body}>

        <StarsDisplay utils = {this.utils} />
        {/* <div className={styles.right}>
          {this.utils.range(1,9,[]).map (number =>
           <PlayNumber key={number} number = {number}/>
          )}
        </div> */}
      </div>
      <div className={styles.timer}>Time Remaining: 10</div></div></div>

  );
 }
}


class PlayNumber extends React.Component <NumberProps,NumberState>{
  public render():React.ReactElement<NumberProps> {

    return(
      <button  className={styles.number} onClick ={() => console.log( 'Number clicked:' , this.props.number)}>{this.props.number} </button>

    );
  }
}

class StarsDisplay extends React.Component <StarDisplayProps, StarDisplayState>{

  constructor (props) {
    super(props);
    this.state = {
                  stars: this.props.utils.random(1,9)
                  };
  }

  public render():React.ReactElement<StarDisplayProps> {

    return(
      <div className={styles.left}>
          {this.props.utils.range(1, this.state.stars,[]).map (starId =>
          <div  key= {starId} className={styles.star}/>
          )}

        </div>

    );
}

}

