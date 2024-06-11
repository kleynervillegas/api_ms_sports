import { Router } from 'express';
const router = Router();
import { URLS } from '../common/endpoints.js';
import ConnectController from '../controllers/ConnectController.js';


router.get(URLS.CONNECT, ConnectController);

router.get(URLS.VERSION, function (req, res) {
    res.json({
        version: process.env['VERSION']
    })
})

export default router