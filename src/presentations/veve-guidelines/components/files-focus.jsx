/* eslint-disable react/prop-types */
import React from 'react';

import styles from './files.module.css';

const Focus = ({ name }) => <div className={`${styles.ListItem} ${styles.ListFile}`}>{name}</div>;
const File = ({ name }) => (
  <div className={`${styles.ListItem} ${styles.ListFile} blur`}>{name}</div>
);
const Directory = ({ name, children }) => (
  <div className={`${styles.ListItem} ${styles.ListDirectory} blur`}>
    {name}
    <div className={styles.List}>{children}</div>
  </div>
);

export default ({ focus }) => (
  <div className={styles.List}>
    <div className={styles.ListTitle}>veve-backend-service</div>
    <Directory name="services" />
    <Directory name="api">
      <>
        <Directory name="healthcheck">
          <File name="index.js" />
          <File name="index.spec.js" />
        </Directory>
        <Directory name="users" />
      </>
    </Directory>
    <Directory name="domain">
      <Directory name="users" />
    </Directory>
    <File name="index.js" />
    <Focus name={focus} />
  </div>
);
