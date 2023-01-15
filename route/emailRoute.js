const express = require('express')

const controller = require('../controller/mailer')

const emailRouter = express.Router()

emailRouter.post('/send',controller.sendingEmail)

module.exports = {
    emailRouter

}