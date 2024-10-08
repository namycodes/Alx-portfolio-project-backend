const router = require("express").Router()
const {SignUp,SignIn} = require("../controllers/authController")

/**
 * @swagger
 * tags:
 *  name: Authentication
 *  description: Users
 * /api/v1/auth/signup:
 *  post:
 *      summary: Create a new user
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/user'
 *      responses:
 *          201:
 *              description: User Created Successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/user'
 *          500:
 *              description: Internal server error
 * /api/v1/auth/signin:
 *  post:
 *      summary: Sign In
 *      tags: [Authentication]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      User:
 *                          type: object
 *                          required:
 *                              - email
 *                              - password
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      response:
 *          200:
 *              description: Logged In successfully
 *          500:
 *              description: Internal Server Error
 */


router.post('/signup', SignUp)
router.post('/signin', SignIn)

module.exports = router