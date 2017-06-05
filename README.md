# Test-it-Good!

## server-side

### migrations (knex)
- knex migrate:make table_name
- knex migrate:latest

### seeds (knex)
- knex seed:make seed_name
- knex seed:run

### server.js (express)
- require express (npm install --save-dev express)
- create a variable 'server' and make it take an express function 'express()'
- export 'server'
- create a variable for each route file
- create a path for each route and request server to use this i.e. server.use('/api/route_name', route_name)

### index.js (server)
- create a variable 'server' that requires your server.js file ('./server')
- link your server to the database i.e. server.set('db', knex(config))

### db (database)
- create a variable that equals a function which takes (db) as its parameter and returns your database name i.e. return db('database_name')
- export your function

### routes (express)
- require express
- create a variable 'router' which equals express.Router()
- create a variable that requires your db file
- create an initial route i.e.
  router.get('/', (req, res) => {
    let db = req.app.get('db')
    })
- export 'router'

## Client-side

### index.js (client)
- import React from 'react', etc
- import your reducers folder
- import your App component
- createStore whcih applies middlware and devToolsExtension
- addEventListener renders your App component through Provider and store

### components
- import React from 'react'
- import any other relevant component files
- if using Router, import relevant module and set routes
- set variable 'App' with a function(props) and include any linked components

### containers
- import React from 'react'
- import {connect} from 'react-redux'
- import any relevant actions by putting action function in {} and import from files
- create relevant functions - link to action using 'dispatch'
- connect redux by using mapStateToProps i.e.
  const mapStateToProps = (state) => {
    return {props_name:state.props_name}
  }
- export default connect(mapStateToProps)(function_name)

### actions
- import request from 'superagent'
- export a function(props_name) and return type of action and props_name
- export any callback function using dispatch (using thunk)

### reducers
#### index.js
- import {combineReducers} from 'redux', import any reducers from files and export default combineReducers({reducer_name})
#### reducer files
- create a function with state and action as parameters then a switch statement which takes (action.type) as its parameter and the action type as its case and returns a certain state [...] and default is return state
- export default function_name
