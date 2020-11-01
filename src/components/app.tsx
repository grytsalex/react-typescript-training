import * as React from "react";
import useClippy from "use-clippy";
import './clipboard-hoc/styles.less'

import { ParentComponent } from './clipboard-hoc/ParentComponent'
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
      <ParentComponent />
      <hr />
      <div>{text}</div>
      <button className="btn btn-light"
        onClick={() => setClipboard(`${text}`)}>Set Clipboard</button>
      <div>{clipboard}</div>
    </div>
  );
}
