import { createContext, useState } from 'react'

const NavContext = createContext({
  mobile: null,
  setMobile: function () { },
})

export function NavContextProvider(props) {
  const [activeMobile, setActiveMobile] = useState()


  function setMobileHandler() {
    setActiveMobile(!activeMobile)
  }


  const context = {
    mobile: activeMobile,
    setMobile: setMobileHandler,
  };

  return (
    <NavContext.Provider value={context}>
      {props.children}
    </NavContext.Provider>
  )
}

export default NavContext