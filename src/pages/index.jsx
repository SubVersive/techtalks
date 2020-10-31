import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    Wellcome to
    <br />
    <Link to="/presentations">presentations</Link>
  </Layout>
);
