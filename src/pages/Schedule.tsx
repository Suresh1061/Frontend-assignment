import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Schedule = () => {
    return (
        <div className=" max-w-[375px] w-full h-screen py-11 px-4 font-Montserrat">
            <div className=" my-2 relative">
                <div className=" absolute top-1 left-0 h-5 w-5 rounded bg-lightestGray flex justify-center items-center">
                    <IoIosArrowBack />
                </div>
                <h1 className=" font-semibold text-mediumBlack text-xl text-center">Workout Schedule</h1>
            </div>
            <div className=" flex justify-center items-center py-2">
                <div className=" flex gap-2 items-center">
                    <IoIosArrowBack/>
                    <p className=" text-sm text-mediumBlack font-Montserrat font-semibold">Feb 2024</p>
                    <IoIosArrowForward/>
                </div>
            </div>
            <div className=" w-full h-[76px] p-1">
                <div className=" font-Montserrat font-semibold text-mediumBlack p-2 flex flex-col justify-start items-center">
                    <p className=" text-sm leading-4">Sun</p>
                    <p className=" text-[28px] ">5</p>
                </div>
            </div>
            
        </div>
    )
}

export default Schedule
