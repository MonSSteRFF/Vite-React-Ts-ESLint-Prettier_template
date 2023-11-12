import React from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import AppRouter from '@/AppRouter';
const intervalMS = 60 * 60 * 1000;

const Main = () => {
  // replaced dynamically
  // replaced dyanmicaly
  const reloadSW = '__RELOAD_SW__';

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onNeedRefresh: () => {
      console.log('need refresh');
    },
    onOfflineReady: () => {
      console.log('offline ready');
    },
    onRegisteredSW(swUrl, r) {
      r &&
        setInterval(async () => {
          if (!(!r.installing && navigator)) return;

          if ('connection' in navigator && !navigator.onLine) return;

          const resp = await fetch(swUrl, {
            cache: 'no-store',
            headers: {
              cache: 'no-store',
              'cache-control': 'no-cache',
            },
          });

          if (resp?.status === 200) await r.update();
        }, intervalMS);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  return (
    <>
      <div className="ReloadPrompt-container">
        {(offlineReady || needRefresh) && (
          <div className="ReloadPrompt-toast">
            <div className="ReloadPrompt-message">
              {offlineReady ? (
                <span>App ready to work offline</span>
              ) : (
                <span>New content available, click on reload button to update.</span>
              )}
            </div>
            {needRefresh && (
              <button
                className="ReloadPrompt-toast-button"
                onClick={() => updateServiceWorker(true)}
              >
                Reload
              </button>
            )}
            <button className="ReloadPrompt-toast-button" onClick={() => close()}>
              Close
            </button>
          </div>
        )}
      </div>
      <AppRouter />
    </>
  );
};

export default Main;
