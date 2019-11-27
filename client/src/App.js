import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Responsive } from "semantic-ui-react";
import Home from "./pages/home";
import AllWines from "./pages/allwines";
import Sort from "./pages/sort";
import Admin from "./pages/admin";
import Producers from "./pages/producers";
import AboutUs from "./pages/aboutus";
import Login from "./pages/login";
import AuthService from './components/login/AuthService';
import DesktopContainer from "./components/common/DesktopContainer/DesktopContainer";
import MobileContainer from "./components/common/MobileContainer/MobileContainer";
import Footer from "./components/common/Footer/foot2";
import OneWine from "./pages/onewine";
import OneProducer from "./pages/oneproducer";
import OtherHeading from "./components/Homepage/HomeHeading/OtherHeading";
import ErrorPage from "./pages/errorpage";
import Hiram from "./pages/hiram";
import Greenwood from "./pages/greenwood";
import EventsTable from "./pages/events";
import "./App.css";



const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
    <MobileContainer getWidth={getWidth}>{children}</MobileContainer>
  </div>
)

const authService = new AuthService();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    // sessionStorage.setItem('referrer', window.location.pathname);
    return (
    authService.loggedIn()
      ? <Component {...props} />
      : <Redirect to='/login' />
    )}
  } />
)

class App extends Component {

  state = {
    wines: [],
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.location !== this.props.location) {
  //     this.setState({ prevPath: this.props.location })
  //   }
  // }

  render() {
    // console.log('is logged in', authService.loggedIn());
    return (
        <Router >
          <ResponsiveContainer>
            <OtherHeading />
            <PageSwitch />
            <Footer />
          </ResponsiveContainer>
        </Router>
    );
  }
}

const PageSwitch = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/allwines" component={AllWines} />
      <Route path="/sort" component={Sort} />
      <PrivateRoute path="/admin" component={Admin} />
      <Route path="/details/:id" key={window.location.pathname} component={OneWine} />
      <Route path="/producers" component={Producers} />
      <Route path="/producerdetails/:id" component={OneProducer} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/hiram" component={Hiram} />
      <Route path="/greenwood" component={Greenwood} />
      <Route path="/login" component={Login}/>
      <Route path="/events" component={EventsTable}/>
      <Route path="*" component={ErrorPage} />
    </Switch>
  )
}


export default App;