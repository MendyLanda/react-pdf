import * as P from '@rpdf/primitives';
import { SafeStyle, Style } from '@rpdf/stylesheet';

import {
  SVGPresentationAttributes,
  SafeSVGPresentationAttributes,
} from './base';

interface PolylineProps extends SVGPresentationAttributes {
  style?: SVGPresentationAttributes;
  points: string;
}

interface SafePolylineProps extends SafeSVGPresentationAttributes {
  style?: SafeSVGPresentationAttributes;
  points: string;
}

export type PolylineNode = {
  type: typeof P.Polyline;
  props: PolylineProps;
  style?: Style | Style[];
  box?: never;
  origin?: never;
  yogaNode?: never;
  children?: never[];
};

export type SafePolylineNode = Omit<PolylineNode, 'style' | 'props'> & {
  style: SafeStyle;
  props: SafePolylineProps;
};
