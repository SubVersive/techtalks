import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Helmet } from 'react-helmet';

import Layout from '../../components/reveal-layout';

const Index = ({ data }) => (
  <Layout>
    <div className="reveal">
      <Helmet>
        <title>Maksym K. - Message Broker in VEVE world</title>
      </Helmet>
      <div className="slides">
        <section>
          <section>
            <div className="Slide36">
              <h1>Wellcome to Microservices World</h1>
              <div className="Body">
                <Img fluid={[data.microservices.childImageSharp.fluid]} />
              </div>
            </div>
          </section>
          <section>
            <div className="Slide50">
              <h1>Wellcome to Microservices World</h1>
              <div className="Body">
                <div>
                  <h4>Fallacies of distributed computing</h4>
                  <ul>
                    <li>The network is reliable</li>
                    <li>Latency is zero</li>
                    <li>Bandwidth is infinite</li>
                    <li>The network is secure</li>
                    <li>Topology doesn&apos;t change</li>
                    <li>There is one administrator</li>
                    <li>Transport cost is zero</li>
                    <li>The network is homogeneous</li>
                    <li>We all trust each other</li>
                  </ul>
                </div>
                <div className="fragment">
                  <h4>CAP theorem</h4>
                  <ul>
                    <li>Consistency: Every read receives the most recent write or an error</li>
                    <li>
                      Availability: Every request receives a (non-error) response, without the
                      guarantee that it contains the most recent write
                    </li>
                    <li>
                      Partition tolerance: The system continues to operate despite an arbitrary
                      number of messages being dropped (or delayed) by the network between nodes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="Slide">
              <h1>Wellcome to Microservices World</h1>
              <div className="Body">
                <h3>
                  The network is <span className="highlight">reliable</span>.
                </h3>
                <h3>
                  <span className="highlight">Partition tolerance</span> de facto default option.
                </h3>
                <h3>
                  Topology <span className="highlight">doesn&apos;t</span> change.
                </h3>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="Slide36">
            <h1>Service to Service communication</h1>
            <div className="Body">
              <div>
                <h4>via HTTP</h4>
                <ul>
                  <li className="fragment">
                    services are talking each other <span className="highlight">directly</span> in
                    synchronous manner
                  </li>
                  <li className="fragment">
                    <span className="highlight">caller</span> is blocked (until fire and forget is
                    used)
                  </li>
                  <li className="fragment">
                    <span className="highlight">caller</span> is failed to proceed with incomming
                    request when <span className="highlight">callee</span> is not available
                    (redeployment, crashed)
                  </li>
                  <li className="fragment">
                    in case of network connectivity issue between services during request, you could
                    reach unpredictable state:
                    <div className="r-stack">
                      <div className="fragment fade-in-then-out" style={{ width: 500 }}>
                        <Img fluid={[data.requestResponse.childImageSharp.fluid]} />
                      </div>
                      <div className="fragment fade-in-then-out" style={{ width: 500 }}>
                        <Img fluid={[data.requestResponseFail.childImageSharp.fluid]} />
                      </div>
                      <div className="fragment" style={{ width: 500 }}>
                        <ul>
                          <li>transaction failed without reaching callee</li>
                          <li>transaction failed on callee side nothing changed</li>
                          <li>transaction succeed, but caller didn&apos;t get response</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="Slide36">
            <h1>Service to Service communication</h1>
            <div className="Body">
              <div>
                <h4>messaging to the rescue</h4>
                <ul>
                  <li className="fragment">
                    services are talking each other <span className="highlight">indirectly</span>{' '}
                    using external tool
                  </li>
                  <li className="fragment">
                    communication is asynchronous:
                    <ul className="mt-m">
                      <li>there is no way to get response</li>
                      <li>delay between triggering and actual processing</li>
                    </ul>
                  </li>
                  <li className="fragment">
                    <span className="highlight">caller</span> is not coupled to{' '}
                    <span className="highlight">callee</span>, in best case it even doesn&apos;t
                    know about who they are and how many of them
                  </li>
                  <li className="fragment">
                    if <span className="highlight">callee</span> is having troubles, it does not
                    influence availability of <span className="highlight">caller</span>
                  </li>
                  <li className="fragment">
                    in case of network failures, system behaviour are more predictable
                    <ul className="mt-m">
                      <li>publishing fails</li>
                      <li>consumer failures are more reliable</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <section>
            <div className="Slide">
              <h1>Service to Service communication</h1>
              <div className="Body">
                <div>
                  <h4>veve-queue</h4>
                  <ul>
                    <li>we had reddis-based system, but it was unreliable</li>
                    <li>
                      Mongo worked really good for us and we decided to have something on top of it
                    </li>
                    <li>working really good for several years</li>
                    <li>
                      heavelly optimized
                      <ul className="mt-m">
                        <li>change streams</li>
                        <li>in-memory queue</li>
                        <li>Automatic reconnection (polling / change streams)</li>
                        <li>limit to process items in parallel</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="Slide">
              <h1>Service to Service communication</h1>
              <div className="Body">
                <div>
                  <h4>veve-queue features</h4>
                  <ul>
                    <li>easy to use</li>
                    <li>consistent and reliable</li>
                    <li>fully configurable</li>
                    <li>
                      retryability
                      <ul className="mt-m">
                        <li>retries count</li>
                        <li>retry wait period</li>
                        <li>postponed</li>
                      </ul>
                    </li>
                    <li>automatic cleanup</li>
                    <li>monitoring (custom)</li>
                    <li>global error handling</li>
                    <li>automatic provisioning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="Slide">
              <h1>Service to Service communication</h1>
              <div className="Body">
                <div>
                  <h4>veve-queue drawbacks</h4>
                  <ul>
                    <li>
                      coupled communication between service A and B (command style vs event style)
                    </li>
                    <li>Heavy load on our MongoDB cluster (more then 1M messages per day)</li>
                    <li>Not easy to maintain</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <section>
            <div className="Slide36">
              <h1>Service to Service communication</h1>
              <div className="Body">
                <div>
                  <h4>message broker vs event streaming</h4>
                  <ul>
                    <li className="fragment">
                      message brokers / message bus
                      <ul className="mt-m">
                        <li>RabbitMQ / ZeroMQ / ActiveMQ / Amazon SQS</li>
                        <li>flexible delivery tool</li>
                        <li>no history</li>
                        <li>flexible routing</li>
                        <li>At least ones vs At most ones</li>
                        <li>feature set depends on a tool (plugin)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="Slide36">
              <h1>Service to Service communication</h1>
              <div className="Body">
                <div>
                  <h4>message broker vs event streaming</h4>
                  <ul>
                    <li className="fragment">
                      event streaming
                      <ul className="mt-m">
                        <li>Kafka</li>
                        <li>persistent stream of events</li>
                        <li>read using cursor</li>
                        <li>configurable duration</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="Slide36">
              <h1>Service to Service communication</h1>
              <div className="Body">
                <div>
                  <h4>VEVE picked RabbitMQ</h4>
                  <ul>
                    <li>Popular choice, good documentation, good tools</li>
                    <li>Easier to setup</li>
                    <li>Closer to current veve-queue</li>
                    <li>We have experience with a model / patterns</li>
                    <li>solves performance issues</li>
                    <li>solves direct communication issue</li>
                    <li>retry*</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="Slide36">
              <h1>Service to Service communication</h1>
              <div className="Body">
                <div>
                  <h4>Entity Transfer Service</h4>
                  <ul>
                    <li>
                      Replicate data between products
                      <ul className="mt-m">
                        <li>on demand not scalable</li>
                        <li>information hiding</li>
                        <li>availability</li>
                      </ul>
                    </li>
                    <li>Bigger scope (teams, even companies)</li>
                    <li>Hard to change schema (versioning)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    microservices: file(
      relativePath: { eq: "presentations/message-broker/images/microservices.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    requestResponse: file(
      relativePath: { eq: "presentations/message-broker/images/request-response.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    requestResponseFail: file(
      relativePath: { eq: "presentations/message-broker/images/request-response-fail.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

export default Index;
