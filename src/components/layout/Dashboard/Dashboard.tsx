import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { SideBar } from '../../block'

const Dashboard = () => {
  return (
    <div>
        <SideBar />
     <Container>
   
        <Outlet />
     </Container>
    </div>
  )
}

export default Dashboard

const Container = styled.div`
display: flex;
justify-content: flex-end;
`