import React,{Component} from "react";

class Ders4 extends Component {
    clickHandler = (event) => {
      console.log('Button click!');
    };
   
    render() {
      return (
        <button type="button" onClick={this.clickHandler}>
           Subscribe
        </button>
      );
    }
   }
   export default Ders4
   