import React, { FunctionComponent } from 'react';

import './_index.scss';

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome: FunctionComponent = ({ children }) => {

  return (
      <div className="chrWrap">{children}</div>
  );
};

export default Chrome;
