import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from '../components/app'

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected")
    const root = document.getElementById("app");
    ReactDOM.createRoot(root).render(<App />);


  }
}
