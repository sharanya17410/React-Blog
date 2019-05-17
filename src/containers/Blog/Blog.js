import React, {Component} from 'react';
import  axios from 'axios';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import Posts from '../Blog/Posts/Posts'
import './Blog.css';
import NewPost from '../Blog/NewPost/NewPost'
import FullPost from '../Blog/FullPost/FullPost'
class Blog extends Component {
    state={
        auth:false
    }
   
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to ="/posts">Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/newPost',
                                hash : '#submit'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={()=><h1>Home</h1>}>
                        
                </Route>
          */}
          <Switch>
            {this.state.auth?<Route path="/newPost" exact component ={NewPost}/>:null}   
            <Route path="/posts"  component ={Posts}/>         
            <Route render={()=> <h1>Not Found</h1>}></Route>
            
          </Switch>
        </div>
        );
    }
}

export default Blog;