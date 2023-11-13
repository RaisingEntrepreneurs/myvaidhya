import React from "react";
////import './MovingBackground.css'; 
import Login from "./Login";
function CenterContent(){
   
    return (
        <div className="moving-background">
          <div className="layer layer1"></div>
          <div className="layer layer2"></div>
          <div className="layer layer3"></div> 
          {/*<div className="content">*/}
            <h2>This application would the combination of Electronic medical record (EMR) systems, Pharmacy Inventory system, Billing and claims Management system</h2>
            <h6>{Login}</h6>
          </div>
        
      );
    }
    
    
    

export default CenterContent