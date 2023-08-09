import React from 'react'
import {  useSelector } from 'react-redux'

import { Box, Typography } from '@mui/material'
import CardElement from './CardElement'

const UserJobHistory = () => {

    const {user}=useSelector(state=>state.profile)

    
  return (
    <>

        <Box>
        <Typography variant="h4" sx={{ color: "#fafafa" }}> Jobs History</Typography>
        <Box>
            {
                user?.jobHistory?.map((job,i)=>
                <CardElement
                    key={i}
                    id={job?._id}
                    jobTitle={job?.title}
                    description={job?.description}
                    category={""}
                    location={job?.location}
                />)
            }
        </Box>
        </Box>
    </>
  )
}

export default UserJobHistory
