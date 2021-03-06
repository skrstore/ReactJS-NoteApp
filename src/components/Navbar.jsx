import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
    handleLogout = () => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("username");
        this.props.history.push("/login");
    };

    render() {
        const username = localStorage.getItem("username");
        const isLogin = !!localStorage.getItem("auth_token");
        return (
            <nav className="navbar my-navbar">
                <a href="/" className="navbar-brand mb-0">
                    {document.title}
                </a>

                {isLogin && (
                    <div className="navbar-nav ml-auto">
                        <div className="navbar-nav">
                            <button
                                className="btn btn-outline-danger"
                                onClick={this.handleLogout}
                            >
                                Logout - {username}
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        );
    }
}

export default withRouter(Navbar);
