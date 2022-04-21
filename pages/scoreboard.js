import Layout from 'components/Layout';
import Background from 'components/Background';
import { Container } from '@mui/material';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Scoreboard } from '../src/features/scoreboard';

export default function ScorePage() {
  const [data, setData] = useState();

  async function getRequest() {
    try {
      const a = await axios.get(
        'http://api.potee.local/api/v1/scoreboard',
      );
      setData(a.data.scoreboard);
    } catch (e) {
      // ...
    }
  }

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <Layout>
      <Background />

      <Container sx={{
        minHeight: 'calc(100vh - 50px)', paddingTop: '48px', pb: '48px',
      }}
      >
        <Scoreboard teams={data} />
      </Container>

    </Layout>
  );
}
