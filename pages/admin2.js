import React from 'react';

import { TeamList } from 'components/temp/team-list.component';
import { CompetitionComponent } from 'components/temp/competition.component';
import { UpdateVPN } from 'components/temp/update-vpn.component';
import { Registration } from '../components/temp/registration.component';
import Layout from '../components/Layout';

class HomePage extends React.Component {
  render() {
    return (
      <Layout>
        <TeamList/>
        <Registration/>
        <CompetitionComponent/>
        <UpdateVPN/>
      </Layout>
    );
  }
}

export default HomePage;
