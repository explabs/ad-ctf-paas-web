import React from 'react';

import { Button, Container } from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import DescriptionIcon from '@mui/icons-material/Description';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Layout from '../components/Layout';
import Background from '../components/Background';

const DownloadButton = styled(Button)(() => ({
  ml: '2px',
  paddingBottom: '10px',
  background: 'transparent !important',
}));

const CodeBlock = styled(Typography)(() => ({
  'font-family': 'monospace',
  background: '#333333',
  display: 'inline-block',
  'align-items': 'center',
  padding: '5px 15px',
  'border-radius': '10px',
  marginTop: '10px',
  boxShadow: ' 0px 0px 15px 0px rgb(39 36 37)',
}));

export default function HomePage() {
  return (
    <Layout>
      <Background />

      <Container sx={{ minHeight: 'calc(100vh - 50px)', paddingTop: '48px', fontSize: '64px' }}>
        <Typography sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="span" color="#f44336" sx={{ fontFamily: '\'Lobster\', cursive' }}>
            Инстр
          </Typography>
          <Typography variant="h3" component="span" color="primary" sx={{ fontFamily: '\'Lobster\', cursive' }}>
            укция
          </Typography>
        </Typography>

        <Timeline sx={{ width: '70%', margin: '48px auto' }}>
          <TimelineItem sx={{ '&::before': { display: 'none' } }}>
            <TimelineSeparator>
              <TimelineDot color="red" variant="outlined" sx={{ boxShadow: '0px 0px 15px 0px rgb(201 26 48)' }}>
                <DescriptionIcon color="red" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h4" component="span" color="#f44336">
                Правила -
                <DownloadButton color="red" disableRipple>
                  <Typography variant="h5" sx={{ textTransform: 'none', borderBottom: '1px dashed #f44336' }} component="span" color="#f44336">
                    скачать
                  </Typography>
                </DownloadButton>
              </Typography>
              <Typography sx={{ pt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.
              </Typography>
              <CodeBlock>
                <span style={{ color: '#7ee787' }}>$</span>
                &nbsp;neofetch
              </CodeBlock>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem sx={{ '&::before': { display: 'none' } }}>
            <TimelineSeparator>
              <TimelineDot color="primary" sx={{ boxShadow: '0px 0px 15px 0px #39abe7' }}>
                <VpnLockIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h4" component="span" color="primary">
                VPN -
                <DownloadButton disableRipple>
                  <Typography variant="h5" sx={{ textTransform: 'none', borderBottom: '1px dashed #556cd6' }} component="span">
                    скачать
                  </Typography>
                </DownloadButton>
              </Typography>
              <Typography sx={{ pt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem sx={{ '&::before': { display: 'none' } }}>
            <TimelineSeparator>
              <TimelineDot color="red" variant="outlined" sx={{ boxShadow: '0px 0px 15px 0px rgb(201 26 48)' }}>
                <VpnKeyIcon color="red"/>
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h4" component="span" color="#f44336">
                SSH -
                <DownloadButton color="red" disableRipple>
                  <Typography variant="h5" sx={{ textTransform: 'none', borderBottom: '1px dashed #f44336' }} component="span" color="#f44336">
                    скачать
                  </Typography>
                </DownloadButton>
              </Typography>
              <Typography sx={{ pt: 1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere interdum lectus.
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Layout>
  );
}
