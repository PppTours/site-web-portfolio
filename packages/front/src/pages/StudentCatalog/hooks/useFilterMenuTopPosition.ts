import { RefObject, useEffect, useRef, useState } from 'react';

interface FilterMenuTopPositionReturn {
  filterMenuTopPosition: number;
  studentHeaderRef: RefObject<HTMLDivElement>;
}

import useHeaderBottomPosition from './useHeaderBottomPosition';

function useFilterMenuTopPosition(): FilterMenuTopPositionReturn {
  const [filterMenuTopPosition, setFilterMenuTopPosition] = useState<number>(0);
  const studentHeaderRef = useRef<HTMLDivElement>(null);
  const headerBottomPosition = useHeaderBottomPosition(studentHeaderRef);

  useEffect(() => {
    setFilterMenuTopPosition(headerBottomPosition);
  }, [headerBottomPosition]);

  return { filterMenuTopPosition, studentHeaderRef };
}

export default useFilterMenuTopPosition;
