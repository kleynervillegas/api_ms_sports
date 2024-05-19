import { Router } from 'express';
const router = Router();
import { URLS } from '../common/endpoints.js';

router.get(URLS.VERSION, function (req, res) {
    res.json({
        version: process.env['VERSION']
    })
})

export default router