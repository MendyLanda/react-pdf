import { isNil } from '@rpdf/fns';

import omit from '../run/omit';
import flatten from '../run/flatten';
import empty from '../attributedString/empty';
import { AttributedString } from '../types';
import type { Engines } from '../engines';

/**
 *
 * @param attributedString
 * @returns Attributed string without font
 */
const omitFont = (attributedString: AttributedString): AttributedString => {
  const runs = attributedString.runs.map((run) => omit('font', run));
  return Object.assign({}, attributedString, { runs });
};

type ProcessRunsEngines = Pick<
  Engines,
  'bidi' | 'scriptItemizer' | 'fontSubstitution'
>;

/**
 * Performs font substitution and script itemization on attributed string
 *
 * @param engines - engines
 */
const preprocessRuns = (engines: ProcessRunsEngines) => {
  /**
   * @param attributedString - Attributed string
   * @returns Processed attributed string
   */
  return (attributedString: AttributedString | null) => {
    if (isNil(attributedString)) return empty();

    const { string } = attributedString;
    const { fontSubstitution, scriptItemizer, bidi } = engines;

    const { runs: omittedFontRuns } = omitFont(attributedString);
    const { runs: itemizationRuns } = scriptItemizer()(attributedString);
    const { runs: substitutedRuns } = fontSubstitution()(attributedString);
    const { runs: bidiRuns } = bidi()(attributedString);

    const runs = bidiRuns
      .concat(substitutedRuns)
      .concat(itemizationRuns)
      .concat(omittedFontRuns);

    return { string, runs: flatten(runs) } as AttributedString;
  };
};

export default preprocessRuns;
