import React, { Fragment } from 'react';
import {
  EuiEmptyPrompt,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
  EuiButtonEmpty,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';

import triggerIcon from 'src/images/icon_ITComms.png';

const render = () => (
  <EuiEmptyPrompt
    iconType={triggerIcon}
    title={<h3>Inventory User Update</h3>}
    body={
      <Fragment>
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiText>
              Please enter your Okta username - generally, this is your email
              address. We&apos;ll send this to our MDM server to update your
              Mac&apos;s inventory data.
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiSpacer size="l" />
        <EuiFlexGroup>
          <EuiFlexItem>
            <EuiFieldText
              icon="user"
              placeholder="kiley.davidson@elastic.co"
              fullWidth
              aria-label="An Okta Login Box. Enter your username here."
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </Fragment>
    }
    actions={
      <Fragment>
        <EuiFlexGroup gutterSize="s" alignItems="center" direction="column">
          <EuiFlexItem>
            <EuiButton fill href="http://formParse" type="submit">
              Continue
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
