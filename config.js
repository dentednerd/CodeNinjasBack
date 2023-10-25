require('dotenv').config();
const { MONGODB_USERNAME, MONGODB_PASSWORD } = process.env;

module.exports = {
  MONGODB_URI: `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@codeninjas3.zahe6i8.mongodb.net/?retryWrites=true&w=majority`,
};
