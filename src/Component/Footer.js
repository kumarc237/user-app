import React, {Component} from "react";
 
class Footer extends Component{
  handleFeaturesRoute=() =>{

    this.props.history.push('/features')
  }
  handlePricingRoute=() =>{
    this.props.history.push('/pricing')
  }
  handleCopyRoute=() =>{
    this.props.history.push('/sunk')
  }
    render(){
        return(
            <div className="w-100">
             <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#" onClick={this.handleFeaturesRoute}>
              features
            </a>
            <a class="nav-item nav-link" href="#" onClick={this.handlePricingRoute}>
              Pricing
            </a>
            <a class="nav-item nav-link active" href="#">
              Disabled
            </a>
            <a class="nav-item nav-link" href="#" onClick={this.handleCopyRoute}> 
            Sunk
            </a>

          </div>
        </div>
      </nav>
            </div>
        )
    }
}
export default Footer;