import { Box, Button, Container, Rating, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridOnIcon from '@mui/icons-material/GridOn';
import Loading from "../componants/Loading";
const Home = () => {

  let [Data, setData] = useState([])
  const [value, setValue] = useState(2);
  let Navagation = useNavigate()
  const [loading, setLoading] = useState(true)
  let [list, setList] = useState(true)

  const nagivationHandler = () => {
    Navagation('/about')
  }
  const chnageList = ()=>{
    setList(false)
    GridOnIcon.backgroundColor = "black"
  }  
  const chnageGrid = ()=>{
   
setList(true)


  }

  const getData = () => {
    axios.get('https://fakestoreapi.com/products/').then((success) => {
      setData(success.data)
      setLoading(false)
    }).catch(() => {
      alert("loading faild")
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return (

    <Stack> 
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "rgb(116, 162, 181)",
          color: "white"
        }}>
          <Typography variant="h2" sx={{fontSize:{xs:"30px",sm:"40px" ,md:"50px" ,lg:"55px" , xl:"70px"}}}>
            All Products
          </Typography>

        </Box>
      <Container>


        <Box sx={{ float: "right" }}>
          <GridOnIcon onClick={chnageGrid}  sx={ list ? {cursor:"pointer" , m:"6px" , p:"3px" , borderRadius:"50%" , backgroundColor:"rgb(116, 162, 181)" , color: "white"} : {cursor:"pointer" , m:"6px" , p:"3px" ,color: "rgb(116, 162, 181)"}} />
          <FormatListBulletedIcon onClick={chnageList} sx={ list ? {cursor:"pointer" , m:"6px" , p:"3px" ,color: "rgb(116, 162, 181)"} : {cursor:"pointer" , m:"6px" , p:"3px" , borderRadius:"50%" , backgroundColor:"rgb(116, 162, 181)" , color: "white"}  }/>
        </Box>

        {
          list ? <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            p: "2px",
            width: "100%"
          }}>
            {
              loading ? <Loading/> : Data.map((e, i) => {
                return <Box key={i} sx={{
                  width: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px solid rgba(128, 128, 128, 0.557)",
                  padding: 1,
                  borderRadius: "10px"

                }}>
                  
                  <Box component="img" src={e.image} sx={{width:"200px" , height:"180px" }}/>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <Typography sx={{ fontSize: "20px" }}>
                    {e.category}
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    {e.title.slice(0, 20) + "...."}
                  </Typography>
                  <Typography sx={{ fontSize: "10px" }}>
                    {e.description.slice(0, 95) + "....."}
                  </Typography>
                  <Button onClick={nagivationHandler} variant="outlined" sx={{ color: "rgb(116, 162, 181)" }}>{"$" + e.price}</Button>
                </Box>

              })
            }
          </Box> : <Box sx={{
            mt: "10px",
            p: "2px",
            width: "100%",
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
          }}>
            {
              loading ? <Loading/> : Data.map((e, i) => {
                return <Box  key={i} sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid rgba(128, 128, 128, 0.557)",
                  padding: 1,
                  borderRadius: "10px",
                  m: 1,
                  pl:0

                }}>
                  <Box component="img" src={e.image} sx={{width:{xs:"100px",sm:"120px" ,md:"150px" ,lg:"170px" , xl:"170px"}, height:{xs:"150px",sm:"170px" ,md:"190px" ,lg:"210px" , xl:"210px"}}}/>

                  <Box sx={{ ml: 3 }}>
                    <Rating
                      name="simple-controlled"
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                    <Typography sx={{ fontSize: "20px" }}>
                      {e.category}
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      {e.title.slice(0, 20) + "...."}
                    </Typography>
                    <Typography sx={{ fontSize: "10px" }}>
                      {e.description.slice(0, 95) + "....."}
                    </Typography>
                    <Button onClick={nagivationHandler} variant="outlined" sx={{ color: "rgb(116, 162, 181)" }}>{"$" + e.price}</Button>
                  </Box>
                </Box>

              })
            }
          </Box>
        }

      </Container>
    </Stack>

  )
}
export default Home;
