
import './App.css'
import Cards from './Components/Cards/Cards'

function App() {

  return (
    <>
      <div className='text-center space-y-4 mt-10'>
        <h1 className='text-5xl'>Spaceflight details</h1>
        <p>Find out the elaborate features of all the past big spaceflights.</p>
      </div>
      <Cards></Cards>
    </>
  )
}

export default App
