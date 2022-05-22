import React, { useState } from "react"
import PropTypes from 'prop-types'
import {Dropdown,DropdownToggle, DropdownMenu,DropdownItem} from "reactstrap"
import {  Link } from "react-router-dom"
import user1 from "../../../assets/images/users/user-4.jpg"

import { signOut } from 'firebase/auth';
import { auth } from '../../../Database/init-firebase'

const ProfileMenu = props => {

  const [menu, setMenu] = useState(false)

  return (
    <React.Fragment>
      <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">

        <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
          <img className="rounded-circle header-profile-user" src={user1} alt="Header Avatar"/>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem tag="a" href="/profile"><i className="bx bx-user font-size-16 align-middle me-1" />Profile</DropdownItem>
          <div className="dropdown-divider" />

          <Link 
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("user signed out");
                })
                .catch((error) => {
                  console.log("error", error);
                });
            }}

          className="dropdown-item"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /><span>Logout</span> </Link>
        </DropdownMenu>

      </Dropdown>
    </React.Fragment>
  )
}

// ProfileMenu.propTypes = {
//   success: PropTypes.any,
//   t: PropTypes.any
// }



export default ProfileMenu
// export default withRouter(
//   connect(mapStatetoProps, {})(withTranslation()(ProfileMenu))
// )
