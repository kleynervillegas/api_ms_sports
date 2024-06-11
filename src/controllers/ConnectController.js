import express from 'express';
import { URLS } from '../common/endpoints.js';
import { ConnectService } from '../services/ConnectService.js';

const ConnectController = express.Router();
const connectService = new ConnectService()

ConnectController.get(URLS.CONNECT, async (req, res) => {
  await connectService.connectCamera(req.user,req.headers.origin)
    .then((result) => {
      // const response = new ResponseService(
      //   STATUS('success'),
      //   result,
      //   MESSAGES('success')
      // );
      res.status(200).send(result);
    })
    .catch((error) => {
      // const response = new ResponseService(
      //   STATUS(error),
      //   null,
      //   MESSAGES(error)
      // );
      res.status(500).send(error);
    });
})



export default ConnectController;