import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import {Link,Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost'
import './Posts.css'
class Posts extends Component{
    state={
        posts:[]
    }
     
    componentDidMount(){
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                const posts=response.data.slice(0,4);
                const updatedPosts=posts.map(posts=>{
                    return {
                        ...posts,
                        author : 'Max'
                    }
                })
                
                console.log(response);
                this.setState({
                    posts:updatedPosts
                })
            }).catch(error=>{
               // this.setState({error:true});
               console.log(error);
            });;
    }

    fullPostUpdateHandler=(id)=>{
        this.props.history.push({pathname : '/'+id});
    }
    render(){
        let posts=<p>Something went wrong</p>
        if(!this.state.error){
         posts = this.state.posts.map(post=>{
            return (//<Link to={'/'+post.id}  >
                        <Post  
                            key={post.id}                           
                            title={post.title} 
                            author={post.author} 
                            clicked={()=>this.fullPostUpdateHandler(post.id)}/>
                    //</Link>
                    );
        });
    }
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" exact component ={FullPost}/>
            </div>
        );
    }
}

export default Posts;