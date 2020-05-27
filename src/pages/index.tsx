import React, { FunctionComponent, Fragment } from 'react';
import {
  EuiEmptyPrompt, 
  EuiButton,
  EuiIcon
} from '@elastic/eui';

import triggerIcon from 'src/images/logo_menubartrigger.png'

const Index: FunctionComponent = () => (
<EuiEmptyPrompt
    iconType={triggerIcon}
    title={<h2>Hello, world?</h2>}
    body={
      <Fragment>
        <p><em>Trigger</em> was launched, but not told what UX Applet to display. 
        <br />Generally, this is because of a scripting error.</p>
        <p>Contact your IT team for more help.</p>
        <EuiIcon type="heart" size="xl" />
      </Fragment>
    }
    actions={
      <a href="http://quit">
        <EuiButton color="primary" fill>
          Close Trigger
        </EuiButton>
      </a>
    }
  />
);

export default Index;
