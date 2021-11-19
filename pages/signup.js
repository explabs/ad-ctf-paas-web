import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { userService } from 'services';

import Layout from 'components/Layout';
import Background from 'components/Background';
import { Button, Container, FormGroup, Grid, Input, InputLabel, TextareaAutosize } from '@mui/material';

function SignupPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [ssh, setSSH] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setLoading(true);
  });

  async function handleSubmit(event) {
    event.preventDefault();
    userService.register({ name, ssh_pub_key: ssh, password })
      .then(() => {
        router.push('login');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Layout>
      <Background />

      <Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid item md={8}>
            <div className="card-wrapper">
              <div style={{
                background: 'rgba(41, 41, 41, 0.9)', paddingLeft: '2em', paddingRight: '2em', paddingTop: '.5em',
              }}
              >
                <h3 style={{ marginBottom: 0, paddingBottom: '0.5rem' }}>Регистрация</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <Grid container sx={{ ml: 0, mr: 0 }}>
                  <Grid item md={6} style={{ paddingRight: 0, paddingLeft: 0, background: 'rgba(41, 41, 41, 0.9)' }}>
                    <FormGroup style={{ paddingLeft: '2em', paddingRight: '2em', paddingBottom: '1em' }}>
                      <InputLabel>Название команды</InputLabel>
                      <Input
                        type="text"
                        placeholder="mirea team"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup style={{ paddingLeft: '2em', paddingRight: '2em' }} >
                      <InputLabel>Пароль</InputLabel>
                      <Input
                        type="password"
                        placeholder="●●●●●●"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    sx={{
                      display: 'flex',
                      padding: 0,
                    }}
                  >
                    <FormGroup
                      sx={{
                        boxShadow: 'box-shadow: inset 0 0 20px 10px rgba(0, 0, 0, 0.6)',
                        background: 'rgba(41,41,41,0.5)',
                        padding: '15px 0 0 20px',
                        width: '100%',
                      }}
                    >
                      <div>
                        <InputLabel>Справка</InputLabel>
                        <ul className="faq">
                          <li className="faq-item">
                            <a className="faq-link" href="https://selectel.ru/blog/tutorials/how-to-generate-ssh/" >
                              &#62; Как сгенерировать SSH?
                            </a>
                          </li>
                          <li className="faq-item">
                            <a className="faq-link" href="https://selectel.ru/blog/tutorials/how-to-generate-ssh/" >
                              &#62; Правила
                            </a>
                          </li>
                          <li className="faq-item">
                            <a className="faq-link" href="https://selectel.ru/blog/tutorials/how-to-generate-ssh/" >
                              &#62; Пользовательское соглашение
                            </a>
                          </li>
                        </ul>
                      </div>
                    </FormGroup>
                    <div style={{ background: 'rgba(41, 41, 41, 0.9)', height: '100%', width: '2em' }} />
                  </Grid>
                </Grid>
                <FormGroup style={{ background: 'rgba(41, 41, 41, 0.9)', paddingLeft: '2em', paddingRight: '2em', paddingBottom: '1em' }}>
                  <InputLabel sx={{ paddingBottom: '1em' }}>SSH</InputLabel>
                  <TextareaAutosize
                    minRows={5}
                    placeholder="ssh-rsa …"
                    onChange={(e) => setSSH(e.target.value)}
                  />
                </FormGroup>
                <div style={{
                  background: 'rgba(41, 41, 41, 0.9)', paddingBottom: '1em', paddingRight: '2em', paddingLeft: '1.5em',
                }}
                >
                  <Button type="submit">Зарегестрироваться</Button>
                </div>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>

      <style jsx>
        {`
          :global(header) {
            opacity: 1;
          }

         .card-wrapper {
            width: 100%;
            position: relative;
            // background: rgba(#292929, 0.9);
         }

         :global(label) {
          color: rgba(255,255,255,0.6);
         }

         .faq {
          list-style: none;
          padding-left: 0.5rem;
         }

          .faq-item {
                margin-bottom: 0.5rem;
          }

         .faq-link {
            color: rgba(#fff, 0.8) !important;
            text-shadow:1px 1px 0 rgba(0, 0, 0,0.3);
            text-decoration: none;
            position: relative;
            border-bottom: 1px dashed rgba(#fff, 0.6);
         }

         :global(.form-control),
          :global(textarea) {
            background: transparent;
            color: rgba(255,255,255,0.6) !important;
            text-shadow:1px 1px 0 rgba(0, 0, 0,0.3);
            padding: 10px 15px !important;
            border: 1px solid rgba(255,255,255,0.4);
            border-radius: 5px;
            transition: all 0.1s ease-in-out;
            outline:none;
            &::placeholder {
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

export default SignupPage;
