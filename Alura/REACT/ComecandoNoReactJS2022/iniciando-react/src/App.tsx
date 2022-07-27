import { useState } from "react"
import { Tweet } from "./components/Tweet"
import "./App.css"
import { AppRoutes } from "./AppRoutes"

function App() {
//   const [tweets, setTweets] = useState<string[]>([
//     "Tweet 1",
//     "Tweet 2",
//     "Tweet 3",
//     "Tweet 4"
//   ])

//   function criaTweet() {
//     setTweets([...tweets, "Tweet 5"])

//   }

  return (
    <AppRoutes/>
    // <div>
    //   {tweets.map(tweet => {
    //     return <Tweet text={tweet} />
    //   })}

    //   <button 
    //     onClick={criaTweet}
    //     style={{
    //       backgroundColor: "brown",
    //       border: 0,
    //       padding: "6px 12px",
    //       color: "white",
    //       borderRadius: 20
    //     }}
    //     >
    //       Adicionar Tweet
    //   </button>
    // </div>
  )
}

export default App
