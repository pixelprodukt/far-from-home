import { Briefcase, Feather } from 'react-feather';
import TextButton from './components/TextButton';
import IconButton from './components/IconButton';
import GATE_ROOM_DATA from './data/gate.json';
import { RoomDto } from './models/dto/Room.dto';
import { useState } from 'react';

const App = () => {
    const gateRoomData = GATE_ROOM_DATA as RoomDto;
    const [room, setRoom] = useState(gateRoomData);

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
                        {room.text}
                    </p>
                </section>

                <div>
                    {room.actions.map(action => <div><TextButton onClick={() => { console.log('hello from button 1') }} title={action.text} /></div>)}
                </div>

            </div>
        </>
    );
};

export default App;
