import { useEffect, useState } from 'react';

export default function useWindowResizing(updateDelayInMilliseconds = 200): boolean {
  const [isWindowResizing, setIsWindowResizing] = useState<boolean>(false);

  useEffect(() => {
    let updateTimeout: NodeJS.Timeout | undefined;

    function onWindowResizingStartOrContinuation(): void {
      clearTimeout(updateTimeout);
      setIsWindowResizing(true);
      updateTimeout = setTimeout(onWindowResizingEnd, updateDelayInMilliseconds);
    }

    function onWindowResizingEnd(): void {
      setIsWindowResizing(false);
    }

    window.addEventListener('resize', onWindowResizingStartOrContinuation);

    return () => window.removeEventListener('resize', onWindowResizingStartOrContinuation);
  }, [updateDelayInMilliseconds]);

  return isWindowResizing;
}
