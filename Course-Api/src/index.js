
import express from 'express';
import courceRoute from './routers/courceRoutes.js';

const app = express();
app.use(express.json());
const PORT = 8080;

app.use('/api/v1/',courceRoute);





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });