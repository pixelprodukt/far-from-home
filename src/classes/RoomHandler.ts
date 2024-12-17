import { RoomDto } from '../models/dto/Room.dto';
import GATE_ROOM_DATA from '../data/gate.json';
import CAR_ROOM_DATA from '../data/car.json';
import FRONT_YARD_ROOM_DATA from '../data/front_yard.json';
import FRONT_DOOR_ROOM_DATA from '../data/front_door.json';

export class RoomHandler {
    private gateRoom!: RoomDto;
    private carRoom!: RoomDto;
    private frontYardRoom!: RoomDto;
    private frontDoorRoom!: RoomDto;
    private rooms!: RoomDto[];

    constructor() {
        this.gateRoom = GATE_ROOM_DATA as RoomDto;
        this.carRoom = CAR_ROOM_DATA as RoomDto;
        this.frontYardRoom = FRONT_YARD_ROOM_DATA as RoomDto;
        this.frontDoorRoom = FRONT_DOOR_ROOM_DATA as RoomDto;
        this.rooms = [this.gateRoom, this.carRoom, this.frontYardRoom, this.frontDoorRoom];
    }

    public getRoomById(roomId: string): RoomDto {
        return this.rooms.filter(room => room.id === roomId)[0];
    }
}