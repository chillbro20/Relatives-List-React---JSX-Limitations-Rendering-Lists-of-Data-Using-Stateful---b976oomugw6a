import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    render() {
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                <li key="relativeListItem1">Saurabh</li>
                <li key="relativeListItem2">Durgesh</li>
                <li key="relativeListItem3">Jaya</li>
                <li key="relativeListItem4">Sakashi</li>
               </ol>
            </div>
        )
    }
}


export default App;