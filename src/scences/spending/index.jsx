import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useState, useEffect, useRef } from "react";

import axios from "axios";
import Header from "../../components/Header";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';

const Spending = () => {
  
  let today = new Date();  
  let year = today.getFullYear(); 
  let month = today.getMonth() + 1; 
  let user_id = localStorage.getItem("user_id")

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSidebar, setIsSidebar] = useState(true);
  const [list,setlist] = useState([]);
  const [ocrata, setocrdata] = useState([]);

  const memoRef = useRef()
  const costRef = useRef()
  const whenRef = useRef()
  const purposeRef = useRef()

  //지출 내역 데이터 POST
  const [data, setData] = useState({
      when: "",
      memo: "",
      purpose: "",
      cost: "", 
      ocr_img: null,
  })
// POST
  function submit(e){
    let user_id = localStorage.getItem("user_id")
    axios.post('http://127.0.0.1:8000/api/v1/spending/new/',{
      user : user_id,
      when: data.when,
      memo: data.memo,
      purpose: data.purpose,
      cost: data.cost
    })
      .then(res => {
        memoRef.current.value = "";
        costRef.current.value = "";
        whenRef.current.value = "";
        purposeRef.current.value = "";
        setlist([...list, ...res.data])
      }) 
      .catch(function (error) {
        console.log(error);
      });
  }
  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }



// ocr 모델
const [file, setFile] = useState(false);
  const handleInputChange = (event) => {
    setFile(event.target.files[0]);
  };

// 업로드 버튼 클릭시
  const upload = () => {
    let formData = new FormData();
    formData.append("files", file);
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v1/ocr/",
      data: formData
    }).then(({ data }) => {
      console.log(JSON.stringify(data));
      setData({
        user : user_id,
        when: data.date,
        memo: data.memo,
        purpose: data.purpose,
        cost: data.cost
      })
    });
  };




  // DELETE
  const handleDelete = (id)=>{
    if(window.confirm("삭제를 원하시면 확인 버튼을 눌러주세요.")){
      axios.delete(`http://127.0.0.1:8000/api/v1/spending/${id}`) //spending_id 를 호출 해야함
      .then(response => {
          console.log(response);
      })
      .catch(error => {
          console.log(error);
      })
    }
  }


// UPDATE
  const handleEdit= (id) => {
    axios.put(`http://127.0.0.1:8000/api/v1/spending/${id}`)
      .then(res => {
        console.log(res);
        setData({
          user : user_id,
          when: data.date,
          memo: data.memo,
          purpose: data.purpose,
          cost: data.cost
        })
      }) 
      .catch(function (error) {
        console.log(error);
      });
  }



  const columns = [
    {
      field: "when",
      headerName: "날짜",
      flex: 1,
      editable: true,
    },
    {
      field: "purpose",
      headerName: "용도",
      flex: 1,
      editable: true,
    },
    {
      field: "memo",
      headerName: "메모",
      flex: 1,
      editable: true,
    },
    {
      field: "cost",
      headerName: "금액",
      flex: 1,
      editable: true,
    },
    {
      field : 'action',
      headerName: "수정,삭제",
      flex: 1,
        renderCell : ({row: {id}}) =>{
        
          return (
            <>
              <Button className = "ListEdit"
                onClick ={() => {
                  handleEdit();
                }}
              >수정</Button>
              <Button className='ListDelete'
                onClick ={(e) => {
                  handleDelete(id);
                  window.location.reload()
              }}
              >
              삭제
              </Button>
            </>
        )}
    }

  ];
  //GET
  useEffect(() => {
    const user_id = localStorage.getItem("user_id")
    axios.get(`http://127.0.0.1:8000/api/v1/spending/spending-list/${user_id}`)
    .then(res => {
      //Speding_id localstorage 저장
      setlist(res.data.spending_list);
      // const ids = res.data.spending_list.map(list => list.id);
      // localStorage.setItem('ids', (ids))
    })
  },[])
  

  return (
    <div className="app" >
          <Sidebar isSidebar={isSidebar} />
    <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
    </main>
    <div className="size">
    <Box m="20px">
      <Header title="지출내역" subtitle={(year + '년 '+ month + '월')}/>
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
          .btn-primary.main{
            width : 100px;
           margin-top : -60px;
           margin-left: 90%;
           margin-bottom : 5px;
          }
          .btn-primary.center{
           width : 100px;
           margin-top : 10px;
           margin-bottom : 10px;
           margin-left: 70%;
          }
          .btn-secondary.center{
            width : 100px;
          }
          .btn-primary.second{
            margin-right:13%;
            width : 100px;
            border-radius:6px;
          }
          .m {
            margin-left:8px;
            font-size : 12px;
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
            <Form.Group className="mb-3" >
              <Form.Label>날짜</Form.Label >
              <Form.Control
                ref={whenRef}
                type="date"
                autoFocus
                onChange={(e) => handle(e)} id ="when" value ={data.when} method="post"
              />
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>메모</Form.Label>
              <Form.Control
                ref={memoRef}
                type="text"
                placeholder="메모 (최대 50자)"
                autoFocus
                onChange={(e) => handle(e)} id ="memo" value ={data.memo} method="post"
              />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>용도</Form.Label>
              <select class="form-select" ref={purposeRef} onChange={(e) => handle(e)} id ="purpose" value ={data.purpose} method="post">
                <option selected>용도를 선택하세요.</option>
                <option value="식사">식사</option>
                <option value="술/유흥">술/유흥</option>
                <option value="뷰티/미용">뷰티/미용</option>
                <option value="교통/차량">교통/차량</option>
                <option value="주거/통신">주거/통신</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>금액</Form.Label>
              <Form.Control
                ref={costRef}
                type="text"
                placeholder="금액을 입력하세요."
                autoFocus
                // oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')"
                onChange={(e) => handle(e)} id ="cost" value ={data.cost} method="post"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>영수증 OCR</Form.Label>
              <Form.Control
                type="file"
                autoFocus
                accept="image/*" 
                onChange={handleInputChange} 
                method="post"
              />
               <Button variant="primary center" onClick={() => {
                handleShow();
                upload();
               }}>
                 업로드
               </Button><br/>
               
               <Form.Label className="m">❗영수증 이미지를 업로드 하면, 자동으로 가계부를 작성해드립니다❗</Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary center" onClick={handleClose}>
            닫기
          </Button>
          <Button type="submit" variant="primary second" onClick={()=> {
            handleClose();
            submit();
            window.location.reload()
            }}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
        {/* {list.map(spending_data => <DataGrid checkboxSelection rows={spending_data} columns={columns}/>)} */}
        <DataGrid onSelectionModelChange={datas => {console.log(datas.toString())}}  checkboxSelection rows={list} columns={columns} getRowId={list => list.id}  />
        {/* onChange={(e) => {setlist(e.target.list)}}
        {list.map(spending => (
          <SpendingItem spending={spending}/>
        ))} */}
      </Box>
    </Box>
    </div>
    </div>
  );
  
};


export default Spending;

function SpendingItem({spending}) {
  return ( <div>
    <span>{spending.id}</span>
    <button type='button' onClick={() => alert(`Spending id clicked: ${spending.id}`)}>CLICK</button>
  </div>)
}