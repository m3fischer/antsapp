import { Checkbox, FormControlLabel, Tooltip } from "@mui/material";
import React from "react";

type MyProps = { name: string, className:string, id:string,  label:string, tooltip:string};
type MyState = { nameTSatte: string };
export default class AntBox extends React.Component <MyProps, MyState>{
    view = <>
        <Tooltip title={this.props.tooltip}>
            <FormControlLabel  className={this.props.className}  id={this.props.id}  control={<Checkbox />} label={this.props.label}  />
        </Tooltip>
    </>
    
    

    render(): React.ReactNode {
        return this.view
    }
}