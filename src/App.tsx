import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import MTGPost from './pages/containers/MTGPost';
import PokemonPost from './pages/containers/PokemonPost';
import Menu from './pages/Menu';
import UserPosts from './pages/UserPosts';
import MyProfile from './pages/MyProfile';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import UserList from './pages/UserList';
import ImageUpload from './pages/ImageUpload';
import CardPosts from './pages/CardPosts';
import ProfilePosts from './pages/ProfilePosts';
import MTGCard from './pages/MTGCard';

const App: React.FC  = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={UserProfile} />
        <Route path="/myProfile/:id" component={MyProfile} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/mtg" component={MTGPost}/>
        <Route path="/pokemon-add" component={PokemonPost} />
        <Route path="/menu" component={Menu} />
        <Route path="/users-posts" component={UserPosts} />
        <Route path="/users-list" component={UserList} />
        <Route path="/image" component={ImageUpload} />
        <Route path="/cardposts/:id"  component={MTGCard} />
        <Route path="/cardposts" component={CardPosts} />
        <Route path="/profileposts" component={ProfilePosts} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
