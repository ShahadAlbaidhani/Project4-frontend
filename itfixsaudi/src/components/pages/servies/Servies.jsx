import React, { Component } from 'react'
import ListServies from './ListServies'
import TypesProblem from './TypesProblem'
import SelectType from './SelectType'
import {Helmet} from 'react-helmet';

import ReactDOM from 'react-dom';

 

export class Servies extends Component {
    render() {
        
        return (
            <div>
                <Helmet bodyAttributes={{style: 'background-color :#ECECEC'}}/>
                


          
                <ListServies/>

                <TypesProblem/>
     
                      <SelectType/>     

 



            </div>
        )
    }
}

export default Servies
