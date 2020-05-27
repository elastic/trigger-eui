import React from 'react';

import {
  EuiLoadingElastic,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
} from '@elastic/eui';

const render = () => (
  <EuiPage>
    <EuiPageBody component="div">
      <EuiPageContent verticalPosition="center" horizontalPosition="center">
        <EuiPageContentBody>
          <EuiLoadingElastic size="xxl" />
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);

export default render;
