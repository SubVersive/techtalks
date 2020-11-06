/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import BaseLayout from './base-layout';

const MainReveal = loadable(() => import('./reveal/main'));

const Layout = ({ children }) => (
  <BaseLayout>
    <MainReveal>
      <div style={{ height: '100vh' }}>{children}</div>
    </MainReveal>
  </BaseLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
