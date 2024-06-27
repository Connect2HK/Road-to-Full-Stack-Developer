const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/generate-statement-of-purpose', (req, res) => {
  const { name, email, phone_number, education_institution, job_title } = req.body;

  // Generate the statement of purpose
  const statementOfPurpose = `
  `;

  // Send the statement of purpose to the user
  res.json({ statementOfPurpose });
});

app.listen(3000, () => console.log('SOP Generation Tool listening on port 3000'));
