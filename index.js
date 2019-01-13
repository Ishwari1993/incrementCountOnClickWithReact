import React, {Component} from 'react';
import {render} from 'react-dom';
import './static/css/index.css';
import Counter from './Components/button.js';


class Root extends Component{
    render(){
        return(
            <div>
            <Counter/>
           
        
            </div>
        )

     }
}
render(<Root />, document.getElementById('react-root'))
export default Root;
    