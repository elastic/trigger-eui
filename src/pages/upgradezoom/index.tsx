import React, { FunctionComponent } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiSpacer,
  EuiTitle,
  EuiIcon,
  EuiCodeBlock,
  EuiCode,
  EuiText
} from '@elastic/eui';

import Link from '../../components/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

import triggerIcon from 'src/images/logo_menubartrigger.png'

const appletDesc = `This applet guides the user through a Zoom Upgrade process by:
            
- Prompting them to upgrade, with details on the consequences of not upgrading
- Letting them know the upgrade policy is running
- Letting them know when the upgrade is complete.
`

/**
 * A simple page that is rendered for all "app" pages. The filename is
 * interpreted by Next and the "slug" part of the route name made available
 * through `router` (although we don't actually use it here).
 */
const CatchAll: FunctionComponent = () => {
  const router = useRouter();

  const finalPathSegment = router.asPath.split('/').pop() ?? '';

  let title = 'Trigger UX Module Root';
  if (finalPathSegment[0] !== '[') {
    title = `${title}: ${finalPathSegment}`;
  }

  let startLink = '/';
  if (finalPathSegment[0] !== '[') {
    startLink = `/${finalPathSegment}/start`;
  }

  return (
    <EuiPage restrictWidth>
      <Head>
        <title>{title}</title>
      </Head>
      <EuiPageBody>

        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>{title}</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
            <EuiPageContentHeaderSection>
              <EuiIcon type={triggerIcon} size="m" /> Trigger EUI
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>

          <EuiPageContentBody>
            <EuiText>
              <p>
              This is the root page for a Trigger EUI UX Module named <EuiCode>{finalPathSegment}</EuiCode>. 
              UX Modules are collections of pages that shepherd a user though a process in Trigger EUI, 
              such as installing an app or running a script. The first page of an applet is always located
              at the <EuiCode>start</EuiCode> endpoint, e.g. <EuiCode>/{finalPathSegment}/start/</EuiCode>.
              </p>
            </EuiText>

            <EuiSpacer size="xl"/>

            <EuiPageContentHeader>
              <EuiPageContentHeaderSection>
                <EuiTitle><h3>UX Applet Description</h3></EuiTitle>
              </EuiPageContentHeaderSection>
            </EuiPageContentHeader>

            <EuiCodeBlock>
              {appletDesc}
            </EuiCodeBlock>

            <EuiSpacer />

            <Link href={startLink}>
              <a>Go to applet's start page</a>
            </Link>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default CatchAll;
