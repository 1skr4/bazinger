import { useRoutes } from './navigations/routes'

function App() {
  const routes = useRoutes()
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;