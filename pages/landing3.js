import React from 'react';

import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div className="container-fluid fixed-top header disable-selection">
        <div className="row">
          <div className="col" />
          <div className="col-md-6">
            <div className="row">
              <div className="col">
                <h1><strong>Lab City 3D</strong></h1>
                <p className="small">– Back to the red –</p>
              </div>
            </div>
          </div>
          <div className="col" />
        </div>
      </div>
    </Layout>
  );
}
