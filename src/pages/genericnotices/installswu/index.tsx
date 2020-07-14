import React, { Fragment } from 'react';
import {
  EuiEmptyPrompt,
  EuiButton,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButtonEmpty,
} from '@elastic/eui';

import triggerIcon from 'src/images/icon_ITComms.png';

const render = () => (
  <EuiEmptyPrompt
    iconType={triggerIcon}
    title={<h2>So Many Updates</h2>}
    body={
      <Fragment>
        <EuiText>
          <p>Your Mac has an excessive number of software updates pending.</p>
          <p>
            We know, installing updates is a pain. However, letting updates
            linger too long leaves your Mac exposed to security issues that have
            been patched. Known security vulnerabilities are a malicious hackers
            go-to choice when trying to break into a system.
          </p>
          <p>
            Please take the time to install updates now or the next time you
            take a break. If you can&apos;t <em>right now</em>, that&apos;s ok!
            Cancel and we&apos;ll remind you again later.
          </p>
        </EuiText>
      </Fragment>
    }
    actions={
      <Fragment>
        <EuiFlexGroup gutterSize="s" alignItems="center" direction="column">
          <EuiFlexItem>
            <EuiButton fill href="http://next">
              Restart Now
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButtonEmpty color="danger" href="http://quit">
              Remind Me Later
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Fragment>
    }
  />
);

export default render;
