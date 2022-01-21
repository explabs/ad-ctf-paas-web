import { memo } from 'react';
import { Box } from '@mui/material';

function SplashScreen() {
  return (
    <Box
      sx={{
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#121212',
        zIndex: 99999,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          display: 'block',
          width: '100%',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Box
          sx={{
            display: 'block',
            position: 'relative',
            width: '100%',
            minHeight: '100px',
            height: '100px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              overflow: 'hidden',
              left: '50%',
              marginLeft: '-50px',
              animation: 'outer-rotate 2.91667s linear infinite',
            }}
          >
            <Box
              sx={{
                width: '100px',
                height: '100px',
                position: 'relative',
                animation: 'sporadic-rotate 5.25s cubic-bezier(0.35, 0, 0.25, 1) infinite',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: '49px',
                  right: '49px',
                  top: 0,
                  bottom: 0,
                  borderTop: '10px solid',
                  boxSizing: 'border-box',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '50px',
                  height: '100px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100px',
                    height: '100px',
                    boxSizing: 'border-box',
                    border: '10px solid #61DAFB',
                    borderBottomColor: 'transparent',
                    borderRightColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'left-wobble 1.3125s cubic-bezier(0.35, 0, 0.25, 1) infinite',
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '50px',
                  height: '100px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '100px',
                    height: '100px',
                    boxSizing: 'border-box',
                    border: '10px solid #61DAFB',
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'right-wobble 1.3125s cubic-bezier(0.35, 0, 0.25, 1) infinite',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <style>
        {`
          @keyframes outer-rotate {
            0% {
              transform: rotate(0deg) scale(0.5);
            }
            100% {
              transform: rotate(360deg) scale(0.5);
            }
          }
          
          @keyframes left-wobble {
            0%, 100% {
              transform: rotate(130deg);
            }
            50% {
              transform: rotate(-5deg);
            }
          }
          
          @keyframes right-wobble {
            0%, 100% {
              transform: rotate(-130deg);
            }
            50% {
              transform: rotate(5deg);
            }
          }
          
          @keyframes sporadic-rotate {
            12.5% {
              transform: rotate(135deg);
            }
            25% {
              transform: rotate(270deg);
            }
            37.5% {
              transform: rotate(405deg);
            }
            50% {
              transform: rotate(540deg);
            }
            62.5% {
              transform: rotate(675deg);
            }
            75% {
              transform: rotate(810deg);
            }
            87.5% {
              transform: rotate(945deg);
            }
            100% {
              transform: rotate(1080deg);
            }
          }

      `}
      </style>
    </Box>
  );
}

export default memo(SplashScreen);
