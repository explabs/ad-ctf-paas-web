import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import { userService } from '../services';
import Particles from 'react-particles-js';

const DownloadButton = ({ caption }) => (
  <>
    <span className="file-input-button">
      {caption}
    </span>
    <style jsx>
      {`
      .file-input-button {
        cursor: pointer;
        color: white;
        border-bottom: 2px dashed white;
      }
    `}
    </style>
  </>
);

export default function HomePage() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    setTeam(userService.team);
  });

  return (
    <Layout>
      <div className="page-bg"/>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            color: {
              value: '#39abe7',
              opacity: 0.3,
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#39abe7',
                opacity: 0.3,
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 0.1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#39abe7',
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <Container style={{ minHeight: 'calc(100vh - 72px - 50px)' }}>
        <Row>
          <Container sl={12}>
            <h1 className="display-1 bold text-center pt-2 pb-4">
              <span className="text-danger">
                INSTRU
              </span>
              <span style={{ color: 'rgb(57,171,231)' }}>
                CTION
              </span>

              <span className="vim-caret">&nbsp;</span>
            </h1>
            <Row className="justify-content-center">
              <Col md={10}>
                <div className="row align-items-center how-it-works d-flex">
                  <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">1</div>
                  </div>
                  <div className="col-6">
                    <h5>
                      Rules -
                      {' '}
                      <DownloadButton caption="скачать" />
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi
                      orci urna, iaculis in ligula et, posuere interdum lectus.
                    </p>
                  </div>
                </div>

                <div className="row timeline">
                  <div className="col-2">
                    <div className="corner top-right"/>
                  </div>
                  <div className="col-8">
                    <hr/>
                  </div>
                  <div className="col-2">
                    <div className="corner left-bottom" />
                  </div>
                </div>

                <div className="row align-items-center justify-content-end how-it-works d-flex">
                  <div className="col-6 text-right">
                    <h5>
                      VPN -
                      {' '}
                      <DownloadButton caption="download config" blue />
                    </h5>
                    <p >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi
                      orci urna, iaculis in ligula et, posuere interdum lectus.
                    </p>
                  </div>
                  <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div style={{ borderColor: 'rgb(57,171,231)' }} className="circle font-weight-bold">2</div>
                  </div>
                </div>

                <div className="row timeline">
                  <div className="col-2">
                    <div className="corner right-bottom" />
                  </div>
                  <div className="col-8">
                    <hr/>
                  </div>
                  <div className="col-2">
                    <div className="corner top-left" />
                  </div>
                </div>

                <div className="row align-items-center how-it-works d-flex">
                  <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">3</div>
                  </div>
                  <div className="col-6">
                    <h5>
                      SSH -
                      {' '}
                      <DownloadButton caption="download config" />
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi
                      orci urna, iaculis in ligula et, posuere interdum lectus.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <style jsx>
        {`
  $text: #fff;
  $link: #e34234;
  $link-hover: #ba160c;
  $background: #1e1e1e;

  canvas {
    display: block;
    vertical-align: bottom;
  }


.page-bg, :global(#tsparticles) {
  position: fixed; 
  top: 72px;
  left: 0;
  width: 100%;
  transition: all 0.5s linear;
  overflow: hidden;
  height: calc(100vh - 50px - 72px);
}

.page-bg {
  background: #1e1e1e;
  background-blend-mode: screen;
  background-size: cover;
  filter: grayscale(100%);
  z-index: -1;
}
    
`}
      </style>
      <style jsx>
        {`
          :global(header) {
            border-bottom: 1px solid rgba(220,53,69,0.8) !important;
          }
          
          .circle {
            display: flex;
            justify-content: center;
            align-items: center;
          
            padding: 13px 20px;
            border-radius: 50%;
            border: 2px solid rgba(220,53,69, 1);
            color: #fff;
            max-height: 50px;
            z-index: 2;
          }
          
          .how-it-works.row .col-2 {
            align-self: stretch;
          }
          .timeline hr::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50%;
            height: 3px;
            background: rgba(220,53,69, 1);
            z-index: 1;
          }
          .timeline hr::after {
            content: "";
            position: absolute;
            bottom: 0;
            right: 0;
            width: 50%;
            height: 3px;
            background: rgba(57,171,231, 1);
            z-index: 1;
          }
          
          .timeline div {
            padding: 0;
            height: 40px;
          }
          .timeline hr {
            opacity: 1;
            height: 2.5px;
            margin: 0;
            top: 17px;
            position: relative;
          }
          .timeline .col-2 {
            display: flex;
            overflow: hidden;
          }
          .timeline .corner {
            border: 3px solid rgba(220,53,69, 1);
            width: 100%;
            position: relative;
            border-radius: 15px;
          }
          .timeline .top-right {
            left: 50%;
           top: -52%;
          }
          .timeline .left-bottom {
            border-color: rgb(57,171,231);
            left: -50%;
            top: calc(50% - 3px);
          }
          .timeline .top-left {
            border-color: rgb(57,171,231);
            left: -50%;
             top: -53%;
          }
          .timeline .right-bottom {
            left: 50%;
            top: calc(50% - 3px);
          }

        `}
      </style>
    </Layout>
  );
}
