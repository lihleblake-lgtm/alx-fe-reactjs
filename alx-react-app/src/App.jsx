import React from 'react'
import ReactionButtons from './components/ReactionButtons'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <h1>My Reaction App 💖</h1>
      <p>Click the buttons below to react!</p>
      <ReactionButtons />
    </div>
  )
}
