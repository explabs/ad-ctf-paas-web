import Particles from 'react-particles-js';

export default function Background() {
  return (
    <>
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

      <style jsx>
        {`
          .page-bg, :global(#tsparticles) {
            position: fixed; 
            top: 72px;
            z-index: -1;
            left: 0;
            width: 100%;
            transition: all 0.5s linear;
            overflow: hidden;
            height: calc(100vh - 50px);
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
    </>
  );
}
