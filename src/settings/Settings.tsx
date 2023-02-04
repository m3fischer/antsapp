import * as React from 'react'

export class Settings extends React.Component{
    render(): React.ReactNode {
        return <h1>Settings.tsx, {this.props.toString()}</h1>
    }
}