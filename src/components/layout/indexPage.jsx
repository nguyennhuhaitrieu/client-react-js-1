import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/header.css';
import HeaderForm from './HeaderForm';
import RemindNotification from '../notification/RemindNotification';
import FooterForm from './FooterForm';
import IndexForm from '../forms/IndexForm';
import MoviesForm from '../forms/MoviesForm';
import FilmBySTDetail from './FilmBySTDetail';
import NotFound from './NotFound';
import testForm from './testForm';
import RemindIndex from '../remindForm/remindIndex';

const IndexPage = () => (
  <>
    <HeaderForm />
    <div className="index-page-container">
      <RemindNotification />
      <Switch>
        <Route path="/home" component={IndexForm} exact />
        <Route
          path="/movies/:id" exact
          component={MoviesForm}
        />
        <Route
          path="/movies/level/:id" exact
          component={FilmBySTDetail}
        />
        <Route
          path="/movies/category/:id" exact
          component={FilmBySTDetail}
        />
        <Route path="/not-found" component={NotFound} exact />
        <Route path="/testVocabulary" exact component={testForm} />
        <Route path="/remind" exact component={RemindIndex} />
      </Switch>
    </div>
    <FooterForm />
    <div id="modal-root" className="modal-position" />
  </>
);
export default IndexPage;
