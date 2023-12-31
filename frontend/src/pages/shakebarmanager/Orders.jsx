import React, { useState } from 'react';
import Box from "@mui/material/Box";
import {Typography,Tabs,Tab,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,Paper,Button} from '@mui/material';
import ShakebarmanagerSidebar from "../../components/ShakebarmanagerSidebar";
import ShakebarmanagerNavbar from "../../components/ShakebarmanagerNavbar";

const Orders = () => {

    const [value, setValue] = useState(0);
    const [pendingItems, setPendingItems] = useState([
      { orderId: 1, itemName: 'Item 1', quantity: 2, totalPrice: 10000, orderedDate: '2023-08-10' },
      { orderId: 2, itemName: 'Item 2', quantity: 3, totalPrice: 6150, orderedDate: '2023-08-12' },
      { orderId: 3, itemName: 'Item 6', quantity: 5, totalPrice: 3150, orderedDate: '2023-08-12' }, 
      { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10' },
      { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' },
      { orderId: 6, itemName: 'Item 2', quantity: 5, totalPrice: 7150, orderedDate: '2023-08-12' },
    ]);
    const [completedItems, setCompletedItems] = useState([
        { orderId: 1, itemName: 'Item 1', quantity: 2, totalPrice: 10000, orderedDate: '2023-08-10',issuedDate:'2023-08-15' },
        { orderId: 2, itemName: 'Item 2', quantity: 3, totalPrice: 6150, orderedDate: '2023-08-12',issuedDate:'2023-08-15' },
        { orderId: 3, itemName: 'Item 6', quantity: 5, totalPrice: 3150, orderedDate: '2023-08-12',issuedDate:'2023-08-15' }, 
        { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10',issuedDate:'2023-08-15' },
        { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' ,issuedDate:'2023-08-15'},
        { orderId: 6, itemName: 'Item 2', quantity: 5, totalPrice: 7150, orderedDate: '2023-08-12',issuedDate:'2023-08-15' },
    ]);
    const [canceledItems, setCanceledItems] = useState([
        { orderId: 3, itemName: 'Item 6', quantity: 5, totalPrice: 3150, orderedDate: '2023-08-12',canceledDate:'2023-08-15' }, 
        { orderId: 4, itemName: 'Item 6', quantity: 2, totalPrice: 33100, orderedDate: '2023-08-10',canceledDate:'2023-08-15' },
        { orderId: 5, itemName: 'Item 5', quantity: 3, totalPrice: 2150, orderedDate: '2023-08-12' ,canceledDate:'2023-08-15'},
    ]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleDone = (item) => {
      // Remove the item from the pendingItems array
      setPendingItems((prevPendingItems) =>
        prevPendingItems.filter((pendingItem) => pendingItem.orderId !== item.orderId)
      );
  
      // Add the item to the completedItems array
      setCompletedItems((prevCompletedItems) => [...prevCompletedItems, item]);
    };
    
    const renderTable = (data) => {
        return (
          <TableContainer component={Paper}>
            <Table style={{ marginTop: '30px', fontSize: '15px' }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontSize: '15px',fontWeight: '700' }}><b>Order Id</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Item Name</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Quantity</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Total Price(LKR)</b></TableCell>
                  <TableCell style={{ fontSize: '15px' }}><b>Ordered Date</b></TableCell>
                  {value === 1 && <TableCell style={{ fontSize: '15px' }}><b>Issued Date</b></TableCell>}
                  {value === 2 && <TableCell style={{ fontSize: '15px' }}><b>Canceled Date</b></TableCell>}
                  {value === 0 && <TableCell style={{ fontSize: '15px' }}></TableCell>}
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: '#F5F5F5' }}>
                {data.map((item) => (
                  <TableRow key={item.orderId}>
                    <TableCell style={{ fontSize: '14px' }}>{item.orderId}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.itemName}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.quantity}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.totalPrice}</TableCell>
                    <TableCell style={{ fontSize: '14px' }}>{item.orderedDate}</TableCell>
                    {value === 1 && <TableCell style={{ fontSize: '14px' }}>{item.issuedDate}</TableCell>}
                    {value === 2 && <TableCell style={{ fontSize: '14px' }}>{item.canceledDate}</TableCell>}
                    {value === 0 && (
                      <TableCell style={{ fontSize: '14px' }}>
                        <Button variant="contained" color="primary" size="small" onClick={() => handleDone(item)}>
                          Done
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      };


  

    return (
        <Box sx={{ flex: "1", display:"flex", mb:2}}>
        <Box>
          <ShakebarmanagerSidebar />
        </Box>
        
        <Box component="main" sx={{flex:1 }}>
          <Box>
            <ShakebarmanagerNavbar />
          </Box>
          <Box sx={{ paddingLeft:"5rem", flex:1 }}>
          <Typography variant="h3" style={{ fontWeight: 700, marginTop: "1rem",marginBottom:'3rem', textAlign:"left" }}>Orders</Typography>
              
     
        <div>
          <Tabs style={{ backgroundColor: '#D7D7D7' }} value={value} onChange={handleChange}>
            <Tab style={{ fontSize: '15px', margin: '0 250px 0 100px',fontWeight: '700' }} label="Pending" />
            <Tab style={{ fontSize: '15px', marginRight: '250px',fontWeight: '700' }} label="Completed" />
            <Tab style={{ fontSize: '15px',fontWeight: '700' }} label="Canceled" />
          </Tabs>
          {value === 0 && renderTable(pendingItems)}
          {value === 1 && renderTable(completedItems)}
          {value === 2 && renderTable(canceledItems)}
        </div>
          
          </Box>
        </Box>
       
      </Box>  );

};

export default Orders;
