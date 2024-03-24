import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket } from "socket.io";

import { WebSocketEvents } from "./websocket.events";
import { ICar, IDriver } from "../interfaces";
import { RequestTransportDTO } from "../dto/transports.dto";

@WebSocketGateway({ cors: '*' })
export class SocketProvider {
  @WebSocketServer() private readonly server: Socket;

  @SubscribeMessage(WebSocketEvents.MOBILE_DEVICE_CONNECTED)
  handleMobileConnectedEvent(io: Socket) {
    // io.join('abc');
    // console.log('> Mobile device connected');
  }

  @SubscribeMessage(WebSocketEvents.MOBILE_DEVICE_REQUESTED_TRANSPORT)
  handleRequestedTransportEvent(io: Socket, data: RequestTransportDTO) {
    // console.log('> Mobile device requested transport');
    // this.server.to('abc').emit(WebSocketEvents.MOBILE_DEVICE_REQUESTED_TRANSPORT, data);
  }

  @SubscribeMessage(WebSocketEvents.EXPERIENCE_CONTROLLER_SELECTED_DRIVER)
  handleSelectedDriverEvent(io: Socket, data: { driver: IDriver, car: ICar }) {
    // TODO: assing driver and car to the passenger
  }
}