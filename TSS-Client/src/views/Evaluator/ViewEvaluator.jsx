import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography } from '@mui/material';

const ViewEvaluator = () => {
  const [evaluators, setEvaluators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch all evaluators when the component mounts
    axios.get('http://localhost:8081/admin/evaluator/getAll')
      .then((response) => {
        console.log('API response:', response.data.data); // Log the API response for debugging
        setEvaluators(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching evaluators:', error);
        setError('Error fetching evaluators. Please try again later.');
        setLoading(false);
      });
  }, []);

  console.log('Evaluators state:', evaluators); // Log the evaluators state for debugging

  return (
    <div>
      {/* Data view section  */}
      {loading ? (
        <Typography variant="h5">Loading...</Typography>
      ) : error ? (
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      ) : (
        <div className="data-view mt-3">
          <Typography variant="h5">Evaluators List</Typography>
          {Array.isArray(evaluators) && evaluators.length > 0 ? (
            evaluators.map((evaluator) => (
              <Card key={evaluator.evaluatorId} className="mb-3">
                <Card.Body>
                  <Typography variant="subtitle1">Name: {evaluator.data.data.name}</Typography>
                  <Typography variant="body1">Email: {evaluator.data.user.email}</Typography>
                  <Typography variant="body1">Role: {evaluator.user.role.roleName}</Typography>
                  <Typography variant="body1">Title: {evaluator.title}</Typography>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Typography variant="body1">No evaluators found.</Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewEvaluator;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Card, Typography } from '@mui/material';

// const ViewEvaluator = () => {
//   const [evaluators, setEvaluators] = useState([]);

//   useEffect(() => {
//     // Fetch all evaluators when the component mounts
//     axios.get('http://localhost:8081/admin/evaluator/getAll')
//       .then((response) => {
//         console.log('API response:', response.data); // Log the API response for debugging
//         setEvaluators(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching evaluators:', error);
//       });
//   }, []);

//   console.log('Evaluators state:', evaluators); // Log the evaluators state for debugging

//   return (
//     <div>
//       {/* Data view section  */}
//       {evaluators.length > 0 && (
//         <div className="data-view mt-3">
//           <Typography variant="h5">Evaluators List</Typography>
//           {evaluators.map((evaluator) => (
//             <Card key={evaluator.id} className="mb-3">
//               <Card.Body>
//                 <Typography variant="subtitle1">Name: {evaluator.name}</Typography>
//                 <Typography variant="body1">Email: {evaluator.email}</Typography>
//                 <Typography variant="body1">Role: {evaluator.roles}</Typography>
//                 <Typography variant="body1">Title: {evaluator.title}</Typography>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewEvaluator;
