// import React, { Component } from 'react'
// import { Route, Switch, NavLink } from 'react-router-dom'
// import Dog from './Dog'
// import Contact from './Contact'
// import About from './About'
// import "./App.css"

// const Hater = () => <h1>I Absolutely hate Dogs!</h1>

// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Dhaval Here From Technotery</h1>
//         <nav className="bar">
//           <NavLink exact activeClassName="active" to="/dog">Dog</NavLink>
//           <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
//           <NavLink exact activeClassName="active" to="/">About</NavLink>
//         </nav>
//         <Switch>
//           <Route exact path="/dog" component={() => <Dog name="Muffins" />} />
//           <Route exact path="/dog/hater" component={Hater} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/" component={About} />
//         </Switch>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Chips from './Chips'
import Navbar from './Navbar'
import Sardines from './Sardines'
import Soda from './Soda'
import VendingMachine from './VendingMachine'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />}></Route>
          <Route exact path="/chips" render={() => <Chips />}></Route>
          <Route exact path="/sardines" render={() => <Sardines />}></Route>
          <Route exact path="/soda" render={() => <Soda />}></Route>
        </Switch>
      </div >
    )
  }
}
