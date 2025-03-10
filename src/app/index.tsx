import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Switch, Route } from 'react-router-dom';

import NotificationContainer from 'app/components/Notification/NotificationContainer';
import WalletModal from 'app/components/WalletModal';
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from 'app/theme';
import ApplicationUpdater from 'store/application/updater';
import TransactionUpdater from 'store/transactions/updater';
import { PageLocation } from 'utils';

import { Banner } from './components/Banner';
import { Claim } from './containers/Claim/Loadable';
import Message from './Message';
import Routes from './Routes';

function Updaters() {
  return (
    <>
      <TransactionUpdater />
      <ApplicationUpdater />
    </>
  );
}

export function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <FixedGlobalStyle />
      <Updaters />

      <ThemeProvider>
        <ThemedGlobalStyle />
        <NotificationContainer />
        <WalletModal />
        {/* Add message for community */}
        <Banner messageID={'continuousFees'} location={PageLocation.HOME}>
          <Message />
        </Banner>

        <Helmet
          titleTemplate="%s | Balanced"
          defaultTitle="Balanced Network"
          htmlAttributes={{ lang: i18n.language }}
        />
        <Switch>
          <Route exact path="/claim" component={Claim} />
          <Route component={Routes} />
        </Switch>
      </ThemeProvider>
    </>
  );
}
