import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react'
import headerImage from "../images/jobbg.jpg"
import SearchInput from './SearchInput';

const Header = () => {
    const StyleHeader = styled(Box)(({ theme }) => (
        {
            display: "flex",
            justifyContent: 'center',
            alignItems:'center',
            minHeight: 400,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: theme.palette.secondary.main
        }

    ));
  return (
    <>
    <StyleHeader>
      <SearchInput/>
    </StyleHeader>
    
    </>
  )
}

export default Header
