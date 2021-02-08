import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    Wellcome to
    <br />
    <Link to="/presentations">presentations</Link>
  </Layout>
);

export default Index;
