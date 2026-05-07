import './css/App.css'
import Background from './components/Background'
import Menu from './components/Menu'
import RecipeList from './components/RecipeList'
import Provider from './components/Provider'

function App() {

  return (
    <Provider>
      <Background />
      <Menu />
      <RecipeList />
    </Provider>
  )
}

export default App
