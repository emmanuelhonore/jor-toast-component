import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    // cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback]);
}

export default useEscapeKey;