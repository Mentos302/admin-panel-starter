import React from 'react'

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppSidebar from '../components/AppSiderbar'
import AppFooter from '../components/AppFooter'

const DefaultLayout = () => {
  return (
    <main>
      <AppSidebar />
      <div className="container">
        <AppHeader />
        <div className="content">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </main>
  )
}

export default DefaultLayout
