import axios from "axios";
import React , {Component} from "react";
import Footer from "./Footer";

class Pricing extends Component{
    constructor(props){
        super(props);
        this.state={
            photoList:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            console.log(res)
            if(res.data){
                console.log("test");
                this.setState({photoList:res.data})

            }
        }

        )
    }
    render(){
        console.log(this.state.photoList)
        return (
            <div>this reveals all slabs of pricing
             <Footer  {...this.props}/> 
             <div>
                 <table className="table table-bordered table-dark">
                     <tbody>
                         <tr>
                             <th>id</th>
                             <th>title</th>
                             <th>url</th>
                             <th>thumbnailUrl</th>
                         </tr>
                     </tbody>
                     <tbody>
                         {
                             this.state.photoList.map((data,index) =>{
                                 return(
                                     <tr>
                                         <td>{data.id}</td>
                                         <td>{data.title}</td>
                                         <td><img src={data.thumbnailUrl} /></td>
                                         <td><img src={data.thumbnailUrl} /></td>

                                         
                                          
                                         
                                         
                                     </tr>
                                 )
                             }

                             )
                         }
                     </tbody>
                 </table>
             </div>
                
             </div>
        )
    }
}
export default Pricing;