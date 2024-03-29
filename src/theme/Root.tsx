import React, { useEffect } from 'react';
import 'overlayscrollbars/overlayscrollbars.css';
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
} from 'overlayscrollbars';

OverlayScrollbars.plugin([
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
]);

// Default implementation, that you can customize
export default function Root({ children }) {
  useEffect(() => {
    const theme =
      document.documentElement.getAttribute('data-theme') || 'light';
    const osInstance = OverlayScrollbars(document.body, {
      scrollbars: {
        theme: `os-theme-${theme === 'light' ? 'dark' : 'light'}`,
        dragScroll: true,
        clickScroll: false,
      },
    });

    return () => {
      osInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}
