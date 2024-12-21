import React from 'react'
import Wrapper from '../assets/Wrapper/AdminPanel'
import { useDashboardContext } from '../Pages/Dashboard'

const AdminPanel = () => {

    const {AddLiveModalHandler, AddVideoModalHandler} = useDashboardContext();
  return (
    <Wrapper>
        <div onClick={() => AddLiveModalHandler(true)}>
            Change Live Stream
        </div>
        <div onClick={() => AddVideoModalHandler(true)}>
            Add Video
        </div>
        <div>
            Update Logo
        </div>
    </Wrapper>
  )
}

export default AdminPanel
