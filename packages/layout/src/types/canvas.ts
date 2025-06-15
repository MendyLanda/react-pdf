import * as P from '@rpdf/primitives';
import { SafeStyle, Style } from '@rpdf/stylesheet';
import { YogaNode } from 'yoga-layout/load';

import { Box, NodeProps, Origin } from './base';

interface CanvasProps extends NodeProps {
  paint: (
    painter: any,
    availableWidth?: number,
    availableHeight?: number,
  ) => null;
}

export type CanvasNode = {
  type: typeof P.Canvas;
  props: CanvasProps;
  style?: Style | Style[];
  box?: Box;
  origin?: Origin;
  yogaNode?: YogaNode;
  children?: never[];
};

export type SafeCanvasNode = Omit<CanvasNode, 'style'> & {
  style: SafeStyle;
};
