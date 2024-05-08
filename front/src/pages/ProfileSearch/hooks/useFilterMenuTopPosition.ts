import { RefObject, useEffect, useRef, useState } from 'react';

interface FilterMenuTopPositionReturn {
  filterMenuTopPosition: number;
  profileHeaderRef: RefObject<HTMLDivElement>;
}

import useHeaderBottomPosition from './useHeaderBottomPosition';

function useFilterMenuTopPosition(): FilterMenuTopPositionReturn {
  const [filterMenuTopPosition, setFilterMenuTopPosition] = useState<number>(0);
  const profileHeaderRef = useRef<HTMLDivElement>(null);
  const headerBottomPosition = useHeaderBottomPosition(profileHeaderRef);

  useEffect(() => {
    setFilterMenuTopPosition(headerBottomPosition);
  }, [headerBottomPosition]);

  return { filterMenuTopPosition, profileHeaderRef };
}

export default useFilterMenuTopPosition;
