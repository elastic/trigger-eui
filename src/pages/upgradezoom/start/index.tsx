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
    title={<h3>Zoom Update Required</h3>}
    body={
      <Fragment>
        <EuiText>
          <p>Hello from your friendly #IT Team!</p>
          <p>
            Zoom have released an update with important changes to how meetings
            are encrypted. After 31 May, Zoom will be requiring all users to
            upgrade before joining any meetings.
          </p>
          <p>
            If you don&apos;t update before 31 May, you will be unable to join
            any Zoom meetings until you upgrade.
          </p>
          <p>
            If you can&apos;t upgrade right now that&apos;s ok! We&apos;ll
            remind you later. Just be sure to upgrade before 31 May.
          </p>
        </EuiText>
      </Fragment>
    }
    actions={
      <Fragment>
        <EuiFlexGroup gutterSize="s" alignItems="center" direction="column">
          <EuiFlexItem>
            <EuiButton fill href="http://next">
              Upgrade Now
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
