import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { teamService } from '../services';

export default function HomePage() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    setTeam(teamService.team);
  });

  return (
    <Layout>
      {team && team.id}
    </Layout>
  );
}
