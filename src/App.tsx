import List from "./components/List/List"
import Search from "./components/Filter/Filter"
import Week from "./components/Weather/Week"
import Sidebar from "./components/Sidebar/Sidebar"
import { AuthProvider } from "./components/Auth/Auth"


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
      <AuthProvider />
    </div>
  )
}

export default App
