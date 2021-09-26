import TasksState from '../context/TasksState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

  <TasksState>
    <Component {...pageProps} />
  </TasksState>

  )
}

export default MyApp
