import React, {Component} from 'react';
import axios from 'axios';
import Chart from 'chart.js';


class PortDetail extends Component  {
     constructor(props){
        super(props);
        
        this.state= {
        //  openCount:3,
        //  closeCount:1,
        //  filterCount:1,
         
         openPorts : [],
         
         closePorts : [],
         filterPorts : [],
         ports: {},
          
       }
       this.sortObject = this.sortObject.bind(this);
     
      }
      
    
    sortObject()
    {       const open=[]
            const closed =[]
            const filter = []
            Object.entries(this.state.ports.tcp).map(([key, value], i) => {
            var {state} = value;
            
			if(state==='open'){
                
                return open.push({key, value});
                
                //  this.setState(prevState => ({
                //     openPorts: [...prevState.openPorts,]
                //   }))
                //   return console.log(this.state.openPorts)
                
            }
            else if(state==='closed')
            {   return closed.push({key,value})
               
            }
            else if(state==='filtered')
            {
                return filter.push({key,value})
                  
            }
        });
        this.setState({openPorts : open})
        
        this.setState({closePorts: closed})
        
        this.setState({filterPorts: filter})
    }
    _renderOpenObject(){
		return Object.entries(this.state.openPorts).map(([key, value], i) => {
			return (
				<div key={key}  >
					
					<h4 style={{"color":"white","font":"roboto"}}>Port Number {value.key} : {value.value.name} </h4>
				</div>
			)
		})
    }
    _renderCloseObject(){
		return Object.entries(this.state.closePorts).map(([key, value], i) => {
			return (
				<div key={key}  >
					
					<h4 style={{"color":"white","font":"roboto"}}>Port Number {value.key} : {value.value.name} </h4>
				</div>
			)
		})
    }
    _renderFilterObject(){
		return Object.entries(this.state.filterPorts).map(([key, value], i) => {
			return (
				<div key={key}  >
					
					<h4 style={{"color":"white","font":"roboto"}}>Port Number {value.key} : {value.value.name} </h4>
				</div>
			)
		})
    }
    componentDidMount() {
        
      }
    // handleErrors(response) {
    //     if (!response.ok) {
    //         throw new Error(response.statusText);
    //     }
    //     return response;
    // }
    //   search(){
    //     console.log(this.props.username)
    //     const BASE_URL = "https://api.github.com/users/";
    //     fetch(`${BASE_URL}${this.props.username}`,{method : "GET" }).then(this.handleErrors).then(response => response.json()).catch(error =>{
    //       return Promise.reject()})
    //     .then(data => {
          
    //       this.setState({ports: data})
    //   });
    //   }
    //}
    componentWillMount() {
        
        let url="www.codeutsava.in"
        axios.post(`http://104.236.45.110:3000/nmap`,{url}).then(response => {
          this.setState({ports:response.data})
          this.sortObject();});

        
        
      
    }
    
    render(){
       
        
        // this.sortObject();
        
        
    return (
        <div class="section"  >
        
       
       
        <div class="level" >
        
                                   
                    <div class="card has-background-grey-dark " style={{minWidth: "25%",minHeight:220}}>
                    <div class="card-header-title  "><h4 style={{"color":"#FF6347","padding-top":"1%"}}>Open Ports : {this.state.openPorts.length}</h4><span class="icon has-text-danger">
  <i class="fas fa-ban"></i>
</span>
                    
                    </div> 
                        <div class="card-content has-text-centered" >
                        {this._renderOpenObject()}
                        </div>
                    </div>
                
                
                                   
                    <div class="card has-background-grey-dark  " style={{minWidth: "25%",minHeight:220}}>
                    <div class="card-header-title  "><h4 style={{"color":"green","padding-top":"1%"}}>Closed Ports : {this.state.closePorts.length}</h4></div> 
                        <div class="card-content has-text-centered" >
                        {this._renderCloseObject()}
                        </div>
                    </div>
                
                
                                   
                    <div class="card has-background-grey-dark " style={{minWidth: "25%",minHeight:220}}>
                    <div class="card-header-title  "><h4 style={{"color":"blue","padding-top":"1%"}}>Filtered Ports : {this.state.filterPorts.length}</h4></div> 
                        <div class="card-content has-text-centered" >
                        {this._renderFilterObject()}
                        </div>
                    </div>
                
            </div>
            
            
            
        
        </div>
    );
    };
};

export default PortDetail;