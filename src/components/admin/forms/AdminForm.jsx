// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HeaderForm from '../layout/HeaderForm';
import UserAdminForm from './UserAdminForm';
import NavbarForm from '../layout/NavbarForm';
import CategoryAdminForm from './CategoryAdminForm';
import GenresAdminForm from './GenresAdminForm';
import LevelAdminForm from './LevelAdminForm';
import NewUser from '../buttons/newUser';
import NewGenres from '../buttons/newGenres';
import NewLevel from '../buttons/newLevel';
import MoviesAdminForm from './MoviesAdminForm';
import NewMovies from '../buttons/newMovies';
import NewCategory from '../buttons/newCategory';
import EditCategory from '../buttons/editCategory';
import EditLevel from '../buttons/editLevel';
import EditGenres from '../buttons/editGenres';
import EditUser from '../buttons/editUser';
import EditMovies from '../buttons/editMovies';

import NewSubtitles from '../buttons/newSubtitles';
import EditSubtitles from '../buttons/editSubtitles';
import IndexAdmin from '../layout/indexAdmin';

import SubtitlesAdminForm from './SubtitlesAdminForm';
import '../../../styles/admin/header.css';
import '../../../styles/admin/user.css';

const AdminForm = () => (
  <div className="templatemo-flex-row">
    <NavbarForm />
    <div className="templatemo-content light-gray-bg">
      <HeaderForm />
      <Switch>
        <Route path="/admin/users" exact component={UserAdminForm} />
        <Route path="/admin" exact component={IndexAdmin} />
        <Route path="/admin/users/new" exact component={NewUser} />
        <Route path="/admin/users/:id/edit" exact component={EditUser} />
        <Route path="/admin/categories" exact component={CategoryAdminForm} />
        <Route path="/admin/category/new" exact component={NewCategory} />
        <Route path="/admin/category/:id/edit" exact component={EditCategory} />
        <Route path="/admin/genres" exact component={GenresAdminForm} />
        <Route path="/admin/genres/new" exact component={NewGenres} />
        <Route path="/admin/genres/:id/edit" exact component={EditGenres} />
        <Route path="/admin/levels" exact component={LevelAdminForm} />
        <Route path="/admin/levels/new" exact component={NewLevel} />
        <Route path="/admin/level/:id/edit" exact component={EditLevel} />
        <Route path="/admin/movies" exact component={MoviesAdminForm} />
        <Route path="/admin/movies/new" exact component={NewMovies} />
        <Route path="/admin/movies/:id/edit" exact component={EditMovies} />
        <Route path="/admin/subtitles" exact component={SubtitlesAdminForm} />
        <Route path="/admin/subtitles/new" exact component={NewSubtitles} />
        <Route path="/admin/subtitles/:id/edit" exact component={EditSubtitles} />
      </Switch>
    </div>
  </div>
);

export default AdminForm;
