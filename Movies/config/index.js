require("dotenv").config()
//indica q a partir de estedotenv accedems al  p cargar las configuraciones
const config = {
    mode: process.env.MODE,
    jwt_secret:process.env.JWT_SECRET,
    uri: process.env.URI,
    port:process.env.PORT,
    db_password: process.env.DB_PASSWORD,
    db_username: process.env.DB_USERNAME,
    db_host:process.env.DD_HOST,
    db_name:process.env.DB_NAME,
    oauth_client_id:process.env.OAUTH_CLIENT_ID,
    oauth_client_secret:process.env.OAUTH_CLIENT_SECRET,
    oauth_callback_url:process.env.OAUTH_CALLBACK_URL
}

module.exports = config
