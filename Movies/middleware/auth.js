const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config');

const handleToken = (token, req, res, next) => {
  try {
    const decoded = jwt.verify(token, jwt_secret);
    //añado el token verificado al usuario
    req.user = decoded;
    return validateRole(req, res, next);
  } catch (error) {
    console.error('JWT error', error.message);
    return res.status(403).json({
      status: 'Expired',
      message: 'A valid token is required for this process',
    });
  }
};

const validateRole = (req, res, next) => {
  if (req.user.role >= req.neededRole) {
    return next();
  }

  return res.status(403).json({
    status: 'Insuficient permissions',
    message: 'A superior role is required for this action',
  });
};

const verifyToken = (req, res, next) => {
  const auth = req.header('Authorization');
  const cookies = req.cookies;
  //si no tiene el header de aut y tampoco el toke de cookies
  if (!auth && !cookies.token) {
    return res.status(403).json({
      status: 'No-Auth',
      message: 'A token is required for this process',
    });
  }

  if (cookies.token) {
    //si eciste la cookie en la funcion continua con validar el rol
    handleToken(cookies.token, req, res, next);
  } else {
    //obtengo el token de la cabecera
    const token = auth.split(' ')[1];
    handleToken(token, req, res, next);
  }
};

const isRegular = (req, res, next) => {
  req.neededRole = 0;
  verifyToken(req, res, next);
};

const isEditor = (req, res, next) => {
  req.neededRole = 1;
  verifyToken(req, res, next);
};
const isAdmin = (req, res, next) => {
  req.neededRole = 2;
  verifyToken(req, res, next);
};

module.exports = { isRegular, isAdmin, isEditor };
