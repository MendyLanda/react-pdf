import * as P from '@rpdf/primitives';
import { SafeNode } from '@rpdf/layout';

import renderSvg from './renderSvg';
import renderText from './renderText';
import renderPage from './renderPage';
import renderNote from './renderNote';
import renderImage from './renderImage';
import renderDebug from './renderDebug';
import renderCanvas from './renderCanvas';
import renderBorders from './renderBorders';
import renderBackground from './renderBackground';
import setLink from '../operations/setLink';
import clipNode from '../operations/clipNode';
import transform from '../operations/transform';
import setDestination from '../operations/setDestination';
import renderTextInput from './renderTextInput';
import renderSelect from './renderSelect';
import renderFieldSet, { cleanUpFieldSet } from './renderFieldSet';
import renderList from './renderList';
import renderCheckbox from './renderCheckbox';
import { Context, RenderOptions } from '../types';

type Primitives = (typeof P)[keyof typeof P];

const isRecursiveNode = (node: SafeNode) =>
  node.type !== P.Text && node.type !== P.Svg;

const renderChildren = (
  ctx: Context,
  node: SafeNode,
  options: RenderOptions,
) => {
  ctx.save();

  if (node.box) {
    ctx.translate(node.box.left, node.box.top);
  }

  const children = node.children || [];

  const renderChild = (child: SafeNode) => renderNode(ctx, child, options);

  children.forEach(renderChild);

  ctx.restore();
};

const renderFns: Partial<Record<Primitives, any>> = {
  [P.Text]: renderText,
  [P.Note]: renderNote,
  [P.Image]: renderImage,
  [P.FieldSet]: renderFieldSet,
  [P.TextInput]: renderTextInput,
  [P.Select]: renderSelect,
  [P.Checkbox]: renderCheckbox,
  [P.List]: renderList,
  [P.Canvas]: renderCanvas,
  [P.Svg]: renderSvg,
  [P.Link]: setLink,
};

const cleanUpFns: Partial<Record<Primitives, any>> = {
  [P.FieldSet]: cleanUpFieldSet,
};

const renderNode = (ctx: Context, node: SafeNode, options: RenderOptions) => {
  const overflowHidden = node.style?.overflow === 'hidden';
  const shouldRenderChildren = isRecursiveNode(node);

  if (node.type === P.Page) renderPage(ctx, node);

  ctx.save();

  if (overflowHidden) clipNode(ctx, node);

  transform(ctx, node);
  renderBackground(ctx, node);
  renderBorders(ctx, node);

  const renderFn = renderFns[node.type];

  if (renderFn) renderFn(ctx, node, options);

  if (shouldRenderChildren) renderChildren(ctx, node, options);

  const cleanUpFn = cleanUpFns[node.type];

  if (cleanUpFn) cleanUpFn(ctx, node, options);

  setDestination(ctx, node);
  renderDebug(ctx, node);

  ctx.restore();
};

export default renderNode;
