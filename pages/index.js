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
          <Container sl={12}>
            <h1 className="display-1 bold text-center pt-2 pb-4">
              <span className="text-danger">
                INSTRUC
              </span>
              TIONS
              <span className="vim-caret">&nbsp;</span>
            </h1>
            <Row className="justify-content-center">
              <Col md={10}>
                <div className="row align-items-center how-it-works d-flex">
                  <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">1</div>
                  </div>
                  <div className="col-6">
                    <h5>Rules</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi
                      orci urna, iaculis in ligula et, posuere interdum lectus.
                    </p>
                  </div>
                </div>

                <div className="row timeline">
                  <div className="col-2">
                    <div className="corner top-right"/>
                  </div>
                  <div className="col-8">
                    <hr/>
                  </div>
                  <div className="col-2">
                    <div className="corner left-bottom" />
                  </div>
                </div>

                <div className="row align-items-center justify-content-end how-it-works d-flex">
                  <div className="col-6 text-right">
                    <h5>VPN - <a className="text-white" href="">download config</a></h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi
                      orci urna, iaculis in ligula et, posuere interdum lectus.
                    </p>
                  </div>
                  <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">2</div>
                  </div>
                </div>

                <div className="row timeline">
                  <div className="col-2">
                    <div className="corner right-bottom" />
                  </div>
                  <div className="col-8">
                    <hr/>
                  </div>
                  <div className="col-2">
                    <div className="corner top-left" />
                  </div>
                </div>

                <div className="row align-items-center how-it-works d-flex">
                  <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                    <div className="circle font-weight-bold">3</div>
                  </div>
                  <div className="col-6">
                    <h5>SSH</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. Morbi
                      orci urna, iaculis in ligula et, posuere interdum lectus.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
      </Container>
      <style jsx>
        {`
          :global(header) {
            border-bottom: 1px solid rgba(220,53,69,0.8) !important;
          }
          
          .circle {
            display: flex;
            justify-content: center;
            align-items: center;
          
            padding: 13px 20px;
            border-radius: 50%;
            border: 2px dashed rgba(220,53,69, 1);
            color: #fff;
            max-height: 50px;
            z-index: 2;
          }
          
          .how-it-works.row .col-2 {
            align-self: stretch;
          }
          .timeline hr::after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 3px;
            background: rgba(220,53,69, 1);
            z-index: 1;
          }
          
          .timeline div {
            padding: 0;
            height: 40px;
          }
          .timeline hr {
            opacity: 1;
            height: 2.5px;
            margin: 0;
            top: 17px;
            position: relative;
          }
          .timeline .col-2 {
            display: flex;
            overflow: hidden;
          }
          .timeline .corner {
            border: 3px solid rgba(220,53,69, 1);
            width: 100%;
            position: relative;
            border-radius: 15px;
          }
          .timeline .top-right {
            left: 50%;
           top: -52%;
          }
          .timeline .left-bottom {
            left: -50%;
            top: calc(50% - 3px);
          }
          .timeline .top-left {
            left: -50%;
             top: -53%;
          }
          .timeline .right-bottom {
            left: 50%;
            top: calc(50% - 3px);
          }

        `}
      </style>
    </Layout>
  );
}
