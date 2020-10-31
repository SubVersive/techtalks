import React from 'react';
import PropTypes from 'prop-types';

import BaseLayout from './base-layout';

const Layout = ({ children }) => (
  <BaseLayout>
    <div>{children}</div>
  </BaseLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
