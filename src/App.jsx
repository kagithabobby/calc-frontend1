// import React, { Component } from 'react';
// import './App.css';
import { callApi,BASEURL } from './api';

// class App extends Component {
//   constructor(){
//     super();
//     this.state={A:0,B:0,RES:0};
//     this.getResponse = this.getResponse.bind(this);
//   }

//   add(){
//     callApi("GET", BASEURL + `add/${this.state.A}/${this.state.B}`, "", this.getResponse);
//   }

//   getResponse(res){
//     this.setState({RES: res});
//   }

//   loadInputChange(event){
//       this.setState({[event.target.name] : event.target.value});
//   }

//   render() {
//     const {A, B, RES} = this.state;
//     return (
//       <>
//         <header>
//           <div className='title'>Simple Calculator</div>
//         </header>
//         <section>
//           <table>
//             <tr>
//               <td>Enter the value of A</td>
//               <td><input type='text' id='T1' name='A' value={A} onChange={(event)=>this.loadInputChange(event)} /></td>
//             </tr>
//             <tr>
//               <td>Enter the value of B</td>
//               <td><input type='text' id='T2' name='B' value={B} onChange={(event)=>this.loadInputChange(event)} /></td>
//             </tr>
//             <tr>
//               <td>Result</td>
//               <td><label id='L1'>{RES}</label></td>
//             </tr>
//             <tr>
//               <td></td>
//               <td><button onClick={()=>this.add()}>ADD</button></td>              
//             </tr>
//           </table>
//         </section>
//         <footer>Copyright @ 2025. All rights reserved.</footer>
//       </>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
import './App.css';
// import { callApi,BASEURL } from './api';

// class App extends Component {
//   constructor(){
//     super();
//     this.state={A:0,B:0,RES:0};
//     this.getResponse = this.getResponse.bind(this);
//   }

//   add(){
//     callApi("GET", BASEURL + add/${this.state.A}/${this.state.B}, "", this.getResponse);
//   }
//   // 
//  // sub(){
//  //    callApi("GET", BASEURL + ⁠ sub/${this.state.A}/${this.state.B} ⁠, "", this.getResponse);
//  //  }
// // 


//   getResponse(res){
//     this.setState({RES: res});
//   }

//   loadInputChange(event){
//       this.setState({[event.target.name] : event.target.value});
//   }

//   render() {
//     const {A, B, RES} = this.state;
//     return (
//       <>
//         <header>
//           <div className='title'>Simple Calculator</div>
//         </header>
//         <section>
//           <table>
//             <tr>
//               <td>Enter the value of A</td>
//               <td><input type='text' id='T1' name='A' value={A} onChange={(event)=>this.loadInputChange(event)} /></td>
//             </tr>
//             <tr>
//               <td>Enter the value of B</td>
//               <td><input type='text' id='T2' name='B' value={B} onChange={(event)=>this.loadInputChange(event)} /></td>
//             </tr>
//             <tr>
//               <td>Result</td>
//               <td><label id='L1'>{RES}</label></td>
//             </tr>
//             <tr>
//               <td></td>
//               <td><button onClick={()=>this.add()}>ADD</button></td>              
// {/*               <td><button onClick={()=>this.sub()}>SUB</button></td>               */}
//             </tr>
//           </table>
//         </section>
//         <footer>Copyright @ 2025. All rights reserved.</footer>
//       </>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
// The import for App.css has been removed as it was causing a compilation error.

// Mocking the callApi and BASEURL for this self-contained example.
// In a real application, these would be imported from your api.js file.
// const BASEURL = 'http://localhost:8080/';

function callApi(method, url, data, callback) {
  console.log(Simulating API call: ${method} to ${url});

  // Extract A and B values and the operation from the mock URL
  const parts = url.split('/');
  const operation = parts[parts.length - 3];
  const a = parseInt(parts[parts.length - 2]);
  const b = parseInt(parts[parts.length - 1]);

  let result;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'sub':
      result = a - b;
      break;
    case 'mul':
      result = a * b;
      break;
    case 'div':
      // Handle division by zero
      if (b === 0) {
        callback('Error: Division by zero');
        return;
      }
      result = a / b;
      break;
    case 'mod':
      // Handle modulus by zero
      if (b === 0) {
        callback('Error: Modulus by zero');
        return;
      }
      result = a % b;
      break;
    default:
      result = 'Error: Unknown operation';
  }

  // Simulate a successful API response
  callback(result.toString());
}


class App extends Component {
  constructor(){
    super();
    this.state={A:0,B:0,RES:0};
    this.getResponse = this.getResponse.bind(this);
  }

  // Method to handle the 'add' operation
  add(){
    callApi("GET", BASEURL + add/${this.state.A}/${this.state.B}, "", this.getResponse);
  }
  
  // Method to handle the 'sub' operation, which calls the subtraction API endpoint
  sub(){
    callApi("GET", BASEURL + sub/${this.state.A}/${this.state.B}, "", this.getResponse);
  }

  // Method to handle the 'mul' operation
  mul(){
    callApi("GET", BASEURL + mul/${this.state.A}/${this.state.B}, "", this.getResponse);
  }

  // Method to handle the 'div' operation
  div(){
    callApi("GET", BASEURL + div/${this.state.A}/${this.state.B}, "", this.getResponse);
  }

  // Method to handle the 'mod' operation
  mod(){
    callApi("GET", BASEURL + mod/${this.state.A}/${this.state.B}, "", this.getResponse);
  }


  getResponse(res){
    this.setState({RES: res});
  }

  loadInputChange(event){
      this.setState({[event.target.name] : event.target.value});
  }

  render() {
    const {A, B, RES} = this.state;
    return (
      <>
        <header>
          <div className='title'>Simple Calculator</div>
        </header>
        <section>
          <table>
            <tr>
              <td>Enter the value of A</td>
              <td><input type='text' id='T1' name='A' value={A} onChange={(event)=>this.loadInputChange(event)} /></td>
            </tr>
            <tr>
              <td>Enter the value of B</td>
              <td><input type='text' id='T2' name='B' value={B} onChange={(event)=>this.loadInputChange(event)} /></td>
            </tr>
            <tr>
              <td>Result</td>
              <td><label id='L1'>{RES}</label></td>
            </tr>
            <tr>
              <td></td>
              <td><button onClick={()=>this.add()}>ADD</button></td>           
              <td><button onClick={()=>this.sub()}>SUB</button></td>
              <td><button onClick={()=>this.mul()}>MUL</button></td>
              <td><button onClick={()=>this.div()}>DIV</button></td>
              <td><button onClick={()=>this.mod()}>MOD</button></td>          
            </tr>
          </table>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
