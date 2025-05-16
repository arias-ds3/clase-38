const { sequelize } = require('./models');

sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión exitosa con la base de datos');
  })
  .catch((err) => {
    console.error('❌ Error al conectar con la base de datos:', err);
  });
