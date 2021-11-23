import Layout from '../components/Layout';
import { Container, Grid, Input } from '@mui/material';

export default function AdminPage() {
  const teams = [
    {
      id: 1,
      name: 'liveoverflow',
      total: 8,
      score: 2540,
    },
    {
      id: 2,
      name: 'R2D2',
      total: 6,
      score: 1900,
    },
    {
      id: 3,
      name: 'anonymous',
      total: 4,
      score: 650,
    },
    {
      id: 4,
      name: 'ashawe',
      total: 5,
      score: 550,
    },
  ];

  const records = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  return (
    <Layout>
      <Container>
        <Grid container>
          <Grid item xl={12}>
            <h1 className="display-1 bold text-center">
              <span className="text-danger">
                ADMIN
              </span>
              BOARD
              <span className="vim-caret">&nbsp;</span>
            </h1>
          </Grid>
        </Grid>
        <Grid container className="mt-5 justify-content-center">
          <Grid item >
            <table className="table-hover table-striped">
              <thead className="text-danger">
                <tr>
                  <th>#</th>
                  <th>Team Name</th>
                  <th># Challenges Solved</th>
                  <th>Ssh</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.id} className="text-white-50 border-0">
                    <th className="border-0" scope="row">{team.id}</th>
                    <td className="border-0">{team.name}</td>
                    <td className="border-0">{team.total}</td>
                    <td className="border-0"><a className="text-white" href="#">open</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        </Grid>
      </Container>

      <Container className="py-5 mb5">
        <h1 className="mb-5">Управление БД</h1>
        <Grid container>
          <Grid item md={3}>
            <form className="mb-3">
              <Input type="text" placeholder="Search" />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary">Search</button>
              </div>
            </form>
            {/*
            <ListGroup>
              <a href="#" className="list-group-item list-group-item-action active">Teams</a>
            </ListGroup>
            */}
          </Grid>
          <Grid item md={9}>
            <table>
              <thead className="text-light">
                <tr className="border-0">
                  <th scope="col">#</th>
                  <th scope="col">Record</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr id={record.id} className="border-0">
                    <th className="text-white-50 border-0" scope="row">{record.id}</th>
                    <td className="border-0">
                      <a href="#" className="d-flex align-items-center link-info nav-link p-0">
                        Some record in table
                      </a>
                    </td>
                    <td className="border-0">
                      <a href="#" className="btn btn-sm btn-primary bg-transparent text-primary my-1 my-sm-0 p-0 px-2">
                        Edit
                      </a>
                      <a href="#" className="btn btn-sm btn-danger bg-transparent text-danger my-1 my-sm-0 ms-2 p-0 px-2">
                        Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </Grid>
        </Grid>
      </Container>
      <style jsx>
        {`
          :global(header) {
            border-bottom: 1px solid rgba(220,53,69,0.8) !important;
          }
        `}
      </style>
    </Layout>
  );
}
