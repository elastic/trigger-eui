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
    title={<h2>Your Mac Needs a Restart</h2>}
    body={
      <Fragment>
        <EuiText>
          <p>It&apos;s been a long time since your Mac has shutdown.</p>
          <p>
            When your Mac goes too long between restarts, bad things happen:
            software updates don&apos;t install, maintenance tasks don&apos;t
            run, and so on. Closing the lid only puts your Mac to sleep, which
            doesn&apos;t help.
          </p>
          <p>
            A restart will only take a few minutes. If you can&apos;t
            <em>right now</em>, that&apos;s ok! Cancel and we&apos;ll remind you
            again later.
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
