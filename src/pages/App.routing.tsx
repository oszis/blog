import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import '../App.css';

const PostsPage = React.lazy(() => import('./posts/Posts'));
const PostPage = React.lazy(() => import('./post/Post'));

function App() {
    return (
        <Router>
            <React.Suspense fallback={<div>loading...</div>}>
                <Switch>
                    <Route path='/' component={PostsPage} exact/>
                    <Route path='/posts' component={PostsPage} exact/>
                    <Route path='/posts/:page' component={PostsPage}/>
                    <Route path='/post/:id' component={PostPage}/>
                    <Route path='*'>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default App;
