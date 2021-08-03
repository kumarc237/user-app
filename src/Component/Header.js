import React, {Component} from "react";
 
class Header extends Component {
    
    handleHomeRoute= () =>{

        this.props.history.push('/')
    }
    handleUserRoute=() =>{
        this.props.history.push('/user')
    }
    handleSignUpRoute = () =>{
      
        this.props.history.push('/post')
    }
    handleRegisterRoute=() =>{
        this.props.history.push("/career")
    }
    handleSubmitRoute=() =>{
        this.props.history.push("/job openings")
    }
    handleCancelRoute=() =>{
      this.props.history.push("/contact us")
    }
    render (){
        return(
            <div className="w-100">
                <nav class="navbar navbar-expand-lg navbar-dark bg-info">
          <a class="navbar-brand" href="#">
           INFOMERIT
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#"  onClick={this.handleHomeRoute}>
                Home <span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#" onClick={this.handleUserRoute}>
                user
              </a>
              <a class="nav-item nav-link" href="#" onClick={this.handleSignUpRoute}>
                post
              </a>
              <a class="nav-item nav-link " href="#" onClick={this.handleRegisterRoute}>
                career
              </a>
              <a class="nav-item nav-link " href="#" onClick={this.handleSubmitRoute}>
                  job openings
              </a>
              <a class="nav-item nav-link " href="#" onClick={this.handleCancelRoute}>
                contact us
                </a>

            </div>
          </div>
        </nav> 
            </div>
        )

    }
}
export default Header;