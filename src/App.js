import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
