import { Component } from 'react';
import './App.css';
import CardListComponent from './components/card-list/CardListComponent';

 class App extends Component {
   constructor() {
     super();
     this.state = {
       monsters: [] // initial state
     };
   } // state only lives in one location and it passes down as props

   componentDidMount() { // componentDidMount means our component being rendered on the page for
    // the first time, then it will perfom the following code
     fetch('https://jsonplaceholder.typicode.com/users') // this returns a promise
     .then(response => response.json()) // this will give us the response in a json format
     .then(users => this.setState({monsters: users})) 
     // users return an array contains all the data about users
     // this will set the monsters state to include all the fetched users data
   }

   render() {
     return (
       <div className='App'>
         <CardListComponent monsters={this.state.monsters} /> 

         {/* the children of a prop is anything in between the two brackets of the component */}
         {/* the prop is the thing passed in after the name of the component */}
         </div>
     )
   }
 }

export default App;
