import React from "react"
import { Link } from "gatsby"
import AdobeIcon from "../../images/adobe.svg";
import defaultStyles from "./logo.module.css"

const Logo = props => {
  const { to } = props

  return (
    <Link to={to} className={defaultStyles.root}>
      <AdobeIcon className={defaultStyles.image}/>
      <span className={defaultStyles.siteText}>Magento</span>
      <span className={defaultStyles.productText}>Page Builder</span>
    </Link>
  )
}

export default Logo
