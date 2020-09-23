import React, { Fragment } from 'react';
import {
  EuiEmptyPrompt,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiIcon,
} from '@elastic/eui';

import triggerIcon from 'src/images/icon_high5.svg';

const render = () => (
  <EuiEmptyPrompt
    iconType={triggerIcon}
    title={<h3>Magic Just Happened – You Helped!</h3>}
    body={
      <Fragment>
        <EuiText>
          <p>
            We&apos;ve updated your Mac&apos;s inventory data with our MDM
            server. <br />
            Imagine us giving you a high-five. Maybe a hug.
          </p>
          <p>
            You&apos;re an important part of what makes Elastic great. <br />{' '}
            We&apos;re glad you&apos;re here. <EuiIcon type="heart" size="m" />
          </p>
        </EuiText>
      </Fragment>
    }
    actions={
      <Fragment>
        <EuiFlexGroup gutterSize="s" alignItems="center" direction="column">
          <EuiFlexItem>
            <EuiButton fill href="http://quit">
              Close
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Fragment>
    }
  />
);

export default render;
