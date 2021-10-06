import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { userService } from '../services';

export default function HomePage() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    setTeam(userService.team);
  });

  return (
    <Layout>
      {team && team.id}
    </Layout>
  );
}
