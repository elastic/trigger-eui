import React, { Fragment } from 'react';

import { EuiLoadingSpinner, EuiText, EuiSpacer } from '@elastic/eui';

const loadingCSS = {
  width: '100%',
  height: '100%',
  display: 'flex',
  'flex-direction': 'column',
  'justify-content': 'center',
  'align-items': 'center',
  'margin-top': '50%',
  'margin-bottom': '50%',
  padding: '0',
  overflow: 'hidden',
};

const SecondPage = () => (
  <Fragment>
    <div style={loadingCSS}>
      <EuiLoadingSpinner size="xl" />
      <EuiSpacer size="s" />
      <EuiText size="m" color="subdued">
        Updating Zoom
      </EuiText>
    </div>
  </Fragment>
);

export default SecondPage;
