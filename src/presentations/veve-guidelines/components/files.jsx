/* eslint-disable react/prop-types */
import React from 'react';

import styles from './files.module.css';

const File = ({ name }) => <div className={`${styles.ListItem} ${styles.ListFile}`}>{name}</div>;
const Directory = ({ name, children }) => (
  <div className={`${styles.ListItem} ${styles.ListDirectory}`}>
    {name}
    <div className={styles.List}>{children}</div>
  </div>
);

export default ({
  showApi = false,
  showConfig = false,
  showDomain = false,
  showRepository = false,
  showServices = false,
}) => (
  <div className={styles.List}>
    <div className={styles.ListTitle}>veve-backend-service</div>
    <Directory name="bamboo-specs" />
    <Directory name="config">
      {showConfig && (
        <>
          <File name="default.json" />
          <File name="produciton.json" />
          <File name="test.json" />
          <File name="test-ci.json" />
        </>
      )}
    </Directory>
    <Directory name="src">
      <Directory name="api">
        {showApi && (
          <>
            <Directory name="healthcheck">
              <File name="index.js" />
              <File name="index.spec.js" />
            </Directory>
            <Directory name="users" />
          </>
        )}
      </Directory>
      <Directory name="domain">{showDomain && <Directory name="users" />}</Directory>
      <Directory name="repository">
        {showRepository && (
          <Directory name="users">
            <File name="index.js" />
            <File name="User.js" />
          </Directory>
        )}
      </Directory>
      <Directory name="services">
        {showServices && (
          <>
            <File name="featureService.js" />
            <File name="contractService.js" />
          </>
        )}
      </Directory>
      <File name="index.js" />
      <File name="server.js" />
    </Directory>
    <File name=".npmrc" />
    <File name="build.env" />
    <File name="package.json" />
  </div>
);
