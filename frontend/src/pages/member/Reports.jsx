import {React, useState} from "react";
import Box from "@mui/material/Box";
import { Typography,  Select, MenuItem, Button, InputLabel, FormControl} from "@mui/material";
import { Bar } from 'react-chartjs-2';

const Reports = () => {

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };


    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
          label: 'Sales',
          data: [5, 2, 3, 1, 4, 2, 3,1,2,0,1,1,2,1,3,0,4,1,2,5,4,3,1,2,0,1,2,3,0,0,1],
          backgroundColor: ['#2C3E50','#5DADE2', '#E74C3C', '#2C3E50', '#5DADE2', '#E74C3C', '#2C3E50'],
          borderColor: ['#2C3E50','#5DADE2', '#E74C3C', '#2C3E50', '#5DADE2', '#E74C3C', '#2C3E50'],
          borderWidth: 1
        }]
      };
    
      const options = {
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            }
          },
          y: {
            grid: {
              display: false,
            }
          }
        }
      };

      const selectStyle = {
      
        marginBottom: "2rem",
        color: "black",
        backgroundColor: "lightgray",
        width: "10rem",
        height: "3rem",
      };
    
      
      

  return (
    <Box >
        <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem", textAlign:"left"}}>Reports</Typography>
        
        <Box sx={{display:"flex", width:"95%", height:"60%", backgroundColor:"#E5E8E8", padding:"0.8rem", borderRadius:"10px", marginBottom:"1rem", marginTop:"0.5rem"}}>
            <Box sx={{width:"75%", height:"100%", backgroundColor:"white", borderRadius:"10px"}}>
                <Typography variant="h5" style={{ fontWeight: 700, marginTop: "1rem", marginLeft: "1%" }}>Monthly Session Overview</Typography>
                <Box sx={{}}>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px", margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Scheduled personal <br /> Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>10 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Completed personal <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>10 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>Cancelled personal <br /> Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>10 </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:"flex", justifyContent:"center"}}>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>Scheduled training <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>10 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>Completed training <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center", }}>10 </Typography>
                        </Box>
                        <Box sx={{backgroundColor: "#E5E8E8", padding:"0.7rem", borderRadius:"10px",  margin:"1rem", width:"25%"}}>
                            <Typography variant="h6" style={{ fontSize:"18px",fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>Cancelled training <br />Workouts </Typography>
                            <Typography variant="h5" style={{ fontWeight: 600, marginTop: "1rem", textAlign:"center",  }}>10 </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Bar data={data} options={options} style={{padding:"4rem"}}/>   
                </Box>

               

            </Box>
            <Box sx={{width:"25%", height:"100%"}}>
              <FormControl>
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedYear}
                    label="Year"
                    onChange={handleYearChange}
                    style={selectStyle}
                  >
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                    <MenuItem value="2023">2023</MenuItem>
                  </Select>
              </FormControl>
               
            
            <br />
            <FormControl>
              <InputLabel htmlFor="month-select">Month</InputLabel>
              <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedMonth}
                    label="Month"
                    onChange={handleMonthChange}
                    style={selectStyle}
              > 
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                <MenuItem value="March">March</MenuItem>
                <MenuItem value="April">April</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">June</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">August</MenuItem>
                <MenuItem value="September">September</MenuItem>
                <MenuItem value="October">October</MenuItem>
                <MenuItem value="November">November</MenuItem>
                <MenuItem value="December">December</MenuItem>
              </Select>
            </FormControl>
      <br />
                
                <Button variant="contained" style={{marginTop:"38rem"}}>Contained</Button>
            </Box>
        </Box>

      
    </Box>
  );
};

export default Reports;
