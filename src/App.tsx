import { Briefcase, Feather } from 'react-feather';
import TextButton from './components/TextButton';
import IconButton from './components/IconButton';

const App = () => {
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
                        This road feels like it's going on forever. Night falls and the stars looks very dim
                        and different today. At least as far as you can tell from that small open strip above
                        your head. To your left and right are nothing but big trees. Your cars fuel want last
                        much longer and you really need to rest a bit. Suddenly a big old iron gate emerges
                        in front of you out of the darkness. You hit the brakes and come to a halt. The road
                        ends here. You get out of your car. Where are you? And why are you here? You don't
                        know and don't care at the moment. You just know, you are far from home.
                    </p>
                    {/* <p className='text-base mb-6'>
                        There are no lights except the one from the moon and stars. The big iron gate looms
                        over you. It has long spikes at the top and strange looking ornamentation in the
                        middle where both wings meet. Through the gate you can see a dark shadow with the
                        silhouette of an old mansion. A path is leading towards it.
                    </p> */}
                </section>

                <div>
                    <TextButton onClick={() => { console.log('hello from button 1') }} title='1. Go through the gate' /><br />
                    <TextButton onClick={() => { console.log('hello from button 2') }} title='2. Examine the gate' /><br />
                    <TextButton onClick={() => { console.log('hello from button 3') }} title='3. Get back into the car' /><br />
                </div>

            </div>
        </>
    );
};

export default App;
