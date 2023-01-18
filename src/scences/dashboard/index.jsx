import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Sidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);
  const [data, setData] = useState([]);
  const [incomedata, setIncomeData] = useState([]);
  const [totaldata, setTotalData] = useState([]);
  const [threespenddata,setThreeSpendTotalData] = useState([]);
  const [threeincomedata,setThreeIncomeTotalData] = useState([]);
  const user_id = localStorage.getItem("user_id")

  useEffect(() => {
    const spend = ()=> {
    axios.get(`http://127.0.0.1:8000/api/v1/spending/total_spending/${user_id}`)
      .then(response => {
        setData(response.data)
      })
    }
    const income = ()=> {
      axios.get(`http://127.0.0.1:8000/api/v1/income/income-list/${user_id}`)
      .then(response => {
        setIncomeData(response.data)
        console.log(incomedata.total_cost)
      })
    }
    const month_spend = () => {
      axios.get(`http://127.0.0.1:8000/api/v1/spending/comparison_last_month/${user_id}`)
      .then(response => {
        setTotalData(response.data)
      })
    }
    const three_month_spend = () => {
      axios.get(`http://127.0.0.1:8000/api/v1/spending/3month_sum/${user_id}`)
      .then(response => {
        setThreeSpendTotalData(response.data)
      })
    }
    const three_month_income = () => {
      axios.get(`http://127.0.0.1:8000/api/v1/income/3month_sum/${user_id}`)
      .then(response => {
        setThreeIncomeTotalData(response.data)
      })
    }
    spend()
    income()
    month_spend()
    three_month_spend()
    three_month_income()
  }, [])


  return (
    <div className="app">
          <Sidebar isSidebar={isSidebar} />
    <main className="content">
          <Topbar setIsSidebar={setIsSidebar}  />
    </main>
 
    <div className="size">
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="환영합니다." />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title= {incomedata.total_cost+"원"}
            subtitle="수입"
            progress="0.75"
            icon={
              <AttachMoneyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
          <StatBox
            title = {data.total_spending+"원"}
            subtitle="지출"
            progress="0.50"
            icon={
              <MoneyOffIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title = {threeincomedata.total_three_month_ago_income}
            subtitle="3개월 전 수입"
            progress="0.30"
            icon={
              <AttachMoneyIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={threespenddata.total_three_month_ago_spending+"원"}
            subtitle="3개월 전 지출"
            progress="0.80"
            icon={
              <MoneyOffIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >

          </Box>
          <Box height="250px" m="-20px 0 0 70px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
       

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            한달 전보다 얼마나 지출이 적을까?
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              전달보다 <b>{totaldata.comparison_total_spending}</b>원 덜 소비 하셨어요!
            </Typography>
            <Typography>소비를 덜 하고싶다면 챌린지 참여해보세요 </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
    </div>
    </div>
  );
};

export default Dashboard;
