import './App.css'
import Header from './Components/Header'
import LocationInformationCard from './Components/LocationInformationCard'
import data from "./Data"

console.log(data)
function App() {
  const travelInfoElement = data.map((item)=>{
    return <LocationInformationCard key={item.id} item={item}/>
  }) 
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>{travelInfoElement}</div>
    </div>
  )
}

export default App
