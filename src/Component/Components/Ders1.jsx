import React,{Component} from "react";
import './style.css'
class Ders1 extends Component {
    state={
        subscribed: false,
        text: 'Subscribe'

    };

    clickHandler = () => {
 this.setState({text: 'Subscribed',subscribed:true});
    };
   
    render() {
        const {text,subscribed} = this.state;
        let className = 'subscribe-button';

        if(!subscribed){
            className = 'subscribe-button_red';

        }
        else{
            className ='subscribe-button_blue';
        }
      return (
        <div>
          <button className={className} type='button'onClick={this.clickHandler}>
        {text}
        </button>
        </div>
      );
    }
   }
   export default Ders1
   