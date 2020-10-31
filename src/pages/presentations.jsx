import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const Presentations = ({ data }) => {
  return (
    <Layout>
      list of presentations
      <ul>
        {data.allSitePage.edges.map((item) => (
          <li>
            <Link to={item.node.context.slug}>{item.node.context.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Presentations.propTypes = {
  data: PropTypes.shape({
    allSitePage: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query {
    allSitePage(filter: { context: { type: { eq: "presentation" } } }) {
      edges {
        node {
          context {
            type
            slug
            title
          }
          component
        }
      }
    }
  }
`;

export default Presentations;
