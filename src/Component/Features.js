import axios from "axios";
import React , {Component} from "react";
import Footer from './Footer';

class features extends Component {
    constructor(props){
        super(props);
        this.state={
            commentList:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res =>{
            console.log(res)
            if(res.data){
                this.setState({commentList:res.data})
            }
        }

        )
    }
    render() {
        return(
            <div>this is all about features and qualities
            <Footer  {...this.props}/>
            <div>
                <table className="table table-striped table-danger">
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>body</th>

                            
                        </tr>
                    </tbody>
                    <tbody>
                        {
                            this.state.commentList.map((data,index) =>{
                                return(
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
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
                    this.state.commentList.map((data,index) =>{
                        console.log(data);
                        return(
                            
                            <div className="col-sm-3 mt-3">
                             <div className="card" >
                                 <div> {data.id} </div>
                                 <div> {data.name} </div>
                                 <div> {data.email} </div>
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
export default features;