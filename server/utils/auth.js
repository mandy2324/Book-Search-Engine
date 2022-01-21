const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    console.log(req)

    let token = req.body.token || req.query.token || req.headers.authorization;
    // ["Bearer", "<tokenvalue>"]
    
console.log("2")
    if (req.headers.authorization) {
      
      token = token.split(' ').pop().trim();
      console.log("14")
    }

    if (!token) {
      console.log("15")
      return req;
      
    }

    try {
      console.log("16")
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
    console.log("5")
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
  
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};