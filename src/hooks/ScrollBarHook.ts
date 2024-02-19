import type { RefObject } from "react";
import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

interface ScrollbarConfig {
  overflowBehavior: {
    x?: string;
    y?: string;
  };
  [key: string]: any;
}

interface UseScrollbarProps {
  root: RefObject<HTMLElement>;
  hasScroll: boolean;
}

type ScrollbarsType = OverlayScrollbars | null;

type UseScrollbarReturnType = () => void;

const config: ScrollbarConfig = {
  overflowBehavior: {
    y: "scroll",
  },
};

export const useScrollbar = ({ root, hasScroll }: UseScrollbarProps): UseScrollbarReturnType => {
  useEffect(() => {
    let scrollbars: ScrollbarsType;

    if (root.current && hasScroll) {
      scrollbars = (OverlayScrollbars as any)(root.current, config);
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root, hasScroll]);

  return () => { };
};
