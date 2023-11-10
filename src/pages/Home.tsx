import { observer } from 'mobx-react';
import React from 'react';

import { useRootModel } from '@/store/RootModel';

import styles from './Home.module.scss';

const Home = observer(() => {
  const { counterModel } = useRootModel((root) => ({ counterModel: root.counterModel }));

  return (
    <>
      <p className={styles.counter}>counter: {counterModel.counter}</p>
      <button className={styles.button} onClick={counterModel.increase}>
        increase
      </button>
      <button className={styles.button} onClick={counterModel.decrease}>
        decrease
      </button>
    </>
  );
});

export default Home;
