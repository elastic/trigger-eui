import React, { Fragment } from 'react';
import { 
  EuiEmptyPrompt, 
  EuiButton, 
  EuiFlexGroup, 
  EuiFlexItem , 
  EuiText, 
  EuiLink,
  EuiIcon
} from '@elastic/eui';

import triggerIcon from 'src/images/icon_high5.svg'

const render = () => (
  <EuiEmptyPrompt
    iconType={triggerIcon}
    title={<h3>Imagine us giving you a high five</h3>}
    body={
      <Fragment>
      <EuiText>
        <p>Zoom has been upgraded to the latest, most secure version.</p>
        <p>Thank You for taking the time to update. Doing so helps keep you (and Elastic) safe, secure, and bug free. <EuiIcon type="heart" size="m" /></p>
        <p>If you want to test things out, maybe try <EuiLink href="http://next/">dropping by the Watercooler AON?</EuiLink></p>
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