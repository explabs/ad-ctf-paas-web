import { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Layout from '../components/Layout';
import { userService } from '../services';

export default function HomePage() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    setTeam(userService.team);
  });

  return (
    <Layout>
      <Container style={{ minHeight: 'calc(100vh - 72px - 50px)' }}>
        <Row>
          <Col sl={12}>
            <h1 className="display-1 bold text-center pt-2">
              <span className="text-danger">
                INSTRUC
              </span>
              TIONS
              <span className="vim-caret">&nbsp;</span>
            </h1>
            <Row className="justify-content-center">
              <Col md={10}>
                <h5 className="bold pt-2">
                  Общие правила и инструкции
                </h5>
                <ul>
                  <li>
                    Когда начнется CTF, на атаку и защиту будет выделено
                    <b> N </b>
                    минут.
                  </li>
                  <li>
                    Вы можете узнать ваше место на странице таблицы лидеров.
                    Время в таблице лидеров обновляется каждый раз, после сдачи флага.
                  </li>
                  <li>...</li>
                  <li>...</li>
                  <li>...</li>
                  <li>
                    Найденные флаги имеют формат
                    <span className="vim-caret">
                      {' '}
                      ctf_
                      {'{'}
                      some_text
                      {'}'}
                      .
                    </span>
                    {' '}
                  </li>
                </ul>
                <h5 className="bold pt-3">
                  Особые правила и инструкции
                </h5>
                <ul>
                  <li>
                    Выполнение атак типа «отказ в обслуживании» на сервере приведет к дисквалификации.
                    Вас просили играть этично.
                  </li>
                  <li>Брутфорс-атаки на форму флага запрещены.</li>
                </ul>
                <div className="row text-center pt-3">
                  <div className="d-flex flex-column col-xl-12">
                    <button type="button" className="btn btn-outline-danger btn-shadow px-3 my-2 ml-0 ml-sm-1 d-flex align-items-center justify-content-center">
                      <h4 className="m-1">LET THE HACKING BEGIN!</h4>
                    </button>
                    <small className="mt-2 form-text text-muted">
                      Мы ожидаем, что каждый из вас будет соблюдать правила. Невыполнение этого требования может привести к перманентной дисквалификации.
                    </small>
                  </div>
                </div>
              </Col>
            </Row>
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
