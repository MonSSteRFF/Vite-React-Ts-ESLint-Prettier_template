import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

class CounterModel {
  counter = 0;

  constructor() {
    makePersistable(this, {
      name: 'CounterModel',
      properties: ['counter'],
      storage: localStorage,
    });
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
