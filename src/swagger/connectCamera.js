/**
 * @swagger
 *  tags:
 *    name: connect
 *    description: Módulo de Login
 */

/**
 * @swagger
 * /connect:
 *  get:
 *     tags: [Conennt]
 *     parameters:     
 *       - name: body  
 *         in: ha=eader
 *         description: toke
 *         required: false
 *     summary: modulo para la autenticación
 *     responses:
 *       200:
 *        description: Operación exitosa     
 *       400:
 *         description: El envío de la información no se pudo completar   
 */



/** 
 * @swagger
 * definitions:
 *   connect:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string     
 *           description: email for the autentication    
 *         password:
 *           type: string
 *           description: password for the autentication    
 *       example:
 *         email: "kvillegas@prolesys.com"
 *         password: "Abc1234*"
*/