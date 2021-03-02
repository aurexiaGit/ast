import React from 'react';

import logoAST from "../assets/images/Logo_AST.png";

class LogIn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    }
    
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
    
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                    }, this.validateForm);
    }
    
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    SubmitLogin(){
        alert(this.state);
    }

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
                                <h1 className="text font-weight-bold">Welcome back!</h1>
                            </div>
                            <div className="mt-5">
                                <form action="index.html">
                                    <div className="form-group" data-children-count="1">
                                        <label for="useremail" className="font-weight-bold">Email</label>
                                        <input type="email" required className="form-control" name="email" value={this.state.email}
                                            onChange={this.handleUserInput}  id="useremail" placeholder="Enter email" data-kwimpalastatus="alive" data-kwimpalaid="1614677957642-2"/>        
                                    </div>

                                    <div className="form-group" data-children-count="1">
                                        <label for="userpassword" className="font-weight-bold">Password</label>
                                        <input type="password" className="form-control" name="password" value={this.state.password}
                                            onChange={this.handleUserInput} id="userpassword" placeholder="Enter password" data-kwimpalastatus="alive" data-kwimpalaid="1614677957642-1"/>
                                        <p className="text-secondary">Forgot your password? <a href="/FG">click here</a></p>        
                                    </div>

                                    <div className="custom-control custom-checkbox" data-children-count="1">
                                        <input type="checkbox" className="custom-control-input" id="auth-terms-condition-check"/>
                                        <label className="custom-control-label" for="auth-terms-condition-check">Remember Me</label>
                                    </div>
                                    
                                    <div className="mt-3 text-right">
                                        <button className="btn btn-primary w-sm waves-effect waves-light" type="submit" disabled={!this.state.formValid} on Click={this.SubmitLogin}>Sign In</button>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <div className="signin-other-title">
                                            <h5 className="font-size-14 mb-3 title">Sign up using</h5>
                                        </div>
                                        
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="javascript:void()" className="social-list-item bg-primary text-white border-primary">
                                                    <i className="mdi mdi-microsoft"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );}
    }

export default LogIn;