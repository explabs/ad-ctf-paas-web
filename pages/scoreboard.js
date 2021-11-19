import React, { useEffect, useState } from 'react';

import Layout from 'components/Layout';
import Background from 'components/Background';
import { Avatar, Box, Chip, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

function renderPosition(position) {
  return (
    <Avatar sx={{ bgcolor: '#292D28', color: '#F9F9F9' }}>
      {position === 1 || position === 2 || position === 3 ? (
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.0909 12.1952C12.7654 12.1952 12.5009 11.9304 12.5 11.6029C12.4989 11.275 12.7628 11.0081 13.0892 11.0072C14.574 11.0026 15.9866 10.1016 17.0667 8.4703C18.1035 6.90453 18.7125 4.85691 18.8054 2.65151H16.2018C15.8753 2.65151 15.6107 2.3856 15.6107 2.05751C15.6107 1.72941 15.8753 1.4635 16.2018 1.4635H19.4089C19.7354 1.4635 20 1.72941 20 2.05751C20 4.71909 19.3078 7.23015 18.0511 9.1285C16.7455 11.1002 14.9847 12.1893 13.0929 12.1952C13.0923 12.1952 13.0917 12.1952 13.0909 12.1952Z" fill="#64D86B"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6.90907 12.1952C6.9083 12.1952 6.90784 12.1952 6.90722 12.1952C5.01544 12.1893 3.2545 11.1002 1.94904 9.1285C0.692215 7.23015 0 4.71909 0 2.05751C0 1.72941 0.264603 1.4635 0.591084 1.4635H3.79818C4.12466 1.4635 4.38926 1.72941 4.38926 2.05751C4.38926 2.3856 4.12466 2.65151 3.79818 2.65151H1.19464C1.28746 4.85691 1.89655 6.90453 2.93326 8.4703C4.01337 10.1016 5.42597 11.0026 6.91076 11.0072C7.23724 11.0081 7.50108 11.275 7.5 11.6029C7.49907 11.9304 7.23463 12.1951 6.90907 12.1952Z" fill="#64D86B"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M16.4236 6.10352e-05H4.07637C3.75817 6.10352e-05 3.5 0.258058 3.5 0.57639C3.5 3.96187 4.16388 7.15389 5.36915 9.56427C6.1414 11.1085 7.08581 12.2295 8.13018 12.8713V16.0091C8.13018 16.3274 8.38835 16.5854 8.70656 16.5854H11.7934C12.1118 16.5854 12.3698 16.3274 12.3698 16.0091V12.8713C13.4142 12.2296 14.3587 11.1085 15.1308 9.56427C16.3361 7.15389 17 3.96187 17 0.57639C17 0.258058 16.742 6.10352e-05 16.4236 6.10352e-05Z" fill="#A4F644"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.1983 16.0091V12.8713C13.2814 12.2296 14.2609 11.1085 15.0616 9.56427C16.3115 7.15389 17 3.96187 17 0.57639C17 0.258058 16.7324 6.10352e-05 16.4023 6.10352e-05H10V16.5854H11.6006C11.9308 16.5854 12.1983 16.3274 12.1983 16.0091Z" fill="#008F11"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M13.3625 15.6098H7.1375C5.95895 15.6098 5 16.5946 5 17.805V19.4033C5 19.7329 5.26017 20 5.58118 20H14.9188C15.2398 20 15.5 19.7329 15.5 19.4033V17.805C15.5 16.5946 14.5412 15.6098 13.3625 15.6098Z" fill="#008F11"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M13.2607 15.6098H10V20H14.8911C15.2274 20 15.5 19.7329 15.5 19.4033V17.805C15.5 16.5946 14.4955 15.6098 13.2607 15.6098Z" fill="#026702"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.4062 20.0001H4.5938C4.26597 20.0001 4 19.7817 4 19.5123C4 19.2429 4.26597 19.0245 4.5938 19.0245H15.4062C15.7342 19.0245 16 19.2429 16 19.5123C16 19.7817 15.7342 20.0001 15.4062 20.0001Z" fill="#00FF41"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M15.4062 19.0245H10V20.0001H15.4062C15.7342 20.0001 16 19.7817 16 19.5123C16 19.2429 15.7342 19.0245 15.4062 19.0245Z" fill="#008F11"/>
        </svg>
      ) : (position)}
    </Avatar>
  );
}

function renderService(service) {
  let hpColor = '#00FF19';
  if (service.health < 75) {
    hpColor = '#F8FD00';
  }
  if (service.health < 50) {
    hpColor = '#F98803';
  }
  if (service.health < 25) {
    hpColor = '#F40A0A';
  }

  let attacksColor;
  if (service.attacks > 5) {
    attacksColor = '#FF0935';
  } else if (service.attacks > 2) {
    attacksColor = '#FF8E1D';
  } else if (service.attacks > 0) {
    attacksColor = '#FFB023';
  } else {
    attacksColor = '#D4D4DC';
  }

  return (
    <Grid container>
      <Grid item md={6}>
        <Typography sx={{ color: attacksColor }}>
          {service.attacks}
          {' '}
          Loss
        </Typography>
        <Typography sx={{ color: hpColor }}>
          {service.health}
          /100 HP
        </Typography>
      </Grid>
      <Grid item md={6} sx={{ display: 'flex', justifyContent: 'cemter'}}>
        {service.sla >= 0 ? (
          <Chip size="small" label="&nbsp;&nbsp;up&nbsp;&nbsp;" />
        ) : (
          <Chip size="small" label="down" />
        )}
      </Grid>
    </Grid>
  );
}

const columns = [
  {
    id: 'id',
    label: '',
    component: 'th',
    scope: 'row',
    render: renderPosition,
  },
  {
    id: 'team',
    label: 'Команда',
    component: 'th',
    scope: 'row',
  },
  {
    id: 'score',
    label: 'Счет',
  },
  {
    id: 'service1',
    label: 'Service 1',
    render: renderService,
    isService: true,
  },
  {
    id: 'service2',
    label: 'Service 2',
    render: renderService,
    isService: true,
  },
  {
    id: 'service3',
    label: 'Service 3',
    render: renderService,
    isService: true,
  },
  {
    id: 'service4',
    label: 'Service 4',
    render: renderService,
    isService: true,
  },
];

function newServ(attacks, sla, health) {
  return {
    attacks, sla, health,
  };
}

function newTeam(id, team, score, service1, service2, service3, service4) {
  return {
    id, team, score, service1, service2, service3, service4,
  };
}

const rows = [
  newTeam(1, 'liveoverflow', 2352, newServ(2, 1, 78), newServ(0, 1, 90), newServ(0, 1, 90), newServ(0, 1, 90)),
  newTeam(2, 'R2D2', 2014, newServ(3, 0, 74), newServ(1, -1, 90), newServ(0, 1, 90), newServ(0, 1, 90)),
  newTeam(3, 'anonymous', 1954, newServ(5, 1, 48), newServ(1, 1, 90), newServ(0, 1, 90), newServ(0, 1, 90)),
  newTeam(4, 'ashawe', 1803, newServ(5, -1, 48), newServ(4, -1, 54), newServ(0, 1, 90), newServ(0, 1, 90)),
];

const upStyleBg = {
  background: 'linear-gradient(180deg, rgba(8, 230, 56, 0.125) 0%, rgba(21, 118, 42, 0) 100%)',
};

const downStyleBg = {
  background: 'linear-gradient(180deg, rgba(249, 18, 18, 0.125) 0%, rgba(31, 31, 31, 0) 100%)',
};

export default function ScorePage() {
  return (
    <Layout>
      <Background />

      <Container sx={{
        minHeight: 'calc(100vh - 50px)', paddingTop: '48px', pb: '48px', fontSize: '64px',
      }}
      >
        <Typography sx={{ mb: '24px', textAlign: 'center' }}>
          <Typography variant="h3" component="span" color="#f44336" sx={{ fontFamily: '\'Montserrat\'' }}>
            Score
          </Typography>
          <Typography variant="h3" component="span" color="primary" sx={{ fontFamily: '\'Montserrat\'' }}>
            board
          </Typography>
        </Typography>

        <Paper>
          <TableContainer>
            <Table stickyHeader sx={{ border: '1px solid rgba(81, 81, 81, 1)', borderBottom: 'none' }}>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} sx={{ backgroundColor: '#1F1F1F' }} align={column.align}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .map((row) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        let color = '#D4D4DC';
                        if (row.id === 1) {
                          color = '#FFD12B';
                        }
                        if (row.id === 2) {
                          color = '#C0C0C0';
                        }
                        if (row.id === 3) {
                          color = '#CD7F32';
                        }

                        return (
                          <TableCell
                            component={column.component}
                            scope={column.scope}
                            key={column.id}
                            align={column.align}
                            sx={{
                              color,
                              ...(column.isService && (value.sla > 0 ? upStyleBg : downStyleBg)),
                            }}
                          >
                            {column.render
                              ? column.render(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

      </Container>

    </Layout>
  );
}
