import React from 'react'
import Wrapper from '../assets/Wrapper/AdminPanel'
import { useDashboardContext } from '../Pages/Dashboard'

const AdminPanel = () => {

    const {AddLiveModalHandler, AddVideoModalHandler,handleLogoUpdateModel} = useDashboardContext();
  return (
    <Wrapper>
        <div className='panel' onClick={() => AddLiveModalHandler(true)}>
            Change Live Stream
        </div>
        <div className='panel' onClick={() => AddVideoModalHandler(true)}>
            Add Video
        </div>
        <div className='panel' onClick={() => handleLogoUpdateModel(true)}>
            Update Logo
        </div>
    </Wrapper>
  )
}

export default AdminPanel
