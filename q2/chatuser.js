const mysql = require("mysql");
const Promise = require("bluebird");
const ret = require("bluebird/js/release/util");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  database: "CDAC",
  password: "cdac",
};
async function Messageadd(chat) {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection succesfull");
  let sql = `insert into chat (message) values ( ? )`;
  await connection.queryAsync(sql, [chat.message]);
  await connection.endAsync();
  console.log("Message added !!");
}

async function Display() {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("connection succesfull");
  let sql = ` select * from chat`;
  const msglist = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log(msglist);
  return msglist;
}

const chat1 = { message: "hi" };
Messageadd(chat1);

const chat2 = { message: "hello ! How are you" };
Messageadd(chat2);

Display();

module.exports = { Messageadd, Display };
