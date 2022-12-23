import React from 'react'
import Banner from '../Components/Banner';

import { Button, InputAdornment, Stack, TextField } from "@mui/material";

const UserLink = () => {

    React.useEffect(()=>{
        document.title = 'e-DAM | Your e-DAM Page Link'
    },[])

  return (
    <div className="w-[100%] h-[100%] flex flex-row items-start justify-center">
        <div className="w-[100%] sm:w-[74%] h-[100%] lg:w-[50%] bg-white pt-5 px-8 mb-4 lg:mb-2 mx-auto lg:mx-0 relative flex flex-col space-y-8 lg:space-y-6">
            
            <Stack direction={"column"} spacing={'0.2rem'} width="100%">
                <span className="font-semibold text-2xl text-[#232323]">
                     Your <span className="text-[#C85CFA]">e-DAM</span> Page Link
                </span>
                <span className="font-light text-[#232323]">
                    Have a user friendly URL for users to remember easily.
                </span>
            </Stack>

            <Stack direction={"column"} width="100%">
                <TextField label="e-DAM Profile Link" variant='outlined' fullWidth color='secondary' InputProps={{startAdornment : (<InputAdornment position='start'>https://edam.tech/</InputAdornment>)}} helperText="This is a custom made URL. So, feel free to edit"/>
            </Stack>

            <Button variant="contained" fullWidth sx={{ backgroundColor: "#C85CFA", padding: "10px", fontSize: "20px", "&:hover": { backgroundColor: "#b453e1" }, textTransform: "none" }}>Complete</Button>

        </div>
        <Banner/>
    </div>
  );
}

export default UserLink