import Input from "../../components/Input"

export const Dashboard = () => {

    const contacts = [
        {
            name: 'Akash',
            status: 'Available',
            img: 'avtar'
        },
        {
            name: 'Ayush',
            status: 'Available',
            img: 'avtar'
        },
        {
            name: 'Nitish',
            status: 'Available',
            img: 'avtar'
        },
        {
            name: 'Subodh',
            status: 'Available',
            img: 'avtar'
        },
        {
            name: 'Jeenu',
            status: 'Available',
            img: 'avtar'
        }

    ]
    const imgAvtar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WZCN_jqspLOle2tIsl_fgAfDOv_vySTHgO6T4lR3u_z0IqWDKsRYhR_iIoflxjQ80nk&usqp=CAU'
    return (
        <div className="w-screen flex">
            <div className="w-[25%] h-screen bg-[white]">
                <div className="flex justify-center items-center my-5">
                    <div className="rounded-full">
                        <img className="rounded-full" src={imgAvtar} width={75} height={75} />
                    </div>
                    <div className="ml-8">
                        <h3 className="text-2xl">Mr Akash</h3>
                        <h3 className="text-lg font-light">My Account</h3>
                    </div>
                </div>
                <hr></hr>
                <div>
                    <div className="ml-10 my-4 text-primary">Messages</div>
                    <div>
                        {
                            contacts.map(({ name, status, img }) =>
                                <>
                                    <div className="flex ml-10 items-center my-10 cursor-pointer">
                                        <div className="rounded-full border-primary">
                                            <img src={imgAvtar} width={50} height={50} className="rounded-full border-primary" />
                                        </div>
                                        <div className="ml-8">
                                            <h3 className="text-1xl">{name}</h3>
                                            <h3 className="text-sm font-light text-gray-500">{status}</h3>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-screen flex flex-col items-center'>
                <div className='w-[90%] bg-white h-[80px] mt-14 rounded-full flex items-center pz-14 px-4'>
                    <div className="rounded-full border-primary">
                        <img src={imgAvtar} width={50} height={50} className="rounded-full border-primary" />
                    </div>
                    <div className="ml-6 mr-auto">
                        <h3 className="text-1xl">Akash</h3>
                        <h3 className="text-sm font-light text-gray-500">Online</h3>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-outgoing" width="23" height="23" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            <path d="M15 9l5 -5" />
                            <path d="M16 4l4 0l0 4" />
                        </svg>
                    </div>
                </div>
                <div className='h-[75%] w-full overflow-scroll'>
                    <div className='h-[1000px] px-10 py-14'>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                    </div>
                </div>
                <div className="p-4 w-[75%] p-4 flex">
                        <Input className="w-[95%]" inputClassName="p-4 border-0 shadow-md rounded-full bg-light focus:ring-0 focos:border-0 outline-none" placeholder="Type a message ..."/>
                        <div className="m-auto pl-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>
                        </div>
                        <div className="m-auto pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-plus" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                        </svg>
                        </div>
                </div>
            </div>
            <div className='w-[25%] h-screen bg-[white]'>
                {/* <h1>nbh</h1> */}
            </div>
        </div>
    )
}