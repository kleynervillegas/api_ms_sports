import nodeRtspStreamJsmpeg from 'node-rtsp-stream-jsmpeg';

export class ConnectService {

  constructor() {

  }

  async connectCamera(data, path) {


    const ip_address = "192.168.1.104";

    //@desc     Camera username and password
    const username = "admin";
    const password = "admin";

    //@desc     A channel of camera stream
    const stream = new nodeRtspStreamJsmpeg({
      streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address + ':554/cam/realmonitor?channel=1&subtype=0&unicast=true&proto=Onvif',
      wsPort: 8445
    });

    return stream;
  }


}