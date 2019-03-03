import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import PortDetail from './portDetail.js';


@inject("store")
@observer
export default class Home extends Component {
  render() {
    // const { ui } = this.props.store;

    
    return (
      <div ><Fragment >
        <nav className="navbar has-background-grey-darker"  aria-label="main navigation">
        <div class="navbar-brand">
              <a class="navbar-item has-text-white" >
                SecureMAP
              </a>

              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </nav>
          </Fragment>
          <section class="section-padding has-background-black-ter has-text-centered">
          <div class="content has-background-black-ter has-text-left" style={{"width":"80%","height":"10%","padding":"0%","padding-top":"1%"}}>
            <h1 class="has-text-primary" style={{"font-size":"40px"}}>SecureMAP</h1>
            <h4 class="has-text-primary" style={{"font-size":"20px"}}>A port scanner to find vulnerable ports</h4>
          </div>
          <div class="content" style={{"width":"80%" ,"padding":"0%"}}>
            <PortDetail />
          </div>
           
          
          </section>
          

        {/* <div className="box has-text-primary">Hello World {ui.hello}</div>
        <input
          value={ui.hello}
          onChange={e => {
            ui.hello = e.target.value;
          }}
        /> */}
        </div>
      
    );
  }
}
