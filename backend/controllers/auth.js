import jwt from 'jwt-simple'

class AuthController {
  token (req, res, next) {
    console.log('email recibido: ',req.body.email)
    if (!req.body.email) {
      return res
        .status(401)
        .send({ error: 'Need an email' })
    }

    const payload = {
      email: req.body.email
    }
    const token = jwt.encode(payload, req.app.locals.config.TOKEN)
    console.log('-------------------TOKEN: ------------------------------',token)
    return res
      .status(200)
      .send({ token: token })
  }
}

export default new AuthController()