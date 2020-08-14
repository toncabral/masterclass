module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'ts_sqlnode',
  define: {
    timestamps: true,
    underscored: true
  }
}
