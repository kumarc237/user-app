import React , {Component} from "react";
import Header from './Header';
import axios from 'axios';

class User extends  Component{
    constructor(props){
        super(props);
        this.state={
            userList:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res )
            if(res.data){
                this.setState({userList:res.data})
            }
        })
    }

    render (){
        return(
            <div className="container-fluid"> this is user specified page
             <Header  {...this.props} /> 
             <div>
                 <table className="table table-bordered table-dark">
                     <tbody>
                         <tr>
                             <th>id</th>
                             <th>Name</th>
                             <th>userName</th>
                             <th>email</th>
                             <th>address</th>

                         </tr>
                     </tbody>
                     <tbody>
                         {
                             this.state.userList.map((data,index) => {
                                 return(
                                    <tr>
                                    <td>{data.id}</td>
                                    <td> {data.name} </td>
                                    <td> {data.username}</td>
                                    <td> {data.email}</td>
                                    <td>  {data.address.city +"," + data.address.street+data.address.suite }   </td>

                                </tr>
                                 )
                             })
                         }
                     </tbody>
                 </table>
             </div>
             {/* <div className="row" >
            {
                this.state.userList.map((data,index) => {
                    console.log(data);
                    return(

                        <div className="col-sm-4 mt-4">
                        <div className=" card">
                           <div> {data.id} </div>
                           <div> {data.name} </div>
                           <div> {data.username} </div>
                           <div> {data.email} </div>
                           <div> {data.address.street}</div>
                           <div> {data.address.city}</div>
                           <div> {data.website}</div>
                           <div> {data.address.suite}</div>

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
export default User;