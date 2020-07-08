import React, { Fragment } from 'react';
import { EuiEmptyPrompt, EuiButton, EuiText, EuiCode } from '@elastic/eui';

import triggerIcon from 'src/images/logo_menubartrigger.png';

const render = () => (
  <EuiEmptyPrompt
    iconType={triggerIcon}
    title={<h2>Well, that&apos;s not right</h2>}
    body={
      <Fragment>
        <EuiText>
          <p>
            <em>Trigger</em> was launched with the{' '}
            <EuiCode>genericnotices/start</EuiCode> UX Path, but this module
            requires a direct path to a UX page.
          </p>
          <p>
            Generally, this is because of a scripting error on the part of your
            IT Administrator. She probably needs more coffee (or a nap).
          </p>
          <p>Slack #IT for more help.</p>
        </EuiText>
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

export default render;
