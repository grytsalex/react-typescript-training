import React, { memo, useCallback, useState } from 'react';
import { block } from 'bem-cn';
import './styles.less';

import { Code } from './Code';

const bemReferral = block('referral');

export const ParentComponent = memo(() => {
  let [code, setCode] = useState("");

  const handleCreatePromoCode = useCallback(
    () => {
      setCode(Math.floor(100000 + Math.random() * 900000).toString())
    },
    [code],
  );

  return (
    <div className={bemReferral()}>
      <div >
        <Code code={code} />
      </div>
      <button className="btn btn-secondary" onClick={handleCreatePromoCode}>
        Create Code
      </button>
    </div>
  );
});

