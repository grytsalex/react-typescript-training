import * as React from "react";
import useClippy from "use-clippy";
import './clipboard-hoc/styles.less'

import { Referrals } from './clipboard-hoc/Referrals'
import { block } from 'bem-cn';

export interface IAppProps {
  code?: string;
}

const bemContainer = block('mycontainer');

export default function IApp(props: IAppProps) {
  const [clipboard, setClipboard] = useClippy();
  const text = 'Text...';

  return (
    <div className={bemContainer()}>
      <h1>Hello React Typescript!</h1>
      <Referrals />
      <hr />
      <div>{text}</div>
      <button className="btn btn-light"
        onClick={() => setClipboard(`${text}`)}>Set Clipboard</button>
      <div>{clipboard}</div>
    </div>
  );
}
