import React, {
  useRef, useEffect, useState, memo,
} from 'react';
import {
  Button, Col, Container, Form, Row,
} from 'react-bootstrap';
import Confetti from 'react-confetti';
import Layout from '../components/Layout';
import { flagsService } from '../services/flags.service';

const COLORS = ['#2ecc71', '#3498db', '#e67e22', '#e67e22', '#e74c3c'];
// const TOP_OFFSET = window.innerHeight;
const LEFT_OFFSET = 150;

const randomNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

const randomColor = () => COLORS[randomNumber(0, COLORS.length)];

const Particle = ({ children, size }) => {
  const ref = useRef();
  const child = React.Children.only(children);
  const top = randomNumber(-200, -size[1]);

  useEffect(() => {
    ref.current.style.setProperty('--x', `${randomNumber(-LEFT_OFFSET, LEFT_OFFSET)}px`);
    ref.current.style.setProperty('--y', `${window.innerHeight - top + randomNumber(0, 300)}px`);
    ref.current.style.setProperty('--rotate', `${randomNumber(200, 3000)}deg`);
  }, []);

  return React.cloneElement(child, {
    ref,
    style: {
      '--color': randomColor(),
      '--size': `${randomNumber(...size)}px`,
      '--rotate': '0deg',
      '--x': '0px',
      '--y': '0px',
      top,
      left: randomNumber(0, window.innerWidth),
    },
  });
};

const CircularParticle = () => (
  <Particle size={[5, 10]}>
    <div className="particle circular"/>
  </Particle>
);

const RectangularParticle = () => (
  <Particle size={[5, 10]}>
    <div className="particle rectangular"/>
  </Particle>
);

const SquiggleParticle = () => (
  <Particle size={[15, 45]}>
    <svg
      className="particle squiggle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 200"
    >
      <path d="M15 0 Q 30 25 15 50 Q 0 75 15 100 Q 30 125 15 150 Q 0 175 15 200"/>
    </svg>
  </Particle>
);

const Particles = memo(({ count: n }) => {
  const particles = [];
  const types = [SquiggleParticle, RectangularParticle, CircularParticle];

  while (n--) {
    const particle = types[randomNumber(0, 3)];
    particles.push(
      <particle key={n}/>,
    );
  }

  return (
    <div className="particles">
      {particles}
    </div>
  );
});

export default function FlagPage() {
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState('');

  useEffect(() => {
    setLoading(true);
  });

  async function handleSubmit(event) {
    event.preventDefault();
    return flagsService.submit(flag)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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

      <Container className="d-flex justify-content-center align-items-center">
        <Row className="d-flex justify-content-center align-items-center w-100">
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Confetti
              width={100}
              height={150}
            />
            <div className="card-wrapper w-100">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formFlag" className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="{my-awesome-flag}"
                    onChange={(e) => setFlag(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit">Сдать флаг</Button>
              </Form>
            </div>
          </Col>
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
            opacity: 1;
          }

         .card-wrapper {
            width: 100%;
            padding: 2em;
            border-radius: 25px;
            position: relative;
            background: rgba(#292929, 0.9);
         }
         
         :global(.form-control) {
         text-align: center;
            background: transparent;
            color: rgba(255,255,255,0.6) !important;
            text-shadow:1px 1px 0 rgba(0, 0, 0,0.3);
            padding: 10px 20px !important;
            border: 1px dashed rgba(255,255,255,0.3);
            border-radius: 0;
            transition: all 0.1s ease-in-out;
            outline:none;
            &::placeholder {
         text-align: center;
              color: rgba(255,255,255,0.3);
            }
            &:focus {
              border: 1px solid #39abe7;
              background:rgba(0, 0, 0, 0.1);
              outline:none;
              box-shadow: none;
              
              &::placeholder {
                color: rgba(255,255,255,0.4);
              }
            }
         }
         
         :global(.btn) {
            display: inline-block;
            position: relative;
            
            width: 100%;
          
            letter-spacing: 0.05rem;
          
            padding: 10px 20px;
          
            text-decoration: none;
            text-transform: uppercase;
          
            overflow: hidden;
          
            border-radius: 5px;
          
            background: transparent;
            color: #39abe7;
            border: 1px solid #39abe7;
          
            transition: all 0.1s linear;
          
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
          
            font-weight: 600;
            font-size: 14px;
            line-height: 165%;
          
            &:hover {
              background: transparent;
              border: 1px solid rgba(255, 255, 255, 0.75);
              color: rgba(255, 255, 255, 0.75);
            }
         }
         
      `}
      </style>
    </Layout>
  );
}
