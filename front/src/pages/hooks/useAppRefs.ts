import { RefObject, useRef } from 'react';

interface IAppRefs {
  /**
   * Header ref.
   */
  header: RefObject<HTMLDivElement>;

  /**
   * Body ref.
   */
  body: RefObject<HTMLDivElement>;

  /**
   * Filter menu ref.
   */
  filterMenu: RefObject<HTMLDivElement>;
}

/**
 * Hook to get app refs.
 * @returns {IAppRefs} App refs.
 */
export default function useAppRefs(): IAppRefs {
  return {
    header: useRef<HTMLDivElement>(null),
    body: useRef<HTMLDivElement>(null),
    filterMenu: useRef<HTMLDivElement>(null)
  };
}
