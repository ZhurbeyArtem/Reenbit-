import List from "./components/List/List"
import Search from "./components/Filter/Filter"
import Week from "./components/Weather/Week"
import Sidebar from "./components/Sidebar/Sidebar"


const App = () => {
  return (
    <div className="app">
      <div>
        <h2>Weather <b>Forecast</b></h2>
        <Search />
        <List />
        <Week />
      </div>
      <Sidebar />
    </div>
  )
}

export default App
