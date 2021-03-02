import React from 'react';
import AurexiaBlue from '../assets/images/Aurexia-blue.png';
import AurexiaWhite from "../assets/images/Aurexia-white.png";



class VerticalMenu extends React.Component {
    render() {
      return <div>

            <div className="vertical-menu">
                <div classNameName="navbar-brand-box">
                    <a href="index.html" className="logo logo-dark">²
                        <span className="logo-sm">
                            <img src="assets/images/logo_AST.png" alt="" height="22"/>
                        </span>
                        <span className="logo-lg">
                            <img src={AurexiaBlue} alt="" height="30"/>
                        </span>
                    </a>
                   

                    <a href="index.html" className="logo logo-light">
                        <span className="logo-sm">
                            <img src="assets/images/logo_AST.png" alt="" height="22"/>
                        </span>
                        <span className="logo-lg">
                            <img src="assets/images/Aurexia-white.png" alt="" height="30"/>
                        </span>
                    </a>
                </div>

            </div>
                

      </div>

      
    }
  }



  
export default VerticalMenu;