import { Briefcase, Feather } from 'react-feather';
import TextButton from './components/TextButton';
import IconButton from './components/IconButton';
import GATE_ROOM_DATA from './data/gate.json';
import { RoomDto } from './models/dto/Room.dto';
import { useState } from 'react';
import { RoomHandler } from './classes/RoomHandler';
import { ActionDto } from './models/dto/Action.dto';
import { ActionType } from './models/Action.enum';
import { GAMESTATE } from './data/GameState';

const App = () => {
    const gateRoomData = GATE_ROOM_DATA as RoomDto;

    const roomHandler = new RoomHandler();

    const [room, setRoom] = useState(gateRoomData);
    const [gamestate, setGamestate] = useState(GAMESTATE);
    const [currentText, setCurrentText] = useState(room.description);

    const handleMoveToRoom = (roomId: string): void => {
        const room = roomHandler.getRoomById(roomId);
        setRoom(room);
        setCurrentText(room.description);
    };

    const handleLook = (action: ActionDto): void => {
        // TODO: Stub
        console.log('handleLook:', action);
        setCurrentText(action.description!);
    };

    const handleItem = (action: ActionDto): void => {
        // TODO: Stub
        console.log('handleItem:', action);
        /**
         * Move items to inventory, something like this:
         * action.items.forEach(item => this.inventory.add(item));
         * 
         * then delete action from room
         * roomHandler.removeActionFromRoom(room.id, action.id);
         */
    };

    const handle = (action: ActionDto): void => {
        setAllStatesForAction(action);

        switch (action.type) {
            case ActionType.MOVE:
                handleMoveToRoom(action.moveToRoomId!);
                break;
            case ActionType.LOOK:
                handleLook(action);
                break;
            case ActionType.ITEM:
                handleItem(action);
                break;
            default:
                throw new Error();
        }
    };

    const allStatesForActionAreTrue = (action: ActionDto, room: RoomDto): boolean => {
        return action.readsStates.map(state => {
            const pathParts = state.split('.');
            console.log('part one: ', pathParts[0]);
            console.log('part two: ', pathParts[1]);
    
            if (pathParts[0] === 'GLOBAL' && pathParts[1].length) {
                return gamestate[pathParts[1]];
            } else if (pathParts[0] === room.id && pathParts[1].length) {
                return room.states[pathParts[1]];
            }
        })
        .every(bool => bool === true);
    };

    const setAllStatesForAction = (action: ActionDto) => {
        action.setsStates.map(state => {
            const pathParts = state.split('.');

            if (pathParts[0] === 'GLOBAL' && pathParts[1].length) {
                GAMESTATE[pathParts[1]] = true;
                setGamestate({ ...GAMESTATE });
            } 
            if (pathParts[0] === room.id && pathParts[1].length) {
                room.states[pathParts[1]] = true;
            }
        });
    };

    return (
        <>
            <div className='p-2 flex flex-wrap justify-end'>
                <IconButton onClick={() => { console.log('hello from icon button 2') }}><Briefcase color='#e5e7eb' size='22' /></IconButton>
                <IconButton onClick={() => { console.log('hello from icon button 1') }}><Feather color='#e5e7eb' size='22' /></IconButton>
            </div>

            <div className='p-12'></div>
            <div className='container mx-auto text-light-amber 2xl:w-1/3 xl:w-1/2 lg:w-1/2 md:w-full 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-0 px-8'>

                <section>
                    <p className='text-base mb-6'>
                        {currentText}
                    </p>
                </section>

                <div>
                    {room.actions.map((action, index) => {
                        if (allStatesForActionAreTrue(action, room) || !action.readsStates.length) {
                            return (
                                <div key={index}>
                                    <TextButton onClick={() => { handle(action) }} title={`${index + 1}) ${action.label}`} />
                                </div>
                            );
                        }
                    })}
                </div>

            </div>
        </>
    );
};

export default App;