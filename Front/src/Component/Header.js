import React from 'react';
import AurexiaBlue from '../assets/images/Aurexia-blue.png';
import User from '../assets/images/users/avatar-2.jpg';
import AurexiaWhite from "../assets/images/Aurexia-white.png";



class Header extends React.Component {
    render() {
      return <div>

<header id="page-topbar">
    <div className="navbar-header">
        <div className="d-flex">
            <div className="navbar-brand-box">
                <a href="index.html" class="logo logo-dark">
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

            <button type="button" className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn">
                <i className="fa fa-fw fa-bars"></i>
            </button>

            <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                    <input type="text" class="form-control" placeholder="Search..."/>
                    <span className="uil-search"></span>
                </div>
            </form>
        </div>

        <div className="d-flex">

            <div className="dropdown d-inline-block d-lg-none ml-2">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="uil-search"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-search-dropdown">
                    
                    <form className="p-3">
                        <div className="form-group m-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



            <div className="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" className="btn header-item noti-icon waves-effect"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="uil-apps"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <div className="px-lg-2">
                        <div className="row no-gutters">
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="assets/images/brands/github.png" alt="Github"/>
                                    <span>GitHub</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                                    <span>Bitbucket</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                                    <span>Dribbble</span>
                                </a>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                                    <span>Dropbox</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                                    <span>Mail Chimp</span>
                                </a>
                            </div>
                            <div className="col">
                                <a className="dropdown-icon-item" href="#">
                                    <img src="assets/images/brands/slack.png" alt="slack"/>
                                    <span>Slack</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i className="uil-minus-path"></i>
                </button>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="uil-bell"></i>
                    <span className="badge badge-danger badge-pill">3</span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                    aria-labelledby="page-header-notifications-dropdown">
                    <div className="p-3">
                        <div class="row align-items-center">
                            <div className="col">
                                <h5 className="m-0 font-size-16"> Notifications </h5>
                            </div>
                            <div className="col-auto">
                                <a href="#!" className="small"> Mark all as read</a>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar style={{maxHeight: '230px'}}>
                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <div className="avatar-xs mr-3">
                                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                                        <i className="uil-shopping-basket"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Your order is placed</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <img src={User}
                                    className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">James Lemire</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">It will seem like simplified English.</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <div className="avatar-xs mr-3">
                                    <span className="avatar-title bg-success rounded-circle font-size-16">
                                        <i className="uil-truck"></i>
                                    </span>
                                </div>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Your item is shipped</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">If several languages coalesce the grammar</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="" className="text-reset notification-item">
                            <div className="media">
                                <img src={User}
                                    className="mr-3 rounded-circle avatar-xs" alt="user-pic"/>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                    <div className="font-size-12 text-muted">
                                        <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                        <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-2 border-top">
                        <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                            <i className="uil-arrow-circle-right mr-1"></i> View More..
                        </a>
                    </div>
                </div>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle header-profile-user" src={User}
                        alt="Header Avatar"/>
                    <span className="d-none d-xl-inline-block ml-1 font-weight-medium font-size-15">Thomas Zimmerman</span>
                    <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#"><i className="uil uil-user-circle font-size-18 align-middle text-muted mr-1"></i> <span className="align-middle">View Profile</span></a>
                    <a className="dropdown-item" href="#"><i className="uil uil-wallet font-size-18 align-middle mr-1 text-muted"></i> <span className="align-middle">My Wallet</span></a>
                    <a className="dropdown-item d-block" href="#"><i className="uil uil-cog font-size-18 align-middle mr-1 text-muted"></i> <span className="align-middle">Settings</span> <span class="badge badge-soft-success badge-pill mt-1 ml-2">03</span></a>
                    <a className="dropdown-item" href="#"><i className="uil uil-lock-alt font-size-18 align-middle mr-1 text-muted"></i> <span className="align-middle">Lock screen</span></a>
                    <a className="dropdown-item" href="#"><i className="uil uil-sign-out-alt font-size-18 align-middle mr-1 text-muted"></i> <span className="align-middle">Sign out</span></a>
                </div>
            </div>

            <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                    <i className="uil-cog"></i>
                </button>
            </div>
            
        </div>
    </div>
</header>
                

      </div>

      
    }
  }



  
export default Header;