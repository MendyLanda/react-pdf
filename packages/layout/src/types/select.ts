import * as P from '@rpdf/primitives';
import { SafeStyle, Style } from '@rpdf/stylesheet';
import { YogaNode } from 'yoga-layout/load';

import { Box, FormCommonProps, Origin } from './base';

interface SelectAndListProps extends FormCommonProps {
  sort?: boolean;
  edit?: boolean;
  multiSelect?: boolean;
  noSpell?: boolean;
  select?: string[];
}

export type SelectNode = {
  type: typeof P.Select;
  props: SelectAndListProps;
  style?: Style | Style[];
  box?: Box;
  origin?: Origin;
  yogaNode?: never;
  children?: never[];
};

export type SafeSelectNode = Omit<SelectNode, 'style'> & {
  style: SafeStyle;
};

export type ListNode = {
  type: typeof P.List;
  props: SelectAndListProps;
  style?: Style | Style[];
  box?: Box;
  origin?: Origin;
  yogaNode?: YogaNode;
  children?: never[];
};

export type SafeListNode = Omit<ListNode, 'style'> & {
  style: SafeStyle;
};
