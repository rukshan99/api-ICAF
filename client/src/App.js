import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MainNavigation from './Shared/Navigation/MainNavigation';
import SignIn from './User/pages/SignIn';
import Panel from './Editor/panel';
import Conference from './Editor/create-conference';
import ViewConference from './Editor/view-conference';
import UpdateConference from './Editor/update-conference';
import Workshops from './Editor/presentations-workshops';
import Home from './Home/home';
import Presentation from './Editor/presentation';
import Profile from './User/pages/profile';

import { Role } from './_helpers/role';
import { PrivateRoute } from './_helpers/private-route';
import { authenticationService } from './services/authentication-service';
import Footer from './Home/footer';
import Downloads from './downloads/downloads';
import Dashboard from './Admin/pages/Dashboard';
import ConferenceDetails from './Admin/Components/conferenceDetails/conferenceDetails';
import Approved from './Admin/Components/aprrovedConference/approvedConference';
import PresentationDetails from './Admin/Components/presentationsDetails/presentationDetails';
import WorkshopsDetails from './Admin/Components/workshopsDetails/workshopsDetails';
import Researcher from './Reviewer/pages/researchersList';
import WorkshopPresenter from './Reviewer/pages/presentersList'
import researcherDocument from './Reviewer/pages/documentViewResercher';
import presenterDocument from './Reviewer/pages/documentViewPresenter'

const App = () => {
  let currentUser = null;
  authenticationService.currentUser.subscribe(user => currentUser = user);
  const routes = currentUser ? (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/downloads" exact >
        <Downloads />
      </Route>
      <PrivateRoute path="/profile" component={Profile} />
      <Route path="/editor">
        <Panel />
      </Route>
      <Route path="/conference">
        <Conference />
      </Route>
      <Route path="/viewConferences">
        <ViewConference />
      </Route>
      <Route path="/updateConference/:id" component={UpdateConference}>
      </Route>
      <Route path="/presentation">
        <Presentation />
      </Route>
      <Route path="/workshops/:id" component={Workshops}>
      </Route>
      <Route path="/admin">
        <Dashboard />
      </Route>
      <Route path="/conferenceDetails/:id">
        <ConferenceDetails />
      </Route>
      <Route path="/approvedConference/:id" component={Approved}>
      </Route>
      <Route path="/presentationDetails/:id" component={PresentationDetails}>
      </Route>
      <Route path="/workshopsDetails/:id" component={WorkshopsDetails}>
      </Route>
      <Route path="/researchersList">
        <Researcher />
      </Route>
      <Route path="/workshopPresentersList">
        <WorkshopPresenter />
      </Route>
      <Route path="/researcher/:id" component={researcherDocument} />
      <Route path="/presenter/:id" component={presenterDocument} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/downloads" exact>
        <Downloads />
      </Route>
      <Route path="/auth">
        <SignIn />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
      <Footer />
    </Router>

  );
};

export default App;