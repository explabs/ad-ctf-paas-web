import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

function Generate() {
  return (
    <>
      <form>
        {/*
                <Form.Check
                    label="Checkers"
                    name="group1"
                    type="checkbox"
                    id="checkers"
                />
                <Form.Check
                    label="News"
                    name="group1"
                    type="checkbox"
                    id="news"
                />
                <Form.Check
                    label="Exploits"
                    name="group1"
                    type="checkbox"
                    id="exploits"
                />
              */}
      </form>
      <ButtonGroup size="sm">
        <Button variant="outline" size="sm">Autogenerate Prometheus Config</Button>
        <Button variant="outline" size="sm">Generate & Run</Button>
      </ButtonGroup>
    </>
  );
}

export default Generate;
