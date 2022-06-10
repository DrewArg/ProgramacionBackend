//usuario root
const adminDbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345",
  database: "coderhouse"
};

//usuario drew
const userDbConfig = {
  host: "localhost",
  port: 3306,
  user: "drew",
  password: "54321",
  database: "coderhouse"
};

export function getConfig(mode) {
  if (mode === "ADMIN") {
    return {
      client: "mysql2",
      connection: adminDbConfig,
    };
  } else {
    return {
      client: "mysql2",
      connection: userDbConfig,
    };
  }
}

// export function getConfig(mode){
//   switch (client) {
//     case 'sqlite3':
//       return {
//         client:'sqlite3',
//         connection: {filename: './db/db.sqlite'},
//         useNullAsDefault:true
//       }
//       case 'mariadb':

//       return {

//       };

//     default:
//       break;
//   }
// }
