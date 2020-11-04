import React, {Suspense} from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserContextProvider from './context/UserContext'

// import HomePage from './pages/HomePage'
// import TaskDetailPage from './pages/TaskDetailPage'
// import ProfilePage from './pages/ProfilePage'
// import LoginPage from './pages/LoginPage'
// import NotFoundPage from './pages/404'


const HomePage = React.lazy(() => import('./pages/HomePage'))
const TaskDetailPage = React.lazy(() => import('./pages/TaskDetailPage'))
const ProfilePage = React.lazy(() => import('./pages/ProfilePage'))
const LoginPage = React.lazy(() => import('./pages/LoginPage'))
const NotFoundPage = React.lazy(() => import('./pages/404'))


function App() {
  return (
    <UserContextProvider>
      <Router>
        <Layout>
          <Switch>
              <Suspense fallback={null} >
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
              </Suspense>
          </Switch>
        </Layout>
      </Router>
    </UserContextProvider>
  );
}

export default App;
