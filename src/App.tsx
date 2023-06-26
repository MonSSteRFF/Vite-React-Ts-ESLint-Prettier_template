import React from 'react';
import { Route, Routes } from 'react-router-dom';

import useRoutes from './hooks/useRoutes';

function App() {
  const { allInfoRoutes } = useRoutes();

  return (
    <>
      <header></header>
      <main>
        <Routes>
          {allInfoRoutes.map((page, pageIndex) => (
            <Route
              id={page.name}
              key={pageIndex}
              element={page.element}
              path={page.path}
              index={page.path === '/'}
            />
          ))}
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
