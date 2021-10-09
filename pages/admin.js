import { useEffect, useState } from 'react';
import {
  Badge,
  Button, Card, Col, Container, Form, FormControl, InputGroup, ListGroup, Row, Table,
} from 'react-bootstrap';
import Layout from '../components/Layout';

const DownloadButton = () => (
  <>
    <span className="btn file-input-button">
      <label htmlFor="file-upload" className="file-upload">
        <svg className="icon" width={18} height={18} viewBox="0 0 15 15" fill="#39abe7">
          <g clipPath="url(#clip0)">
            <path d="M7.5 10.625C7.24125 10.625 7.03125 10.415 7.03125 10.1563V0.46875C7.03125 0.209999 7.24125 0 7.5 0C7.75875 0 7.96875 0.209999 7.96875 0.46875V10.1563C7.96875 10.415 7.75875 10.625 7.5 10.625Z" />
            <path d="M7.49985 10.6255C7.3798 10.6255 7.25986 10.5799 7.16854 10.488L4.66858 7.98801C4.48547 7.80491 4.48547 7.50805 4.66858 7.32483C4.85168 7.14172 5.14854 7.14172 5.33176 7.32483L7.50042 9.4936L9.66919 7.32483C9.85229 7.14172 10.1493 7.14172 10.3324 7.32483C10.5155 7.50805 10.5155 7.80491 10.3324 7.98801L7.8323 10.488C7.73983 10.5799 7.6199 10.6255 7.49985 10.6255Z" />
            <path d="M13.2812 15H1.71879C0.770645 15 0 14.2294 0 13.2812V10.4687C0 10.21 0.209999 10 0.46875 10C0.727501 10 0.9375 10.21 0.9375 10.4687V13.2812C0.9375 13.7119 1.28815 14.0625 1.71879 14.0625H13.2812C13.7119 14.0625 14.0625 13.7119 14.0625 13.2812V10.4687C14.0625 10.21 14.2725 10 14.5312 10C14.79 10 15 10.21 15 10.4687V13.2812C15 14.2294 14.2294 15 13.2812 15Z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="15" height="15" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span className="ms-3">Загрузить</span>
      </label>
      <input id="file-upload" type="file" name="files" multiple />
    </span>
    <style jsx>
      {`
              .file-input-button {
                border: 2px dashed #39abe7;
                color: #39abe7;
              }
              input[type="file"] {
                display: none;
              }
              .file-upload {
                display: inline-block;
                padding: 6px 12px;
                cursor: pointer;
              }
            `}
    </style>
  </>
);

export default function AdminPage() {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

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
        <Row>
          <Col xl={12}>
            <h1 className="display-1 bold text-center">
              <span className="text-danger">
                ADMIN
              </span>
              BOARD
              <span className="vim-caret">&nbsp;</span>
            </h1>
            <p className="text-grey lead text-center">
              left:
              { minutes === 0 && seconds === 0
                ? <>not started</>
                : (
                  <>
                    {' '}
                    {minutes}
                    :
                    {seconds < 10 ? `0${seconds}` : seconds}
                  </>
                )}
            </p>
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col>
            <Table className="table-hover table-striped">
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
                    <td className="border-0"><a href="#">open</a></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Container className="py-5 mb5">
        <h1 className="mb-5">Управление БД</h1>
        <Row>
          <Col md={3}>
            <form className="mb-3">
              <InputGroup>
                <FormControl type="text" placeholder="Search" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-primary">Search</button>
                </div>
              </InputGroup>
            </form>
            {/*
            <ListGroup>
              <a href="#" className="list-group-item list-group-item-action active">Teams</a>
            </ListGroup>
            */}
          </Col>
          <Col md={9}>
            <Table>
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
            </Table>

          </Col>
        </Row>
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
