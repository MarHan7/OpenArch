import { useEffect, useState } from "react";

const getInitialValue = (breakpoint) => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(`(max-width: ${breakpoint}px)`).matches;
};

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(() => getInitialValue(breakpoint));

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
