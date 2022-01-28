import AppSidebarNav from './AppSidebarNav'

// sidebar nav config
import navigation from '../_nav'

const AppSiderbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__branding">
        <h1>Sidebar</h1>
      </div>
      <div className="sidebar__nav">
        <AppSidebarNav items={navigation} />
      </div>
    </div>
  )
}

export default AppSiderbar
