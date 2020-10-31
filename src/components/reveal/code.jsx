import React from 'react';
import PropTypes from 'prop-types';

const Code = ({ children }) => (
  <pre>
    <code className="javascript" data-trim data-noescape data-line-numbers>
      {children}
    </code>
  </pre>
);

Code.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Code;
