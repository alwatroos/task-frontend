/**
 * Copyright alwatroos
 * https://github.com/alwatroos
 */
import { useWindowDimensions } from "hooks";
import { useEffect, useState } from "react";
import { TResolutionMode } from "types";

interface IResolutionProps {
  children?: any;
  mode?: TResolutionMode | TResolutionMode[];
}

interface IResolutionCondition {
  [key: string]: (width: number) => boolean;
}

const RESOLUTION_CONDITIONS: IResolutionCondition = {
  low: (width: number) => width <= 768,
  medium: (width: number) => width > 768 && width <= 1080,
  high: (width: number) => width > 1080,
};

const Resolution = ({
  mode = ["low", "medium", "high"],
  children = null,
}: IResolutionProps) => {
  const [visible, setVisible] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (Array.isArray(mode)) {
      const found = mode.find((key) => RESOLUTION_CONDITIONS[key](width));
      setVisible(!!found && RESOLUTION_CONDITIONS[found](width));
    } else {
      setVisible(!!mode && RESOLUTION_CONDITIONS[mode](width));
    }
  }, [width, mode]);

  return visible ? children : null;
};

export default Resolution;
