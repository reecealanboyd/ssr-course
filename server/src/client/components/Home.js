import React from 'react'

const Home = () => {
  return <div><div>I'm the reloaded home component</div><button onClick={() => {console.log('This only works if client-side bundle replaced skeleton!')}}>Press me!</button></div>
}

export default Home