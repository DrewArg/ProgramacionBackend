//usuario root
const adminDbConfig = {
  host: "localhost",
  port: 3307,
  user: "root",
  password: "12345",
  database: "coderhouse",
};

//usuario drew
const userDbConfig = {
  host: "localhost",
  port: 3307,
  user: "drew",
  password: "54321",
  database: "coderhouse",
};

export function getConfig(mode) {
  switch (mode) {
    case "sqlite3":
      return {
        client: "sqlite3",
        connection: {
          filename: "src/db/ecommerce/db.sqlite",
        },
        useNullAsDefault: true,
      };

    case "mysql2":
      return {
        client: "mysql2",
        connection: adminDbConfig
      };

    default:
      return {
        client: "mysql2",
        connection: adminDbConfig
      };
  }
}
