import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const BaseLayout = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Maksym K.</title>
    </Helmet>
    <div>{children}</div>
  </>
);

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
