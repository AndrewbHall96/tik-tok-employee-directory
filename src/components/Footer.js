import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="card text-center">
            <div className="card-header">
                TikTok
            </div>
            <div>
                <div className="row">
                    <div className="col">
                        company
                    </div>
                    <div className="col">
                        Programs
                    </div>
                    <div className="col">
                        Support
                    </div>
                    <div className="col">
                        Legal
                    </div>
                </div>
            </div>
            <div className="card-footer text-muted">
                &copy; NotTikTok
            </div>
        </div>
    );
}

export default Footer;