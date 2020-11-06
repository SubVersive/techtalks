/* eslint-disable import/extensions */
import { useEffect } from 'react';
import Reveal from 'reveal.js';

import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/night.css';
import 'reveal.js/plugin/highlight/zenburn.css';

const MainReveal = () => {
  useEffect(() => {
    const deck = new Reveal({
      plugins: [Highlight],
    });
    deck.initialize();
  }, []);
  return null;
};

export default MainReveal;
