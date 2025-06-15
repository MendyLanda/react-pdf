import getPadding from '../node/getPadding';
import { SafePageNode } from '../types';

const getContentArea = (page: SafePageNode) => {
  const height = page.style?.height as number;
  const { paddingTop, paddingBottom } = getPadding(page as any);

  return {
    contentArea: height - (paddingBottom as number) - (paddingTop as number),
    paddingTop: paddingTop as number,
    paddingBottom: paddingBottom as number,
  };
};

export default getContentArea;
