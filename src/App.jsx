import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import './scss/style.scss'

import DefaultLayout from './layout/DefaultLayout'
import Page404 from './views/pages/Page404'

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<DefaultLayout />} />
      </Routes>
    )
  }
}

export default App
