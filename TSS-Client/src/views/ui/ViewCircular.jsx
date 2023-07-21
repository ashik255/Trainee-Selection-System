
import React, { useState, useEffect } from 'react';
import { Container, Paper, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';
// import { G } from '@react-pdf/renderer';

const ViewCircular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/admin/circular/getAllCircular');
        setData(response.data.data);

        console.log('Fetched Data:', response.data.data);
      } catch (error) {
        console.error(error);
        // Handle error here, e.g., show an error message to the user.
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
<Paper elevation={3} style={{ padding: '20px' }}>
      <Grid container spacing={3}>
        {data.map((data) => (
            <Grid item xs={12} sm={6} md={4}>
          <Card key={data.id}  style={{ marginBottom: '20px' }}>
             <CardMedia
               component="img"
               height="200"
               image={data.imgLink}
              alt={data.title}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {data.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {data.description}
              </Typography>
            </CardContent>
            <Button variant="outlined" color="primary">
              Learn More
            </Button>
          </Card>
            </Grid>
        ))}
        </Grid>
      </Paper>
     </Container>
 );
};

export default ViewCircular;

// import React, { useState, useEffect } from 'react';
// import { Container, Paper, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
// import axios from 'axios';

// const ViewCircular = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Simulating API call and setting the data to state
//     // Replace this with your actual API call
//     const fetchData = async () => {
//       try {
//         // Replace 'your-api-endpoint-url' with your actual API endpoint
//         const response = await axios.get('http://localhost:8081/admin/getAllCircular');

//         // In a real-world scenario, you would set the actual API response data to the 'data' state.
//         // For demonstration purposes, we'll use dummy data.
//         const dummyData = [
//           {
//             id: 1,
//             title: 'Card 1',
//             description: 'This is the description for Card 1.',
//             imageUrl: 'https://example.com/image1.jpg', // Replace with your image URL
//           },
//           {
//             id: 2,
//             title: 'Card 2',
//             description: 'This is the description for Card 2.',
//             imageUrl: 'https://example.com/image2.jpg', // Replace with your image URL
//           },
//           {
//             id: 3,
//             title: 'Card 3',
//             description: 'This is the description for Card 3.',
//             imageUrl: 'https://example.com/image3.jpg', // Replace with your image URL
//           },
//         ];

//         setData(dummyData);
//       } catch (error) {
//         console.error(error);
//         // Handle error here, e.g., show an error message to the user.
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Container>
//       <Paper elevation={3} style={{ padding: '20px' }}>
//         {data.map((data) => (
//           <Card key={data.id} style={{ marginBottom: '20px' }}>
//             <CardMedia
//               component="img"
//               height="200"
//               image={data.imageUrl}
//               alt={data.title}
//             />
//             <CardContent>
//               <Typography variant="h5" component="h2">
//                 {data.title}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {data.description}
//               </Typography>
//             </CardContent>
//             <Button variant="outlined" color="primary">
//               Learn More
//             </Button>
//           </Card>
//         ))}
//       </Paper>
//     </Container>
//   );
// };

// export default ViewCircular;
