import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState,  useEffect } from "react";
import axios from "axios";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';

const Invoices = () => {
  let today = new Date();  
  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState(null);

    // const onClick = useEffect(() => {
    //   axios.post('http://127.0.0.1:8000/api/v1/spending/new/')
    //     .then(response => {
    //       setData(response.data)
    //     })
    // }, [])
  

  const columns = [
    {
      field: "date",
      headerName: "날짜",
      flex: 1,
    },
    {
      field: "purpose",
      headerName: "용도",
      flex: 1,
    },
    {
      field: "memo",
      headerName: "메모",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "금액",
      flex: 1,
      
      // renderCell: (params) => (
      //   <Typography color={colors.greenAccent[500]}>
      //     ${params.row.cost}
      //   </Typography>
      // ),
    },
    {
      field : "image",
      headerName: "이미지 여부",
      flex : 1,
    },
    {
      // renderCell : (parms) =>(
      // <Button variant="outlined" startIcon={<DeleteIcon/>}>
      //   삭제
      // </Button>
      // ) //삭제 버튼
      
    }
  ];

  return (
    
    <Box m="20px">
      <Header title="수입내역" subtitle={(year + '년 '+ month + '월')}/>

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
      
      <style type="text/css">
        {`
          .modal-title, .form-label {
            color: black;
          }
          .form-label.m{
            margin-left: 10%;
          }
          .btn-primary.main{
           margin-left: 92%;
           margin-bottom : 10px;
          }
          .btn-primary.center{
           margin-top : 10px;
           margin-bottom : 10px;
           margin-left: 85%;
          }
       `}
      </style>
      <Button variant="primary main" onClick={handleShow}>
            내역 추가
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>지출 내역 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>날짜</Form.Label>
              <Form.Control
                type="date"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>메모</Form.Label>
              <Form.Control
                type="text"
                placeholder="메모 (최대 50자)"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>용도</Form.Label>
              <select class="form-select" aria-label="Default select example">
                <option selected>용도를 선택하세요.</option>
                <option value="1">식사</option>
                <option value="2">술/유흥</option>
                <option value="3">뷰티/미용</option>
                <option value="4">교통/차량</option>
                <option value="5">주거/통신</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>금액</Form.Label>
              <Form.Control
                type="number"
                placeholder="금액을 입력하세요."
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>영수증 OCR</Form.Label>
              <Form.Control
                type="file"
                placeholder=""
                autoFocus
              />
               <Button variant="primary center" onClick={handleShow}>
                 업로드
               </Button><br/>
               <Form.Label className="m">❗영수증 이미지를 업로드 하면, 자동으로 가계부를 작성해드립니다❗</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button type="submit" variant="primary" onClick={()=> {
            handleClose()
            // onClick()
             }}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
        
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
  
};

export default Invoices;
