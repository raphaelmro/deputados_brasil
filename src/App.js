import React from 'react';
import { Container, Menu, Image } from 'semantic-ui-react'


function App() {
  return (
      <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' style={{ marginRight: '1.5em' }} />
          Fareja Despesas - Câmara Federal
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default App;
