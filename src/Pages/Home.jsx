import Banner from '../Components/Banner';
import LearnMore from '../Components/LearnMore';


const Home = () => {
    
     
    return (
        <div>
            <Banner></Banner>
            {/* a short description */}
            <div className=''>
                <h4 className='text-black font-extrabold text-[22px] md:text-5xl lg:text-[50px] py-10 px-3 md:px-10 lg:px-40 roboto-font leading-10 md:leading-14'>
                    Wij maken content die opvalt. Die 
                    <br /> blijft hangen. Die jouw doelgroep 
                    <br /> raakt en jouw merk in beweging
                    <br /> brengt. Snel, krachtig en energiek.
                </h4>
            </div>
            {/* Learn More */}
            <LearnMore></LearnMore>
        </div>
    );
};

export default Home;