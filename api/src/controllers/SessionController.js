const HidraService = require('../services/hidra');
const { promisify } = require('util');
const hidraService = require('../services/hidra');

class SessionController {
  async store(req, res) {
    const { email, password } = req.bosy;

    const resposne = await promisify(HidraService.loginUser)({
      email,
      password
    });

    return res.json(resposne);
  }
}

module.exports = new SessionController();