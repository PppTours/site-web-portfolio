import { useEffect, useState } from 'react';

/**
 * Hook to know when the window is resizing.
 * @returns {boolean} Whether the window is resizing.
 */
export default function useWindowResizing(): boolean {
  const [windowResizing, setWindowResizing] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    /**
     * Handle window resizing.
     */
    function handleWindowResizing(): void {
      clearTimeout(timeout);
      setWindowResizing(true);
      timeout = setTimeout(() => setWindowResizing(false), 200);
    }

    window.addEventListener('resize', handleWindowResizing);

    return () => window.removeEventListener('resize', handleWindowResizing);
  }, []);

  return windowResizing;
}
