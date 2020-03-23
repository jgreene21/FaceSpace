import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AccountProfile from './components/AccountProfile';
import { Container, Grid, Image, Header, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';
import Avatar1 from "./components/Avatar-Maker (1).png";
import Avatar2 from "./components/Avatar-Maker (2).png";
import Avatar3 from "./components/Avatar-Maker.png";
import Avatar4 from "./components/Avatar-Maker (4).png";
import Avatar5 from "./components/Avatar-Maker (5).png";
import Avatar6 from "./components/Avatar-Maker (6).png";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' render={() => 
        <>
        <Header size="huge" color= "blue">Welcome to FaceSpace</Header>
        <Header size="medium" color="green">your space to meet some new faces</Header>
        <hr/>
        <Grid columns='three' divided>
    <Grid.Row>
      <Grid.Column>
        <Image src={Avatar4} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Avatar2} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Avatar6} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src={Avatar1} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Avatar5} />
      </Grid.Column>
      <Grid.Column>
        <Image src={Avatar3} />
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <hr/>
    <Header size="medium" color="pink">helping you to be social, while social distancing.</Header>
    <br/>
    <br/> 
    </>
        } />
        <Route exact path='/account/profile' render={() => <AccountProfile />} />
      </Switch>
    </Container>
  </>
)

export default App;
