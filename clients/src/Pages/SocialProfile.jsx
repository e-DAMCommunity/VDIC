import React from 'react'

import {Stack , InputAdornment , TextField , Button} from "@mui/material"
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

import Banner from "../Components/Banner";

const SocialProfile = () => {

    React.useEffect(()=>{
        document.title = "e-DAM | Work Profile Setup"
    },[])

  return (
    <div className="w-[100%] h-[100%] flex flex-row items-start justify-center">
      <div className="w-[100%] sm:w-[90%] md:w-[74%] h-[100%] lg:w-[50%] bg-white pt-4 px-8 mb-4 lg:mb-1 mx-auto lg:mx-0 relative flex flex-col space-y-8 lg:space-y-9 text-[#232323]">

        <Stack direction={"column"} spacing={1} width="100%">
          <span className="font-semibold text-2xl">
            Let's get <span className="text-[#C85CFA]">Started</span>
          </span>
          <span className="font-light">
            Add a few basic details to set up your work profile.
          </span>
        </Stack>

        {/* Social Media Handles */}
        <Stack direction={"column"} spacing={{ xs: 2, sm: 4 }}>
          <span className="font-semibold text-xl">
            Share your <span className="text-[#C85CFA]">Social Profiles</span>{" "}
            <span className="font-light text-sm">(only username*)</span>
          </span>
          <Stack width="100%" display="flex" flexDirection={{ xs: "column", sm: "row" }} flexWrap={true} columnGap="0.8rem" rowGap="1rem">
            <TextField fullWidth variant="outlined" label="LinkedIn" color="secondary" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLinkedin fontSize="24px" color="#0A66C2" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField fullWidth variant="outlined" label="Github" color="secondary" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineGithub fontSize="24px" color="black" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField fullWidth variant="outlined" label="Twitter" color="secondary" InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AiOutlineTwitter fontSize="24px" color="#1DA1F2" />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>

        {/* Expertise */}
        <Stack direction={"column"} spacing={{ xs: 2, sm: 4 }}>
          <span className="font-semibold text-xl">
            Share your <span className="text-[#C85CFA]">Expertise</span>{" "}
            <span className="font-light text-sm">(can be 1 or more)</span>
          </span>

        </Stack>

        {/* Next Page Button */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: "1rem", sm: "0.8rem" }} gap={{ xs: "1rem", sm: "0.8rem" }}>

          <Button variant="text" color="secondary" fullWidth sx={{ width : {xs:'100%',sm:'30%'}, color: "#C85CFA", padding: "10px", fontSize: "20px", boxShadow: "none", "&:hover": { backgroundColor: "#fff", boxShadow: "none", transform: "scale(1.02)",}, textTransform: "none", fontWeight: "300", order: { xs: 2, sm: 1 },}}>
            Skip
          </Button>

          <Button variant="contained" fullWidth sx={{ width : {xs:'100%',sm:'70%'}, backgroundColor: "#C85CFA", padding: "10px", fontSize: "20px", boxShadow: "none", "&:hover": { backgroundColor: "#b453e1", boxShadow: "none", transform: "scale(1.02)",}, textTransform: "none", fontWeight: "300", order: { xs: 1, sm: 2 },}}>
            Next
          </Button>

        </Stack>
        
      </div>
      <Banner />
    </div>
  );
}

export default SocialProfile