
export default function Newsletter() {
    return (
        <div className="bg-bright-red  py-[60px] px-6 flex flex-col items-center bg-[url('/images/bg-simplify-section-mobile.svg')] bg-no-repeat bg-[left_3rem]  lg:flex-row  lg:px-40   lg:bg-[url('/images/bg-simplify-section-desktop.svg')] lg:bg-[left_17rem_top_-6rem] lg:bg-auto">
            <h2 className="text-3xl text-very-light-gray text-center font-bold mb-8 px-9 lg:text-left
             lg:max-w-[40%]">Simplify how your team works today.</h2>
            <button
      className='bg-very-light-gray text-bright-red text-xs font-medium rounded-full py-3 px-6 shadow-lg shadow-${bgColor} drop-shadow-2-xl z-10  mx-auto lg:mr-[2rem]'
    >
      Get Started
    </button>
        </div>
    );
}