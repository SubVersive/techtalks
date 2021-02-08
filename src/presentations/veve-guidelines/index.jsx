import React from 'react';
import { Helmet } from 'react-helmet';

import Code from '../../components/reveal/code';
import Layout from '../../components/reveal-layout';

import Files from './components/files';
import FilesFocus from './components/files-focus';

const Index = () => (
  <Layout>
    <div className="reveal">
      <Helmet>
        <title>Maksym K. - VEVE Backend guidelines</title>
      </Helmet>
      <div className="slides">
        <section>
          <div className="Slide36">
            <h1>Basic structure</h1>
            <div className="Body">
              <div>
                <Files />
              </div>
              <div>
                <p>
                  Top Level overview of common guidelines regarding structuring our NodeJS backend
                  projects.
                </p>
                <p>
                  Rules should be applied for HTTP-based services and for Single-threaded workers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <section data-transition="slide-in fade-out">
            <div className="Slide36">
              <h1>1. package.json</h1>
              <div className="Body">
                <div>
                  <FilesFocus focus="package.json" />
                </div>
              </div>
            </div>
          </section>
          <section data-transition="fade-in fade-out">
            <div className="Slide36">
              <h1>1. package.json</h1>
              <h3>1.1 required attributes</h3>
              <div className="Body">
                <div>
                  <FilesFocus focus="package.json" />
                </div>
                <div>
                  <div>
                    name should match bitbucket repository name
                    <Code>
                      {`
                    "name": "veve-mandate-service"
                  `}
                    </Code>
                  </div>
                  <div>
                    owner should be specified as *veve*
                    <Code>
                      {`
                    "owner": "veve"
                  `}
                    </Code>
                  </div>
                  <div>
                    port should be specified
                    <Code>
                      {`
                    "config": {
                      "port": 3165
                    }
                  `}
                    </Code>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-transition="fade-in fade-out">
            <div className="Slide36">
              <h1>1. package.json</h1>
              <h3>1.2 required dependencies</h3>
              <div className="Body">
                <div>
                  <FilesFocus focus="package.json" />
                </div>
                <div>
                  <div>
                    proper *base* package is installed
                    <Code>
                      {`
                    "veve-express-server" // for http backend servoces
                    "veve-express-worker" // for single-threaded workers
                      `}
                    </Code>
                  </div>
                  <div>
                    proper *utility* packages are installed
                    <Code>
                      {`
                      "veve-express-middleware" // helpful express middlewares
                      "veve-logger" // geenric logger
                      "veve-mongoose" // MongoDB access
                      "veve-queue" // MongoDB-based relyable queue
                      "veve-request" // HTTP client library
                      `}
                    </Code>
                  </div>
                  <div>
                    proper development package is installed
                    <Code>
                      {`
                      "@veve/devtools-nodejs" // Vanilla JS toolset
                      "@veve/devtools-nodejs-ts" // TypeScript-based toolset
                      `}
                    </Code>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
);

export default Index;
