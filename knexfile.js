// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://postgres:1234@localhost/ems',
    migrations:{
      directory:__dirname+'/db/migrations'
    },
    seeds:{
      directory:__dirname+'/db/seeds'
    }
  },

  production: {
    client: 'pg',
    connection:`${process.env.DATABASE_URL}?ssl=true`,
    migrations:{
      directory:__dirname+'/db/migrations'
    },
    seeds:{
      directory:__dirname+'/db/seeds'
    }
  }

};
