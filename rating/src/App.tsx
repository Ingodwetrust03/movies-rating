import './App.css'
import {countStars} from "./models";
import Stars from "./components/Stars";





function App() {

    const counter: countStars = {
        count: 0
    }

  return (
    <>
        <h1>Рейтинг</h1>

        {(counter.count == null || counter.count == undefined || counter.count < 1 || counter.count > 5) ? "Отсутствует" : <Stars count={counter}/>}
    </>
  )
}

export default App
