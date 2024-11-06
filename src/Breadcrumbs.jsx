import { Link, useLocation } from "react-router-dom"

function Breadcrumbs() {

  const location = useLocation()

  let currentLink = '';
  const crumbs = location.pathname.split('/')

    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink =+ `/${crumb}`
      
      console.log(location)
      return (
        <div className="crumb" key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
      )
    })
    
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <div className="breadcrumbs">
          <i className="fa-solid fa-house"></i>
          <span>Anasayfa</span>
          <i className="fa-solid fa-chevron-right"></i>
          <span className="crumbs" style={{ textTransform: 'capitalize'}}>{crumbs}</span>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumbs