export default function Abount() {
    return (
        <div className="lg:flex lg:gap-32 ">
            <div className="bg-[url(/images/bg-tablet-pattern.svg)] bg-[top_13rem_right_15rem] bg-contain bg-no-repeat max-[768px]:bg-none">
            <AboutQuestion/>
            <AboutAnswer/>
            </div>
            <div>
           <AboutListContainer/>
           </div>
        </div>
    )
}

const AboutQuestion = () => <h2 className="text-dark-blue text-2xl text-center font-bold leading-10  text-[1.6rem] mb-7  mx-12 lg:text-left lg:text-3xl lg:px-10 lg:ml-28 ">What's different about Manage?</h2>
const AboutAnswer = () => <p className="text-dark-grayish-blue text-[.8rem] font-light text-center leading-6 px-2 mx-9 mb-14 lg:text-left lg:px-11 lg:ml-28 lg:text-base">  Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>

const AboutListContainer =  () => {
    return (
        <>
         <AboutList 
            listNum='01'
            listHeading='Track company-wide progress'
            listPara='  See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
            />
         <AboutList
            listNum='02'
            listHeading=' Advanced built-in reports'
            listPara='  Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
         />
         <AboutList
            listNum='03'
            listHeading='  Everything you need in one place'
            listPara='Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
         />   
        </>
    )
}

const AboutList = ({listNum, listHeading, listPara }) => {
    return ( 
     <div className="ml-4 mb-12">
        <h3 className="font-bold text-[.8125rem] text-dark-blue py-3 mb-2 bg-very-pale-red rounded-l-full lg:bg-[#FFF] lg:text-lg"><span className="text-very-light-gray text-sm bg-bright-red py-3 px-6 mr-4 lg:mr-20 rounded-full">{listNum}</span>{listHeading}</h3>
        <p className="text-dark-grayish-blue text-left text-[0.75rem] font-normal leading-6 mr-7 lg:text-base lg:mx-36  ">{listPara}</p>
     </div>
    )
}