import { Switch, Route } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import NotFoundView from 'views/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/"></Route>

        <Route path="/movies"></Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}
