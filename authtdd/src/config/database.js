module.exports = {
  development: {
    username: "docker",
    password: "docker",
    database: "nodeauth",
    host: "locahost",
    dialect: "postgres",
    port: "5432",
    operatorsAliases: false,
    logging: true,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  test: {
    dialect: "sqlite",
    storage: "./__tests__/database.sqlite",
    operatorsAliases: false,
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  production: {
    username: "docker",
    password: "docker",
    database: "nodeauth",
    host: "locahost",
    dialect: "postgres",
    port: "5432",
    operatorsAliases: false,
    logging: true,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}
