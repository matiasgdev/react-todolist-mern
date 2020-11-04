import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContextProvider from './context/UserContext'

import HomePage from './pages/HomePage'
import TaskDetailPage from './pages/TaskDetailPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/404'

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Layout>
          <Switch>
            <Route
              exact path="/"
              component={HomePage}
            />
            <Route
              path="/perfil"
              component={ProfilePage}
            />
            <Route
              path="/identificarse"
              component={LoginPage}
            />
            <Route
              path="/tarea/:id"
              component={TaskDetailPage}
            />
            {/* handle 404 route */}
            <Route 
              path="*" 
              component={NotFoundPage}
            />
          </Switch>
        </Layout>
      </Router>
    </UserContextProvider>
  );
}

export default App;
