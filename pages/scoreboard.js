import Layout from 'components/Layout';
import Background from 'components/Background';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Scoreboard } from '../src/features/scoreboard';

export default function ScorePage() {
  return (
    <Layout>
      <Background />

      <Container sx={{
        minHeight: 'calc(100vh - 50px)', paddingTop: '48px', pb: '48px',
      }}
      >
        <Scoreboard />
      </Container>

    </Layout>
  );
}
