const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST, // assign your host name
  user: process.env.DATABASE_USERNAME, //  assign your database username
  password: process.env.DATABASE_PASSWORD, // assign your database password
  database: process.env.DATABASE_NAME, // assign database Name
  port: process.env.DATABASE_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

pool.getConnection((err, conn) => {
  if (err) throw err;
  console.log("Database is connected successfully !");

  pool.releaseConnection(conn);
});

module.exports = pool;
