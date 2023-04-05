import React, {useState} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Staffsidebar = () => {
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
  return (
    <Container>

        <Home>
           
              <NavLink to="/dashboard/comp" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                  <Text1>Dashboard</Text1>
                </NavLink>
        </Home>
        
            <Home2>
            {/* <Icon2><IoMdPerson  /></Icon2> */}
            <Text2 onClick={Toggle}>Savings</Text2>
          </Home2>
          {show ? (
              <Staffs>
                  <NavLink to="/dashboard" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>School Fees</p>
                    </NavLink>
                  <NavLink to="/dashboard" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>Travel & Tour</p>
                  </NavLink>
                  <NavLink to="/dashboard" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>Rents</p>
                  </NavLink>
          </Staffs>
          ) : null}

        <Home2>
            {/* <Icon2><IoMdPerson /></Icon2> */}
                  <Text3 >Transfers</Text3>
          </Home2>
          
        <Home2>
            {/* <Icon2><IoMdPerson /></Icon2> */}
              <NavLink to="/dashboard" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                  <Text3>Transaction</Text3>
            </NavLink>
        </Home2>

        <Power>
            {/* <Icon2><FiPower /></Icon2> */}
            <Text>Logout</Text>
        </Power>
    </Container>
  )
}

export default Staffsidebar

const Staffs = styled.div`
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    p{
        margin-left: 40px;
        
    }
`

const Power = styled.div`
    width: 100%;
    display: flex;
    margin-top: 195px; 
    align-items: center; 
`


const Text3 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    /* color: #fff; */
    align-items: center;
    display: flex;
    margin-left: 15px;
    width: 410px;
    height: 40px;
    /* margin-bottom: 10px; */
    /* background-color: green; */
`
const Text2 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    /* color: #fff; */
    align-items: center;
    display: flex;
    margin-left: 15px;
    width: 410px;
    height: 40px;
    /* margin-bottom: 10px; */
    /* background-color: green; */
`
const Text = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    /* color: #fff; */
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
    /* background-color: white; */
`
const Text1 = styled.div`
    font-size: 17px;
    font-family: U8,sans-serif;
    cursor: pointer;
    /* color: #fff; */
    align-items: center;
    display: flex;
    margin-left: 15px;
    width: 210px;
    height: 40px;
    /* margin-bottom: 10px; */
    /* background-color: white; */
`

const Home2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25px;
    align-items: center;
`
const Home = styled.div`
    width: 100%;
    display: flex;
    margin-top: 70px;
    align-items: center;
`



const Container = styled.div`
    width: 17%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #F2F5F8;
    padding-left: 25px;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    /* border-top-right-radius: 120px; */
    z-index: 2;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`