import React , {useContext} from 'react'
import Banner from "../Components/Banner";

import { Button, Stack, TextField, InputAdornment , FormControl } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import Context from "../Context/Context";

import {Link} from "react-router-dom";

const Registration = () => {

    const context = useContext(Context);
    const {typedIn , setTypedIn} = context;

    React.useEffect(()=>{
        document.title = 'e-DAM | Registration';
      },[])

  return (
    <div className='w-[100%] h-[100%] flex flex-row items-start justify-center'>
        <div className="w-[100%] sm:w-[74%] h-[100%] lg:w-[50%] bg-white pt-5 px-8 mb-4 lg:mb-2 mx-auto lg:mx-0 relative flex flex-col space-y-8 lg:space-y-6 text-[#232323]">

            {/* Registration Page Head - Title,Subtitle */}
            <Stack direction={"column"} spacing={1} width="100%">
                <span className="font-semibold text-2xl">
                    Register to <span className="text-[#C85CFA]">e-DAM</span>
                    <span className='text-xl mx-1 text-gray-500'> / <Link className='text-lg text-[#C85CFA] underline mx-1' to="/login">Login</Link></span>
                </span>
                <span className="font-light">
                    Perfect way to stay connected with community
                </span>
            </Stack>

            {/* Sign Up With Google and Twitter */}
            <Stack width={'100%'} direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
                <Button fullWidth variant="outlined" startIcon={<FcGoogle className="w-8 h-8" />} sx={{ textTransform: "none", color: "#252525", borderColor: "#E6E6E6", padding: "12px 16px", fontSize: {md:"14px",sm:'12px',xs:'16px'}, "&:hover": { borderColor: "#252525" , backgroundColor:'transparent' , scale:"1.04" }}} disableElevation={true} disableFocusRipple={true}>
                    Sign In With Google
                </Button>

                <Button fullWidth variant="outlined" startIcon={<BsGithub className="w-8 h-8 text-[#232323]" />} sx={{ textTransform: "none", color: "#252525", borderColor: "#E6E6E6", padding: "12px 16px", fontSize: {md:"14px",sm:'12px',xs:'16px'}, "&:hover": { borderColor: "#252525" , backgroundColor:"transparent" , scale:"1.04" } }} disableElevation={true} disableFocusRipple={true}>
                    Sign In With Github
                </Button>
            </Stack>

            {/* OR Seperator */}
            <Stack direction={"row"} alignItems="center" justifyContent={"center"} spacing={1.6} sx={{ width: '100%', marginY: "10px" }}>
                <span className="line h-[0.05rem] w-64 bg-[#252525]"></span>
                <span className="text-[#C85CFA] font-semibold">OR</span>
                <span className="line h-[0.05rem] w-64 bg-[#252525]"></span>
            </Stack>

            {/* Manual Sign Up Form */}
            <FormControl sx={{width:"100%" , rowGap:"1.6rem"}}>

                {/* First Name and Last Name */}
                <Stack width={'100%'} direction={{ xs: "column", sm: "row" }} spacing={{ xs: "1.6rem", sm: "1.6rem" }} >
                    <TextField fullWidth id="firstName" name='register_firstname' variant="outlined" aria-describedby="myfirstName" label="First Name" placeholder="Eg : John" color="secondary"/>
                    <TextField fullWidth id="lastName" name='register_lastname' variant="outlined" aria-describedby="username" label="Last Name" placeholder="Eg : Doe" color="secondary"/>
                    
                </Stack>

                {/* Email and Passoword */}
                <Stack width={'100%'} direction={'column'} spacing={"1.6rem"}>
                    
                    <TextField fullWidth id="register_email" name='register_email' label="Email Address" variant="outlined" placeholder="Eg : johndoe123@gmail.com" color="secondary"/>

                    <TextField fullWidth id="register_password" name='register_password' type={typedIn} label="Password" variant="outlined" placeholder="Password" color="secondary" helperText="Must have 8 characters including symbols (Eg : A76@cd9hd)"
                    InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        {typedIn === "password" ? (
                        <VisibilityOffIcon
                            sx={{ cursor: "Pointer" }}
                            onClick={() => {
                            setTypedIn("text");
                            }}
                        />
                        ) : (
                        <VisibilityIcon
                            sx={{ cursor: "Pointer" }}
                            onClick={() => {
                            setTypedIn("password");
                            }}
                        />
                        )}
                    </InputAdornment>
                    )
                    }}/>

                    {/* Register Button */}
                    <Button variant="contained" fullWidth sx={{ backgroundColor: "#C85CFA", padding: "10px", fontSize: "20px", "&:hover": { backgroundColor: "#b453e1" }, textTransform: "none"}}>Get Started</Button>
                </Stack>
            </FormControl>
        </div>
        
        <Banner/>
    </div>
  )
}

export default Registration