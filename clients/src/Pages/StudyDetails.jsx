import React , {useContext} from 'react'

import Banner from '../Components/Banner';
import { FormControl, MenuItem, TextField, Stack, Button, InputAdornment } from "@mui/material";
import Context from '../Context/Context';

const StudyDetails = () => {

    const context = useContext(Context);
    const {studyDetails , setStudyDetails} = context;

    React.useEffect(()=>{
        document.title = "e-DAM | Work Profile Setup"
    },[])

  return (
    <div className='w-[100%] h-[100%] flex flex-row items-start justify-center'>

        <div className="w-[100%] sm:w-[74%] h-[100%] lg:w-[50%] bg-white pt-5 px-8 mb-4 lg:mb-2 mx-auto lg:mx-0 relative flex flex-col space-y-8 lg:space-y-6">

            <Stack direction={"column"} spacing={'0.2rem'} width="100%">
                <span className="font-semibold text-2xl text-[#232323]">
                    Current Study <span className="text-[#C85CFA]">Details</span>
                </span>
                <span className="font-light text-[#232323]">
                    Add a few study details to set up your work profile.
                </span>
            </Stack>

            <FormControl sx={{width:"100%" , rowGap:"1.2rem"}}>
                <TextField select variant='outlined' color='secondary' label='Select your collage' fullWidth value={studyDetails.collage} onChange={(e)=>{setStudyDetails({...studyDetails , collage : e.target.value})}} defaultValue=''>
                    <MenuItem value='CBIT'>CBIT</MenuItem>
                    <MenuItem value='IARE'>IARE</MenuItem>
                </TextField>

                <TextField select variant='outlined' color='secondary' label='Year of Study' fullWidth value={studyDetails.year} onChange={(e)=>{setStudyDetails({...studyDetails , year : e.target.value})}} defaultValue=''>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </TextField>

                <TextField select variant='outlined' color='secondary' label='Select your branch' fullWidth value={studyDetails.branch} onChange={(e)=>{setStudyDetails({...studyDetails , branch : e.target.value})}} defaultValue=''>
                    <MenuItem value='CSE'>CSE</MenuItem>
                    <MenuItem value='EEE'>EEE</MenuItem>
                </TextField>

            </FormControl>

            <Stack direction={"column"} spacing={'0.2rem'} width="100%">
                <span className="font-semibold text-2xl text-[#232323]">
                    Github <span className="text-[#C85CFA]">Projects</span>
                </span>
                <span className="font-light text-[#232323]">
                    Add your github projects link to your profile
                </span>
            </Stack>

            <Stack direction={{xs:'column',sm:'row'}} gap={'1rem'} width="100%">
                <TextField label="Github Project URL" variant='outlined' fullWidth color='secondary' InputProps={{startAdornment : (<InputAdornment position='start'>https://</InputAdornment>)}}/>
                <Button variant='outlined' color='secondary' sx={{textTransform : 'none' , fontSize : '16px'}}>Add</Button>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: "1rem", sm: "0.8rem" }} gap={{ xs: "1rem", sm: "0.8rem" }}>

                <Button variant="text" color="secondary" fullWidth sx={{ width : {xs:'100%',sm:'30%'}, color: "#C85CFA", padding: "10px", fontSize: "20px", boxShadow: "none", "&:hover": { backgroundColor: "#fff", boxShadow: "none", transform: "scale(1.02)",}, textTransform: "none", fontWeight: "300", order: { xs: 2, sm: 1 },}}>
                    Skip
                </Button>

                <Button variant="contained" fullWidth sx={{ width : {xs:'100%',sm:'70%'}, backgroundColor: "#C85CFA", padding: "10px", fontSize: "20px", boxShadow: "none", "&:hover": { backgroundColor: "#b453e1", boxShadow: "none", transform: "scale(1.02)",}, textTransform: "none", fontWeight: "300", order: { xs: 1, sm: 2 },}}>
                    Next
                </Button>

            </Stack>

        </div>

        <Banner/>
    </div>
  )
}

export default StudyDetails