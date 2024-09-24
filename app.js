const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const User = require('./models/user');
const Address = require('./models/address');

const app = express();
app.use(bodyParser.json());


sequelize.sync({ force: true }).then(() => {
  console.log("Database synced");
}).catch(err => console.log(err));


app.post('/register', async (req, res) => {
  const { name, address } = req.body;

  try {
    const user = await User.create({ name });
    const addr = await Address.create({ address, UserId: user.id });

    res.status(201).json({ message: 'User and address added', user, addr });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
