import React from "react";
class TopNav extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
                    <div className="container-fluid">
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav align-items-center  ml-md-auto ">
                                <li className="nav-item d-xl-none">
                                    <div
                                        className="pr-3 sidenav-toggler sidenav-toggler-dark"
                                        data-action="sidenav-pin"
                                        data-target="#sidenav-main"
                                    >
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                            <i className="sidenav-toggler-line"></i>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item d-sm-none">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        data-action="search-show"
                                        data-target="#navbar-search-main"
                                    >
                                        <i className="ni ni-zoom-split-in"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className="ni ni-bell-55"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-xl  dropdown-menu-right  py-0 overflow-hidden">
                                        <div className="px-3 py-3">
                                            <h6 className="text-sm text-muted m-0">
                                                You have{" "}
                                                <strong className="text-primary">
                                                    1{" "}
                                                </strong>
                                                notifications.
                                            </h6>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <a
                                                href="#!"
                                                className="list-group-item list-group-item-action"
                                            >
                                                <div className="row align-items-center">
                                                    <div className="col ml-2">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <h4 className="mb-0 text-sm">
                                                                    New Order
                                                                    Made
                                                                </h4>
                                                            </div>
                                                            <div className="text-right text-muted">
                                                                <small>
                                                                    2 hrs ago
                                                                </small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a
                                            href="#!"
                                            className="dropdown-item text-center text-primary font-weight-bold py-3"
                                        >
                                            View all
                                        </a>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav align-items-center  ml-auto ml-md-0 ">
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link pr-0"
                                        href="#"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <div className="media align-items-center">
                                            <span className="avatar avatar-sm rounded-circle">
                                                <img
                                                    alt="Image placeholder"
                                                    src={`${assetPath}storage/images/logo.png`}
                                                />
                                            </span>
                                            <div className="media-body  ml-2  d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold">
                                                    John Snow
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu  dropdown-menu-right ">
                                        <div className="dropdown-header noti-title">
                                            <h6 className="text-overflow m-0">
                                                Welcome!
                                            </h6>
                                        </div>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ni ni-single-02"></i>
                                            <span>My profile</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ni ni-settings-gear-65"></i>
                                            <span>Settings</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ni ni-calendar-grid-58"></i>
                                            <span>Activity</span>
                                        </a>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ni ni-support-16"></i>
                                            <span>Support</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a href="#!" className="dropdown-item">
                                            <i className="ni ni-user-run"></i>
                                            <span>Logout</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default TopNav;
