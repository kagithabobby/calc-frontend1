import React, { Component } from 'react';
import './App.css';

// Mock BASEURL (replace with your real API endpoint if available)
const BASEURL = "http://localhost:8080/cicd-backend/";

// Mocking callApi function (simulates backend API calls)
function callApi(method, url, data, callback) {
  console.log(`Simulating API call: ${method} to ${url}`);

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
      result = b === 0 ? "Error: Division by zero" : a / b;
      break;
    case 'mod':
      result = b === 0 ? "Error: Modulus by zero" : a % b;
      break;
    default:
      result = "Error: Unknown operation";
  }

  // Simulate a successful API response
  callback(result.toString());
}

class App extends Component {
  constructor() {
    super();
    this.state = { A: 0, B: 0, RES: 0 };
    this.getResponse = this.getResponse.bind(this);
  }

  // Arithmetic methods
  add() {
    callApi("GET", `${BASEURL}add/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  sub() {
    callApi("GET", `${BASEURL}sub/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  mul() {
    callApi("GET", `${BASEURL}mul/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  div() {
    callApi("GET", `${BASEURL}div/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  mod() {
    callApi("GET", `${BASEURL}mod/${this.state.A}/${this.state.B}`, "", this.getResponse);
  }

  // Handle API response
  getResponse(res) {
    this.setState({ RES: res });
  }

  // Handle input change
  loadInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { A, B, RES } = this.state;

    return (
      <>
        <header>
          <div className="title">Simple Calculator</div>
        </header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Enter the value of A</td>
                <td>
                  <input
                    type="text"
                    id="T1"
                    name="A"
                    value={A}
                    onChange={(event) => this.loadInputChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td>Enter the value of B</td>
                <td>
                  <input
                    type="text"
                    id="T2"
                    name="B"
                    value={B}
                    onChange={(event) => this.loadInputChange(event)}
                  />
                </td>
              </tr>
              <tr>
                <td>Result</td>
                <td>
                  <label id="L1">{RES}</label>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button onClick={() => this.add()}>ADD</button>
                  <button onClick={() => this.sub()}>SUB</button>
                  <button onClick={() => this.mul()}>MUL</button>
                  <button onClick={() => this.div()}>DIV</button>
                  <button onClick={() => this.mod()}>MOD</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
