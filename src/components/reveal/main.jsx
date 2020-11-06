/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Reveal from 'reveal.js';

import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import 'reveal.js/plugin/highlight/zenburn.css';

const MainReveal = ({ children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Highlight],
    });
    deck.initialize();
    setReady(true);
  }, []);
  return <div style={{ display: ready ? 'block' : 'none' }}>{children}</div>;
};

MainReveal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainReveal;
