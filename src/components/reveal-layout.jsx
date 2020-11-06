/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';

import BaseLayout from './base-layout';

// eslint-disable-next-line
const MainReveal = loadable(() => import('./reveal/main'));

const Layout = ({ children }) => (
  <BaseLayout>
    <MainReveal />
    <div style={{ height: '100vh' }}>{children}</div>
  </BaseLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
