import React from "react";

import './Footer.css'
export default class Footer extends React.Component{

    ui_structure = (
    <div className="Footer">
        <h1>FOOTER</h1>
    </div>)
    
    render(): React.ReactNode {
        return (this.ui_structure)
    }

}