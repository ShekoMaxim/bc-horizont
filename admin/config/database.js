module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: "ec2-52-200-134-180.compute-1.amazonaws.com",
        port: "5432",
        database: "daul1ppk9oo8dd",
        username: "cpasjngrgisjwe",
        password:
          "4858fe03806ea5daa836727fe63f13eda320270ac8b20643f24a818175847f81",
        ssl: { rejectUnauthorized: false },
      },
      options: {},
    },
  },
});
