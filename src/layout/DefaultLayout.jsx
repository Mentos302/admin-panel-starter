import React from 'react'

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppSidebar from '../components/AppSiderbar'
import AppFooter from '../components/AppFooter'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div>
        <AppHeader />
        <div>
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
