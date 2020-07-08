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
    title={<h2>Action Required for Workstation Controls</h2>}
    body={
      <Fragment>
        <EuiText>
          <p>
            Your Mac is only partially enrolled in{' '}
            <a href="https://wiki.elastic.co/display/AD/For+Macs%3A+JAMF+Pro">
              Workstation Controls.
            </a>{' '}
            This prevents IT Engineering from fully managing your Mac, which can
            create problems for you and Elastic&apos;s regulatory compliance.
          </p>
          <p>
            To fix this, you need to open System Preferences, click{' '}
            <em>Profiles</em>, select <em>Elastic JamfPro MDM</em>, and click{' '}
            <strong>Approve</strong>.
          </p>
          <p>
            Check{' '}
            <a href="https://wiki.elastic.co/display/AD/For+Macs%3A+JAMF+Pro">
              the Elastic Wiki for more details
            </a>
            , or Slack #IT for help.
          </p>
        </EuiText>
      </Fragment>
    }
    actions={
      <Fragment>
        <EuiFlexGroup gutterSize="s" alignItems="center" direction="column">
          <EuiFlexItem>
            <EuiButton fill href="http://next">
              Open System Preferences
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
