import React, { Fragment } from 'react';
import {
  EuiEmptyPrompt,
  EuiText,
  EuiProgress,
  EuiTextColor,
  EuiSpacer,
} from '@elastic/eui';

const render = () => (
  <EuiEmptyPrompt
    iconType="quote"
    iconColor="white"
    title={
      <p>
        Hope just means another world might be possible, not promised, not
        guaranteed.
        <br />
        Hope calls for action;
        <br />
        action is impossible without hope.
        <br />
        <EuiTextColor color="danger">Rebecca Solnit</EuiTextColor>
      </p>
    }
    body={
      <Fragment>
        <EuiSpacer size="m" />
        <EuiProgress size="s" color="primary" fullsize="true" />
      </Fragment>
    }
    actions={
      <Fragment>
        <EuiText color="subdued">
          <p>
            We&apos;re working some magic. It&apos;ll take a few minutes. <br />
            You can hide this window by tapping the Menubar icon.
          </p>
        </EuiText>
      </Fragment>
    }
  />
);

export default render;
