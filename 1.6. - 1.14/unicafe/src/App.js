import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <tr>
    <td>{props.text}:</td> 
    <td>{props.value}</td>
    </tr>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}> {props.text}</button>
  )
}

const Statistics = (props) => {
  const all = props.bad + props.good + props.neutral
  const oneprocent = all / 100
  const average =  (props.good - props.bad) / oneprocent / 100 ;
  const positive = props.good / oneprocent + '%'
  if(!all){
    return(
      <div>
        <h2>No Feedback given</h2>
      </div>
    )
  }
  return(
    <div>
      <table>
      <thead>
        <tr>
            <th><h2>Statistics</h2></th>
        </tr>
    
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positive" value ={positive} />
      </thead>
      </table>    
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give us your Feedback!</h1>
  <Button 
  onClick = {() => setGood(good + 1)} 
  text = 'Good'
  />
  <Button 
  onClick = {() => setNeutral(neutral + 1)} 
  text = 'Neutral'
  />
  <Button 
  onClick = {() => setBad(bad + 1)} 
  text = 'Bad'
  />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App