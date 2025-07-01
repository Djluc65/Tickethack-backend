const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://CarolineWeinberger:tetjuC-kapnah-fofze0@carolineweinberger.zti1zj1.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
