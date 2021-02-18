const os = require('os');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

const { createFilePath } = require(`gatsby-source-filesystem`);

const isTopLevel = (dir) => dir.startsWith('presentations/') && dir.split('/').length === 2;

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `File` && isTopLevel(node.relativeDirectory)) {
    const readme = await readFile(path.join(node.dir, 'README.md'), 'utf8');
    const lines = readme.split(os.EOL);
    const title = lines.find((item) => item.startsWith('title: ')).replace('title: ', '');
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `title`,
      value: title,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
    query {
      allFile(filter: { fields: { slug: { ne: null } } }) {
        edges {
          node {
            fields {
              slug
              title
            }
            absolutePath
          }
        }
      }
    }
  `);
  data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: node.absolutePath,
      context: {
        type: 'presentation',
        slug: node.fields.slug,
        title: node.fields.title,
      },
    });
  });
};
