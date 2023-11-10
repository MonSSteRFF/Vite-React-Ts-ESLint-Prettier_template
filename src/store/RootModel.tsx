import React, { createContext, useContext } from 'react';

import CounterModel from '@/store/models/CounterModel';

class RootModel {
  counterModel!: CounterModel;

  constructor() {
    this.counterModel = new CounterModel();
  }
}

const rootModel = new RootModel();

// const refreshRootModel = () => {
//   rootModel = new RootModel();
// };

const RootModelContext = createContext<RootModel>(rootModel);

const RootModelContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <RootModelContext.Provider value={rootModel}>
      {props.children}
    </RootModelContext.Provider>
  );
};

function useRootModel<Result>(selector: (value: RootModel) => Result) {
  const store = useContext(RootModelContext);

  if (store === undefined || store === null) {
    throw new Error('Can not `useRootModel` outside of the `RootModelContextProvider`');
  }

  return selector(store);
}

export { RootModelContextProvider, useRootModel };
export default RootModel;
