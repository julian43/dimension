import React, { Component } from 'react';
import Cell from './Cell';
import FormCell from './FormCell';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            cells:null
        }
    }

    componentWillMount(){
        if(this.props.children){
            const cells = this.props.children.map((child)=>{
                if(child.props.title.toLowerCase() === "contact"){
                    let props = {
                        action: child.props.action,
                   }
                   return FormCell(props)
                }else{
                    let props = {
                        title: child.props.title, 
                        text:child.props.text, 
                        img:child.props.img,
                        alt:child.props.alt,
                        key: child.props.id
                   }
                   return Cell(props)
                }
                
            })

            this.setState({
                cells:cells
            })
        }
    }

    render(){
        return(
            <div id="main">
                {this.state.cells}
            </div>
        )
    }
}