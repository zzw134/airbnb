import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app_footer'
import AppHeader from './components/app_header'
import useScrollToTop from './hooks/useScrollToTop'
import routes from './router'

const App = memo(() => {
  useScrollToTop()
  return (
    <div className='app'>
      <AppHeader/>
      <Suspense fallback='loading'>
        <div className="page">
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App