import React, { Fragment, FunctionComponent } from 'react';
import Error, { ErrorProps } from 'next/error';
import Link from '../components/link';

import { EuiButton, EuiEmptyPrompt } from '@elastic/eui';

const NotFoundPage: FunctionComponent = () => (
  <EuiEmptyPrompt
    iconType="editorStrike"
    title={<h2>Ack! There&apos;s nothing here.</h2>}
    body={
      <Fragment>
        <p>You found a page that doesn&apos;t exist.</p>
      </Fragment>
    }
    actions={
      <Link href="/">
        <EuiButton color="primary" fill>
          Go Home
        </EuiButton>
      </Link>
    }
  />
);

/**
 * An example of how to render a custom error page.
 */
const ErrorWrapper: FunctionComponent<ErrorProps> = ({ statusCode }) => {
  if (statusCode === 404) {
    return <NotFoundPage />;
  }

  return <Error statusCode={statusCode} />;
};

// @ts-ignore getInitialProps doesn't exist on FunctionComponent
ErrorWrapper.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorWrapper;
