import { useEffect } from 'react';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keydown';

// Hook to handle Escape key press
function useEscapeKey(callback: () => void) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === KEY_NAME_ESC) {
        callback();
      }
    };
    window.addEventListener(KEY_EVENT_TYPE, handler);
    return () => window.removeEventListener(KEY_EVENT_TYPE, handler);
  }, [callback]);
}

export default useEscapeKey;