import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/reveal-layout';

import Code from '../../components/reveal/code';

const Index = () => (
  <Layout>
    <div className="reveal">
      <Helmet>
        <title>Maksym K. - Sample Presentation</title>
      </Helmet>
      <div className="slides">
        <section>
          <Code>
            {`
              module.exports = {
                /* Your site config here */
                plugins: ['gatsby-plugin-react-helmet'],
              };
            `}
          </Code>
        </section>
        <section>Horizontal Slide</section>
        <section>
          <section>Vertical Slide 1</section>
          <section>Vertical Slide 2</section>
        </section>
      </div>
    </div>
  </Layout>
);

export default Index;
