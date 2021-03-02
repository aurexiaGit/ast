import AurexiaBlue from './assets/images/Aurexia-blue.png';
import AurexiaWhite from "./assets/images/Aurexia-white.png";

function App() {
  return (
      <div>
          <body className="authentication-bg">
                <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="text-center">
                            <a href="index.html" className="mb-5 d-block auth-logo">
                                <img src={AurexiaBlue} alt="" height="50" className="logo logo-dark"/>
                                <img src={AurexiaWhite} alt="" height="50" className="logo logo-light"/>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card">       
                        <div className="card-body p-4"> 
                            <div className="text-center mt-2">
                            <h5 className="text-primary">Register Account</h5>
                            <p className="text-muted">Get your account now.</p>
                            </div>
                                        <div className="p-2 mt-4">
                                            <form action="index.html">
                
                                                <div className="form-group">
                                                    <label htmlFor="useremail">Email</label>
                                                    <input type="email" className="form-control" id="useremail" placeholder="Enter email"/>        
                                                </div>
                        
                                                <div className="form-group">
                                                    <label htmlFor="username">Username</label>
                                                    <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                                                </div>
                        
                                                <div className="form-group">
                                                    <label htmlFor="userpassword">Password</label>
                                                    <input type="password" className="form-control" id="userpassword" placeholder="Enter password"/>        
                                                </div>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="auth-terms-condition-check"/>
                                                    <label className="custom-control-label" htmlFor="auth-terms-condition-check">I accept <a href="/ast" className="text-dark">Terms and Conditions</a></label>
                                                </div>
                                                
                                                <div className="mt-3 text-right">
                                                    <button className="btn btn-primary w-sm waves-effect waves-light" type="submit">Register</button>
                                                </div>
                    
                                                <div className="mt-4 text-center">
                                                    <div className="signin-other-title">
                                                        <h5 className="font-size-14 mb-3 title">Sign up using</h5>
                                                    </div>
                                                    
                    
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a href="/ast" className="social-list-item bg-primary text-white border-primary">
                                                                <i className="mdi mdi-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="/ast" className="social-list-item bg-info text-white border-info">
                                                                <i className="mdi mdi-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a href="/ast" className="social-list-item bg-danger text-white border-danger">
                                                                <i className="mdi mdi-google"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="mt-4 text-center">
                                                    <p className="text-muted mb-0">Already have an account ? <a href="auth-login.html" className="font-weight-medium text-primary"> Login</a></p>
                                                </div>
                                            </form>
                                        </div>            
                                    </div>
                                </div>
                            <div className="mt-5 text-center">
                                <p>©2021 Aurexia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


          </body>
      </div>
    
  );
}

export default App;
