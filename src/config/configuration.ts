export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  mongo_pw: process.env.MONGO_PW,
  mongo_user: process.env.MONGO_USER,
  database: {
    host: process.env.MONGO_URI,
  },
});
