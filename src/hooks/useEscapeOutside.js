import { useEffect } from 'react';

function useEscapeOutside(ref, callback) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };

    function onEscape(event) {
      if (event.keyCode === 27) {
        callback(event);
      }
    }

    document.addEventListener('keydown', onEscape);
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('keydown', onEscape);
      document.removeEventListener('mousedown', listener);
    };
  }, [callback, ref]);
}

export default useEscapeOutside;
