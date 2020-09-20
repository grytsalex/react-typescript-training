import React, {
  memo,
} from 'react';
import './styles.less';

import { block } from 'bem-cn';
import { ICodeProps } from './types';

const bemCodeBlock = block('code-block');

export const Code: React.FC<ICodeProps> = memo(({ code }) => {

  return (
    <div className={bemCodeBlock()}>
      <div id="referralCode">
        {'This is code: '}
        <span className="font-italic">{`${code}`}</span>
      </div>
      <button
        type="button"
        className="btn btn-primary btn-copy-code"
        data-clipboard-action="copy"
        data-clipboard-target="#referralCode"
      >
        Copy
      </button>
    </div>
  );
});
