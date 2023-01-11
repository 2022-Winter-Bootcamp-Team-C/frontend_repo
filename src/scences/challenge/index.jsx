import { Box } from "@mui/material";
import Header from "../../components/Header";
import './index.css'
import Button from 'react-bootstrap/Button';
import Ch from "../../assets/images/challenge.svg"

const Challenge = () => {
  return (
    
    <Box m="20px">
      <Header title="챌린지" subtitle="test" />
        <img className = "sub-one" src={Ch} />
        <h1 className="sub-two"> MY OWN CHALLENGE </h1>
        <h1 className="sub-three">금액을 설정하여, 같이 모아봐요!</h1>
        <p className="sub-four">STEP 1.  금액을 설정해주세요.<br/>
          STEP 2.  현재 지출한 금액을 계산하여, 얼마나 남았는지 알려드릴게요.</p>
      <Box height="50vh">
        <h1 className="sub-five">도전할 금액을 설정하세요.</h1>
        <input type="number" className="input-value"></input>
        <Button type="submit" className="input-button" >
            확인
          </Button>
      </Box>
    </Box>
  );
};

export default Challenge;
