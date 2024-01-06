import React, { PureComponent } from 'react'

class PureCounterComponent extends PureComponent {
    constructor(props) {
        super(props)
      
        this.state = {
          count : 0,
          statee : false
        }
      }
      handleClick= () => {
         
          this.setState({
              statee : !(this.state.statee)
          })
      }
      handleCount = () => {
       
          if(this.state.statee){
              this.setState({
                  count : this.state.count+1
              })
          }
      }
render() {
    return (
      <div>
        <h3>Pure Component</h3>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Set toggle</button>
        <button onClick={this.handleCount}>Counter</button>
        
        
      </div>
    )
  }
}
export default PureCounterComponent