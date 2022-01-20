import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height: 60px;
}`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex:1;
    display: flex;  
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 1em;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex:1;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
  <Container>
      <Wrapper>

          <Left>
            <Language>EN</Language>

            <SearchContainer>
              <Input/>
              <Search style={{color: "gray", fontSize:16}}/>
            </SearchContainer>

          </Left>

          <Center>
            <Logo>KAVANI.</Logo>
          </Center>

          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>LOG IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
          </Right>
      </Wrapper>
  </Container>
  )
}

export default Navbar;