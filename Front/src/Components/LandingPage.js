import React from 'react';

import logoAST from "../assets/images/Logo_AST.png";

class LandingPage extends React.Component {
    render() {
        return (
        <div className="account-pages my-5 pt-sm-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <a href="/" className="mb-5 d-block auth-logo">
                            <img src={logoAST} alt="logo" height="50" className="logo logo-dark m-auto"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-12 col-lg-9 col-xl-8">
                    <div className="card">       
                        <div className="card-body p-4"> 
                            <div className="text-center mt-2">
                                <h1 className="text font-weight-bold">Aurexia Social Token</h1>
                                <p className="text-muted">Get your account now.</p>
                            </div>
                            <div className="mt-5 text-center">
                                <p>©2021 Aurexia.</p>
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