/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { useMemo } from "react";
import { TResolutionMode } from "types";
import { useWindowDimensions } from "./useWindowDimensions";

const isLow = (width: number) => width <= 768;
const isMedium = (width: number) => width > 768 && width <= 1080;

export const useResolution = () => {
  const { width } = useWindowDimensions();
  const resolution: TResolutionMode = useMemo(() => {
    if (isLow(width)) {
      return "low";
    } else if (isMedium(width)) {
      return "medium";
    }
    return "high";
  }, [width]);
  return resolution;
};
