import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home';

import styles from './AppRouter.module.scss';

const AppRouter = () => {
  return (
    <>
      <header></header>
      <main className={styles.main}>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};

export default AppRouter;
