import axios from "axios";
import React, {Component} from "react";
import Header from './Header';

 
class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            postList:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            if(res.data){
                this.setState({postList:res.data})
            }
        } 

        )
    }
    render(){
        return(
            <div className="container-fluid">this page reveals all posts
            <Header  {...this.props} />
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.postList.map((data,index) => {
                            return(
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.title}</td>
                                    <td>{data.body}</td>
                                </tr>
                            )
                        }

                        )
                    }
                    </tbody>
                </table>

                
            </div>
            {/* <div className="row">
            {
                this.state.postList.map((data,index) => {
                    console.log(data);
                    return(
                        <div className="col-sm-3 mt-3">
                        <div className="card">
                        <div> {data.id} </div>
                        <div> {data.title} </div>
                        <div> {data.body} </div>
                         

                        </div>
                        </div>
                    )
                }

                )
            }
            </div> */}
            </div>

        )
    }
}
export default Post;