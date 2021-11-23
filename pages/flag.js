import React, {
  useRef, useEffect, useState, memo,
} from 'react';
import Confetti from 'react-confetti';
import Layout from '../components/Layout';
import Background from '../components/Background';
import { Button, Container, Grid, Input } from '@mui/material';


export default function FlagPage() {
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState('');

  useEffect(() => {
    setLoading(true);
  });

  async function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Layout>
      <Background />

      <Container className="d-flex justify-content-center align-items-center">
        <Grid container className="d-flex justify-content-center align-items-center w-100">
          <Grid item md={4} className="d-flex justify-content-center align-items-center">
            <Confetti
              width={100}
              height={150}
            />
            <div className="card-wrapper w-100">
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  placeholder="{my-awesome-flag}"
                  onChange={(e) => setFlag(e.target.value)}
                />
                <Button type="submit">Сдать флаг</Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
