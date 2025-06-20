import { parseFloat } from '@rpdf/fns';

import parseViewBox from './parseViewbox';
import { SafeSvgNode } from '../types';

const getContainer = (node: SafeSvgNode) => {
  const viewbox = parseViewBox(node.props.viewBox);

  if (viewbox) {
    return { width: viewbox.maxX, height: viewbox.maxY };
  }

  if (node.props.width && node.props.height) {
    return {
      width: parseFloat(node.props.width),
      height: parseFloat(node.props.height),
    };
  }

  return { width: 0, height: 0 };
};

export default getContainer;
