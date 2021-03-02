import React from 'react';

import logoAST from "../assets/images/Logo_AST.png";

class LandingPage extends React.Component {
    
    render() {
        return (
        <div className="account-pages my-sm-3 my-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <a href="/" className="mb-sm-3 mb-5 d-block auth-logo">
                            <img src={logoAST} alt="logo" max-width="150px" width="50%" height="auto" className="logo logo-dark m-auto"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card">       
                        <div className="card-body"> 
                            <div className="text-center mt-2">
                                <h1 className="text font-weight-bold">Aurexia Social Token</h1>
                            </div>
                            <div className="mt-5">
                                <p>AST is the blockchain based solution used by Aurexia to manage all our Corporate Social Responsibility events.</p>
                            </div>
                            <div className="mt-5">
                                <p className="font-weight-bold">Sign in if you are an Aurexia Employee!</p>
                            </div>
                            <div className="mt-5 float-right">
                                <a className="btn btn-primary w-sm" href="/signin">Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );}
    }

export default LandingPage;