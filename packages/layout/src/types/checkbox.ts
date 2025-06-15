import * as P from '@rpdf/primitives';
import { SafeStyle, Style } from '@rpdf/stylesheet';
import { YogaNode } from 'yoga-layout/load';

import { Box, FormCommonProps, Origin } from './base';

interface CheckboxProps extends FormCommonProps {
  backgroundColor?: string;
  borderColor?: string;
  checked?: boolean;
  onState?: string;
  offState?: string;
  xMark?: boolean;
}

export type CheckboxNode = {
  type: typeof P.Checkbox;
  props: CheckboxProps;
  style?: Style | Style[];
  box?: Box;
  origin?: Origin;
  yogaNode?: YogaNode;
  children?: never[];
};

export type SafeCheckboxNode = Omit<CheckboxNode, 'style'> & {
  style: SafeStyle;
};
