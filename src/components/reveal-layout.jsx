/* eslint-disable import/extensions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Reveal from 'reveal.js';

import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import 'reveal.js/plugin/highlight/zenburn.css';

import BaseLayout from './base-layout';

const Layout = ({ children }) => {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Highlight],
    });
    deck.initialize();
  }, []);
  return (
    <BaseLayout>
      <div style={{ height: '100vh' }}>{children}</div>
    </BaseLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
