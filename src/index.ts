// import User from './models/User';
// import Post from './models/Post';
import sequelize from './sequelize';



(async () => {
  try {
      await sequelize.authenticate();
    // await sequelize.sync({ alter: true });
    await sequelize.sync({ force: true });
  
      console.log('success?')
  } catch (error) {
    console.log('Whooops:', error);
  }
})();