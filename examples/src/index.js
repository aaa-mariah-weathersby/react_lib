import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import FontAwesome from 'react-fontawesome';


const Application = (props) => {
    return(
        <div>
            <ul>
                <li>Footer Information</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
  <Application />,
  document.getElementById('app')
)