import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/reveal-layout';

import Code from '../../components/reveal/code';

export default () => (
  <Layout>
    <div className="reveal">
      <Helmet>
        <title>Maksym K. - MongoDB 4.4</title>
      </Helmet>
      <div className="slides">
        <section>
          <ul>
            <li>update featureCompatibilityVersion set to at least 4.4</li>
            <li>
              ***Indexes Build Simultaneously on Data-Bearing Replica Set Members***
              MongoDB 4.4 running featureCompatibilityVersion: "4.2" builds indexes on the primary before replicating the index build to secondaries.
              Starting with MongoDB 4.4, index builds on a replica set or sharded cluster build simultaneously across all data-bearing replica set members.
            </li>
            <li>
            Minimum Oplog Retention Period

            </li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
);
