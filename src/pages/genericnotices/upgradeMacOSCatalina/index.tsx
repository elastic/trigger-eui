import React, { Fragment, useState } from 'react';
import {
  EuiEmptyPrompt,
  EuiButton,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiTextColor,
  EuiPopover,
  EuiPopoverTitle,
  EuiOverlayMask,
  EuiConfirmModal,
  EuiHorizontalRule,
} from '@elastic/eui';

export default () => {
  // Help Popover
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const onHelpClick = () => setIsHelpOpen(isHelpOpen => !isHelpOpen);
  const closeHelp = () => setIsHelpOpen(false);
  const helpPopoverButton = (
    <EuiPopover
      button={
        <EuiButton onClick={onHelpClick} color="secondary" iconType="help">
          Help
        </EuiButton>
      }
      isOpen={isHelpOpen}
      closePopover={closeHelp}
      anchorPosition="rightDown"
      panelPaddingSize="s">
      <EuiPopoverTitle>Need Assistance?</EuiPopoverTitle>
      <EuiText>
        <p>
          Like Elastic, IT is a global team. We&apos;re happy to help whenever
          you need us - don&apos;t be afraid to ask!
          <EuiHorizontalRule margin="s" />
          <strong>Via Slack:</strong> #IT
          <br />
          <strong>Via Email:</strong> helpdesk@elastic.co
          <br />
        </p>
      </EuiText>
    </EuiPopover>
  );

  // Continue Button
  const continueButton = (
    <EuiButton fill href="http://next">
      Go Download macOS Catalina
    </EuiButton>
  );

  // Exit Warning Modal - usually we're less pushy but this one is *special*
  const [isExitWarningModalVisible, setIsExitWarningModalVisible] = useState(
    false
  );
  const closeExitWarningModal = () => setIsExitWarningModalVisible(false);
  const showExitWarningModal = () => setIsExitWarningModalVisible(true);
  const nextMenuBarTrigger = () => window.location.replace('http://next');

  const exitWarningModalButton = (
    <EuiButton onClick={showExitWarningModal} color="danger">
      Remind Me Later
    </EuiButton>
  );

  let exitWarningModal;
  if (isExitWarningModalVisible) {
    exitWarningModal = (
      <EuiOverlayMask>
        <EuiConfirmModal
          title="Did We Mention This Is Important?"
          onCancel={nextMenuBarTrigger}
          onConfirm={closeExitWarningModal}
          cancelButtonText="Go Download macOS Catalina"
          confirmButtonText="I'll Upgrade Tonight, Promise!"
          buttonColor="danger"
          defaultFocusedButton="confirm">
          <p>
            We know, we&apos;re being pushy - but we <em>really</em> need you to
            do this ASAP.
            <br />
            If you fail to update in the next few days, InfoSec will reach out
            to you, and possibly your manager. We really don&apos;t want to do
            that. Please don&apos;t make us.
          </p>
        </EuiConfirmModal>
      </EuiOverlayMask>
    );
  }

// eslint is really dumb and demands this
default.displayName = 'default';
  ////////////////////////////////
  // Main Dialog Content Goes Here
  ////////////////////////////////

  return (
    <EuiEmptyPrompt
      iconType="alert"
      iconColor="white"
      title={<h2>macOS Upgrade Required</h2>}
      body={
        <Fragment>
          <EuiText>
            <p>
              <EuiTextColor color="danger">
                Your Mac is running a dangerously out-of-date version of macOS.{' '}
                <br />
                <strong>This is a serious issue!</strong>
              </EuiTextColor>
            </p>
            <p>
              We don&apos;t want your Mac compromised, but it&apos;s out-of-date
              OS means we can&apos;t prevent that. Even if nothing <em>bad</em>{' '}
              happens, being out-of-compliance with Workstation Controls
              threatens our regulatory compliance.
            </p>
            <p>We know updating is a pain, but this needs to be fixed soon.</p>
            <p>
              Click the button below to go to the App Store, where you can
              download the most recent supported version of macOS at Elastic.
              <br />
              Once you&apos;re done for the day, run the installer. It takes up
              to 2 hours to complete, but will be ready by tomorrow morning.
            </p>
          </EuiText>
        </Fragment>
      }
      actions={
        <Fragment>
          <EuiFlexGroup gutterSize="s" alignItems="center">
            <EuiFlexItem>{helpPopoverButton}</EuiFlexItem>
            <EuiFlexItem>{exitWarningModalButton}</EuiFlexItem>
            <EuiFlexItem>{continueButton}</EuiFlexItem>
          </EuiFlexGroup>
          {exitWarningModal}
        </Fragment>
      }
    />
  );
};
