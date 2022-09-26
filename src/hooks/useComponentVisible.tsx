import { useEffect, useRef, useState } from 'react';

function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible);
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (ref.current && !ref?.current?.contains(target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isComponentVisible]);

  return { ref, isComponentVisible, setIsComponentVisible };
}

export default useComponentVisible;
