import { Link } from 'react-router-dom'

const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && <i>icon</i>}
        {name && name}
        {badge && <div>{badge.text}</div>}
      </>
    )
  }

  const navItem = (item) => {
    const { to, name, badge, icon } = item

    return <Link to={to}>{navLink(name, icon, badge)}</Link>
  }

  return <nav>{items && items.map((item, index) => navItem(item, index))}</nav>
}

export default AppSidebarNav
