import React from 'react';

import { Button, Container } from '@mui/material';

import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Layout from '../components/Layout';
import Background from '../components/Background';

const T1 = styled(Typography)`
  font-size: 48px;
  font-family: sans-serif;
  letter-spacing: .3em;
  font-weight: 300;
`;

const T2 = styled(Typography)`
  font-size: 84px;
  font-family: sans-serif;
  font-weight: 900;
  line-height: 80px;
`;

export default function HomePage() {
  return (
    <Layout>
      <Background />

      <Container maxWidth="LG" sx={{ minHeight: 'calc(100vh - 50px)', paddingTop: '48px', fontSize: '64px' }}>
        <T1>
          ETHICAL
        </T1>
        <T2>
          HACKING
        </T2>
        <img
          style={{
            filter: 'grayscale(100%)',
            opacity: '.75',
            marginTop: '-100px',
            marginLeft: '150px',
          }}
          src="/hacker.png"
        />
      </Container>
    </Layout>
  );
}
