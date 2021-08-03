import React, {Component} from "react";
import Header from './Header';
import Footer from './Footer';
 
class Company extends Component {
    render(){
        return(
            <div className="container">
            <div className="row">
            <Header {...this.props}/>
           <div className="text-center">
           WELCOME TO INFOMERIT GROUP
           </div>
           <div>With over four decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey. We do it by enabling the enterprise with an AI-powered core that helps prioritize the execution of change. We also empower the business with agile digital at scale to deliver unprecedented levels of performance and customer delight. Our always-on learning agenda drives their continuous improvement through building and transferring digital skills, expertise, and ideas from our innovation ecosystem.</div>
           <img src={"https://www.infosys.com/content/dam/infosys-web/en/global-resource/banner-images/best-big-companies-work-for-2021-lead.jpg"} classname="company-img"/>
            <Footer {...this.props}/>
            
            </div>

            </div>
        )
    }
}
export default Company;