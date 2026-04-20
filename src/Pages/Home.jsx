import Banner from '../Components/Banner';
import Brands from '../Components/Brands';
import Expertise from '../Components/Expertise/Expertise';
import LearnMore from '../Components/LearnMore';
import StoryPart from '../Components/Story/StoryPart';



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
            {/* Expertise */}
            <Expertise></Expertise>
            {/* Story part */}
            <StoryPart></StoryPart>
            {/* Brands Part */}
            <Brands></Brands>
        </div>
    );
};

export default Home;