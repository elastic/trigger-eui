import React, { Fragment } from 'react';
import {
  EuiEmptyPrompt,
  EuiButton,
  EuiButtonEmpty,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
} from '@elastic/eui';

import triggerIcon from 'src/images/icon_ITComms.png';

const render = () => (
  <EuiEmptyPrompt
    iconType={triggerIcon}
    title={<h3>Hello, Stranger!</h3>}
    body={
      <Fragment>
        <EuiText>
          <p>
            Your Mac is not assigned in our inventory system, so we don&apos;t
            know who it belongs to. This can cause us to mark you as
            out-of-compliance with Workstation Controls even when that
            isn&apos;t true, or cause other problems.
          </p>
          <p>
            To fix this, we need your Okta username and a minute of your time.
          </p>
          <p>
            If you can&apos;t fix this right now, that&apos;s ok! We&apos;ll
            remind you later. However, it&apos;s important you do this as soon
            as possible.
          </p>
        </EuiText>
      </Fragment>
    }
    actions={
      <Fragment>
        <EuiFlexGroup gutterSize="s" alignItems="center" direction="column">
          <EuiFlexItem>
            <EuiButton fill href="http://next">
              Fix Now
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiButtonEmpty color="danger" href="http://quit">
              Ask Me Later
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Fragment>
    }
  />
);

export default render;
