import React from 'react';

import { EuiLoadingSpinner } from '@elastic/eui';

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
  <div style={loadingCSS}>
    <EuiLoadingSpinner size="xl" />
  </div>
);

export default SecondPage;
