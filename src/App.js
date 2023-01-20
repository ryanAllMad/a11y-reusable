import React from 'react'
import TabPanel from './parents/TabPanel'
import { Provider } from './context/TabContext'
import './App.css'


function App() {
  return (
    <div className='App'>
      <div role="complementary">
      <h1>Accessible, Reusable React Components</h1>
      <p>
        This App uses Context, Props, useState, useEffect, and forwardRef to
        build reusable and accessible components.
      </p>
      <p>Consider testing this with your screen reader on.</p>
      <p>Consider testing this using only your keyboard.</p>
      <h2>How to use this interface with a keyboard:</h2>
      <p>Arrow left, arrow right, tab and shift tab on the tab buttons will reveal each component.</p>
      <p>Arrow down and then Tab from the tab buttons will allow you to interact with these components.</p>
      </div>
      <Provider>
        <TabPanel />
      </Provider>
    </div>
  )
}

export default App
