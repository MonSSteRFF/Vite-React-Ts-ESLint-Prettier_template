import { makeAutoObservable } from 'mobx';

class CounterModel {
  counter = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.counter++;
  };
  decrease = () => {
    this.counter--;
  };
}

export default CounterModel;
