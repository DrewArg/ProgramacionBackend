//usuario root
const adminDbConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "12345",
  database: "coderhouse",
};

//usuario drew
const userDbConfig = {
  host: "localhost",
  port: 3306,
  user: "drew",
  password: "54321",
  database: "coderhouse",
};

export function getConfig(mode) {
  console.log(mode);
  switch (mode) {
    case "sqlite3":
      return {
        client: "sqlite3",
        connection: {
          filename: "src/db/ecommerce/db.sqlite",
        },
        useNullAsDefault: true,
      };

    case "mysql":
      return {
        client: "mysql",
        connection: adminDbConfig
      };

    default:
      return {
        client: "mysql",
        connection: adminDbConfig
      };
  }
}
