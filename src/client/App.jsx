import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {

  //These are accessible everywhere in App class
  constructor(){
    super();
      this.state = {
        currentItems : "",
        list : [],
        errorMessage : ""
      }
  }

  changeHandler(event){
    this.setState({currentItems:event.target.value});
    // console.log("change", event.target.value);
  }

  clickHandler(){
    console.log(this.state.list)
    let newList = this.state.list;
    newList.push(this.state.currentItems);
    this.setState({list:newList, currentItems : "", errorMessage : ""});
  }
    
    render() {
        // console.log("rendering");
        let list  = this.state.list.map( (oneItem) => {
        return <p>{oneItem}</p>
        })

        return (
          <div className="item">
            <input onChange={(event)=>{this.changeHandler(event);}} value={this.state.currentItems}/>
            <button onClick={()=>{this.clickHandler()}}>Add item!</button>
            {list}
          </div>
        );
    }
  // render() {
  //   return (
  //     <div>
  //       Welcome.
  //     </div>
  //   );
  // }
}

export default hot(module)(App);
