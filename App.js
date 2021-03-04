import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return (
    <>
      <StatusBar style="auto" />
      {routes}
    </>
  )
}

export default App