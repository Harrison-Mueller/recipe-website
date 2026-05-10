import './css/App.css'
import Background from './components/Background'
import Menu from './components/Menu'
import RecipeList from './components/RecipeList'
import Provider from './components/Provider'
import RecipeBoard from './components/RecipeBoard'

function App() {

  return (
    <Provider>
      <Background />
      <Menu />
      <RecipeList />
      <RecipeBoard />
    </Provider>
  )
}

export default App
