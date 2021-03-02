import { buildQueries } from '@testing-library/react';
import React from 'react';
import Header from './Header';

class Login extends React.Component {
    constructor(props){
      super(props)
      this.state={
        email:"",
        password:""
      }
    }

    handleEmail=(event)=>{
      this.setState({email:event.target.value})
    }

    handlePassword=(event)=>{
      this.setState({password:event.target.value})
    }

    SubmitLogIn(){
      alert(this.state)
    }


    render() {

      return <div>

                  
        <body className="authentication-bg">

          <div className="home-btn d-none d-sm-block">
              <a href="index.html" class="text-dark"><i class="mdi mdi-home-variant h2"></i></a>
          </div>
          
          <div className="account-pages my-5 pt-sm-5">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <div class="text-center">
                              <a href="index.html" class="mb-5 d-block auth-logo">
                                  <img src="assets/images/Aurexia-blue.png" alt="" height="50" class="logo logo-dark"/>
                                  <img src="assets/images/Aurexia-white.png" alt="" height="50" class="logo logo-light"/>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="row align-items-center justify-content-center">
                      <div class="col-md-8 col-lg-6 col-xl-5">
                          <div class="card">
                            
                              <div class="card-body p-4"> 
                                  <div class="text-center mt-2">
                                      <h5 class="text-primary">Welcome Back !</h5>
                                      <p class="text-muted">Sign in to continue.</p>
                                  </div>
                                  <div class="p-2 mt-4">
                                      <form action="index.html">

                                          <div class="form-group">
                                              <label for="username">Username</label>
                                              <input type="text" onChange={this.handleEmail} class="form-control" id="username" placeholder="Enter username"/>
                                          </div>
                  
                                          <div class="form-group">
                                              <div class="float-right">
                                                  <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
                                              </div>
                                              <label for="userpassword">Password</label>
                                              <input type="password" onChange={this.handlePassword} class="form-control" id="userpassword" placeholder="Enter password"/>
                                          </div>
                  
                                          <div class="custom-control custom-checkbox">
                                              <input type="checkbox" class="custom-control-input" id="auth-remember-check"/>
                                              <label class="custom-control-label" for="auth-remember-check">Remember me</label>
                                          </div>
                                          
                                          <div class="mt-3 text-right">
                                              <button   class="btn btn-primary w-sm waves-effect waves-light" type="submit">Log In</button>
                                          </div>
                                          <div>
                                            <button onClick={this.SubmitLogIn}>Test </button>
                                          </div>
              
                                          

                                          <div class="mt-4 text-center">
                                              <div class="signin-other-title">
                                                  <h5 class="font-size-14 mb-3 title">Sign in with</h5>
                                              </div>
                                              
              
                                              <ul class="list-inline">
                                                  <li class="list-inline-item">
                                                      <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                                                          <i class="mdi mdi-facebook"></i>
                                                      </a>
                                                  </li>
                                                  <li class="list-inline-item">
                                                      <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                                                          <i class="mdi mdi-twitter"></i>
                                                      </a>
                                                  </li>
                                                  <li class="list-inline-item">
                                                      <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                                                          <i class="mdi mdi-google"></i>
                                                      </a>
                                                  </li>
                                              </ul>
                                          </div>

                                          <div class="mt-4 text-center">
                                              <p class="mb-0">Don't have an account ? <a href="auth-register.html" class="font-weight-medium text-primary"> Signup now </a> </p>
                                          </div>
                                      </form>
                                  </div>
              
                              </div>
                          </div>

                          <div class="mt-5 text-center">
                              <p>©<script>document.write(new Date().getFullYear())</script> Aurexia.</p>
                          </div>

                      </div>
                  </div>
              </div>
          </div>



          </body>
                

      </div>



          



      
    }
  }



  
export default Login;