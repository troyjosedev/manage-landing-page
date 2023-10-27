

export default function Hero() {
    return (
        <Main>
        <div className="lg:flex lg:flex-row-reverse lg:px-20 min-[1440px]:px-0 min-[1440px]:mx-20">
        <HeroImg/>
        <MainHeading/>
        </div>
        </Main>
    )
}

const Main = ({children}) => <main>{children}</main>

const HeroImg = () => {
    return (
        <figure>
             <img src="/images/illustration-intro.svg" className="px-7 mb-4 mx-auto"/>
        </figure>
    )
}

export const ButtonStarted = ({ bgColor, textColor }) => (
    <button
      className={`bg-${bgColor} text-${textColor} text-xs font-medium rounded-full py-3 px-6 shadow-lg shadow-${bgColor} drop-shadow-2-xl z-10 mb-24  mx-auto lg:ml-10 hover:opacity-50`}
    >
      Get Started
    </button>
  );
  

const MainHeading = () => {
    return (
        <header className="bg-black flex flex-col items-center gap-6 my-4 relative bg-no-repeat bg-contain  lg:justify-start bg-[url(/images/bg-tablet-pattern.svg)] bg-[center_left_15.5rem] md:bg-none  lg:mx-10" >
         
            <h1 className="text-dark-blue text-3xl text-center font-bold leading-10  mx-9 z-10 lg:text-left lg:mr-[30rem] lg:mb-12 lg:text-4xl"> Bring everyone together to build better products.</h1>
            <p className="text-dark-grayish-blue text-sm font-light text-center leading-6 px-2 mx-9 z-10 lg:text-left lg:mr-[27rem] lg:mb-11 lg:text-base">Manage makes it simple for software teams to plan day-to-day  tasks while keeping the larger team goals in view.</p>
            <ButtonStarted
            bgColor="bright-red"
            textColor="very-light-gray"
            />
        </header>
    )
}

