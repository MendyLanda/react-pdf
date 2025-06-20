import * as P from '@rpdf/primitives';
import { SafeStyle, Style } from '@rpdf/stylesheet';

import {
  SVGPresentationAttributes,
  SafeSVGPresentationAttributes,
} from './base';

interface PathProps extends SVGPresentationAttributes {
  style?: SVGPresentationAttributes;
  d: string;
}

interface SafePathProps extends SafeSVGPresentationAttributes {
  style?: SafeSVGPresentationAttributes;
  d: string;
}

export type PathNode = {
  type: typeof P.Path;
  props: PathProps;
  style?: Style | Style[];
  box?: never;
  origin?: never;
  yogaNode?: never;
  children?: never[];
};

export type SafePathNode = Omit<PathNode, 'style' | 'props'> & {
  style: SafeStyle;
  props: SafePathProps;
};
