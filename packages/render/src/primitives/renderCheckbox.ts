import { SafeCheckboxNode } from '@rpdf/layout';
import { Context, RenderOptions } from '../types';
import { parseCheckboxOptions } from '../utils/parseFormOptions';

const renderCheckbox = (
  ctx: Context,
  node: SafeCheckboxNode,
  options: RenderOptions,
) => {
  if (!node.box) return;

  const { top, left, width, height } = node.box;

  // Element's name
  const name = node.props?.name || '';
  const fieldSetOptions = options.fieldSets?.at(0);

  if (!ctx._root.data.AcroForm) {
    ctx.initForm();
  }

  ctx.formCheckbox(
    name,
    left,
    top,
    width,
    height,
    parseCheckboxOptions(ctx, node, fieldSetOptions),
  );
};

export default renderCheckbox;
