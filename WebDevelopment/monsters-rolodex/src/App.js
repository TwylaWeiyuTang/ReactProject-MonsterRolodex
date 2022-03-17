import { Component } from 'react';
import './App.css';
import CardListComponent from './components/card-list/CardListComponent';
import SearchBox from './components/search-box/SearchBox';

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

   handleChange = e => {
     this.setState({searchField: e.target.value});
   }

   render() {
     const {monsters, searchField } = this.state; // this is destructure
     // destructure is pulling properties off an object and set them to the constants
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    // includes is trying to see if the monster name string in the monster state includes the searchField string we just passed in
     
      return (
       <div className='App'>
         <h1>Monsters Rolodex</h1>
         <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
         <CardListComponent monsters={filteredMonsters} /> 

         {/* the children of a prop is anything in between the two brackets of the component */}
         {/* the prop is the thing passed in after the name of the component */}
         </div>
     )
   }
 }

export default App;
