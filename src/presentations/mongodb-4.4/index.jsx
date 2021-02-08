import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/reveal-layout';

const Index = () => (
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
              ***Indexes Build Simultaneously on Data-Bearing Replica Set Members*** MongoDB 4.4
              running featureCompatibilityVersion: &quot;4.2&quot; builds indexes on the primary
              before replicating the index build to secondaries. Starting with MongoDB 4.4, index
              builds on a replica set or sharded cluster build simultaneously across all
              data-bearing replica set members.
            </li>
            <li>Minimum Oplog Retention Period</li>
          </ul>
        </section>
      </div>
    </div>
  </Layout>
);

export default Index;
