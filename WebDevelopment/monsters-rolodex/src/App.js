import { Component } from 'react';
import './App.css';
import CardListComponent from './components/card-list/CardListComponent';

 class App extends Component {
   constructor() {
     super();
     this.state = {
       monsters: [], // initial state
       searchField: ''
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
     const {monsters, searchField } = this.state; // this is destructure
     // destructure is pulling properties off an object and set them to the constants
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    // includes is trying to see if the monster name string in the monster state includes the searchField string we just passed in
     
      return (
       <div className='App'>
         <input type='search' placeholder='search monsters' 
          onChange={e => this.setState({searchField: e.target.value})} />
          {/* We are defining a function, but we are not running it */}
         {/* e is the change that is happening, target is where this change is happening, value is the change itself */}
         {/* if we want to see or do sth with our updated state, we need to do it inside, with a second argument function following the first one*/}
         <CardListComponent monsters={filteredMonsters} /> 

         {/* the children of a prop is anything in between the two brackets of the component */}
         {/* the prop is the thing passed in after the name of the component */}
         </div>
     )
   }
 }

export default App;
