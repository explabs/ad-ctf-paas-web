import React, { useEffect, useState } from 'react';
import {
 Col, Container, Form, FormControl, InputGroup, ListGroup, Row, Table,
} from 'react-bootstrap';
import Layout from '../components/Layout';
import Particles from 'react-particles-js';

export default function ScorePage() {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const teams = [
    {
      id: 1,
      name: 'liveoverflow',
      total: 8,
    },
    {
      id: 2,
      name: 'R2D2',
      total: 6,
    },
    {
      id: 3,
      name: 'anonymous',
      total: 4,
    },
    {
      id: 4,
      name: 'ashawe',
      total: 5,
    },
  ];

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
      <Container>
        <Row>
          <Col xl={12}>
            <h1 className="display-1 bold text-center">
              <span className="text-danger">
                SCORE
              </span>
              BOARD
              <span className="vim-caret">&nbsp;</span>
            </h1>
            <p className="text-grey d-flex justify-content-center align-items-center lead">
              <svg width="16" height="16" viewBox="0 0 24 24" fillRule="evenodd" clipRule="evenodd" fill="white">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/>
              </svg>
              { minutes === 0 && seconds === 0
                ? <>not started</>
                : (
                  <span className="clock">
                    {' '}
                    {minutes}
                    :
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </span>
                )}
            </p>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col>
            <Table className="table-hover table-striped">
              <thead className="text-danger">
                <tr>
                  <th>#</th>
                  <th>Название команды</th>
                  <th># Флагов сдано</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.id} className="text-white-50 border-0">
                    <th className="border-0" scope="row">{team.id}</th>
                    <td className="border-0">{team.name}</td>
                    <td className="border-0">{team.total}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
                  svg {
                    margin-bottom: -3px;
                    flex: 0 0 3%;
                  }
                  .clock {
                     flex: 0 0 5%;
                  }
                `}
      </style>
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
    </Layout>
  );
}
