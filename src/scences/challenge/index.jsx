import { Box } from "@mui/material";
import Header from "../../components/Header";
import './index.css'
import Button from 'react-bootstrap/Button';
import Ch from "../../assets/images/sm.svg"
import { useState } from "react";
import Sidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const Challenge = () => {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="app">
    <Sidebar isSidebar={isSidebar} />
    <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
    </main>
    <div className="size">
    <Box m="20px">
      <Header title="챌린지" subtitle="test" />
        <img className = "sub-one" src={Ch}></img>
      <Box height="50vh">
      <h1 className="sub-two"> MY OWN CHALLENGE </h1>
        <h2 className="sub-three">금액을 설정하여, 같이 모아봐요!</h2>
        <p className="sub-four">STEP 1.  금액을 설정해주세요.<br/>
          STEP 2.  현재 지출한 금액을 계산하여, 얼마나 남았는지 알려드릴게요.</p>
        {/* <input type="number" className="input-value"></input> */}

      <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch'},
        "& .MuiOutlinedInput":{"& > fieldset": {border: '1px solid green'}}
      }}
     
      noValidate
      autoComplete="off"
     
      >
      <FormControl fullWidth sx={{ mt: 12}}>
          <InputLabel htmlFor="outlined-adornment-amount">금액</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₩</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </Box>

        <Button type="submit" className="input-button" >
            확인
          </Button>
      </Box>
    </Box>
    </div>
    </div>
  );
};

export default Challenge;
