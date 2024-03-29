import React, { useEffect } from 'react'
import { Logo , Aside,  SearchInput} from './index'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function Navbar(props) {

    const profileData = useSelector(state=> state.auth.profileData)
     
    const location = useLocation();

  return (
    <div>
      <div className='flex py-2 bg-black'>
          <div className='absolute  w-8'>
              <div className='fixed  top-0 left-0'>
                {props.visible && <Aside/>}
              </div>
              <div className={`profile  pt-4 ${props.visible? 'hidden' : 'show' } justify-end flex items-center w-16 rounded-full p-1`} onClick={props.aside}> 
                {profileData && <img className='rounded-full w-8 h-8 border-2'  src={profileData.data.account.avatar.url} alt="" /> }         
              </div>
          </div>
          <div className='justify-center w-5/6 h-13 flex  ps-16 py-3' >
            {location.pathname === '/Search' ? <SearchInput/> : <Logo/> }
              
          </div>
          <div className='py-3 px-6'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
        </div>
    </div>
  )
}

export default Navbar
