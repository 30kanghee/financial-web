import React, {ReactNode} from 'react';
import {Link, useNavigate} from "react-router-dom";
// import * as authRepository from "../respsitory/AuthRepository"
// import toast from "react-hot-toast";
import {useQueryClient} from "@tanstack/react-query";

const NAVIGATOR_ITEMS = [
    {
        name: "대시보드",
        path: "/dashboard"
    },
    {
        name: "채널관리",
        path: "/channels"
    },
    {
        name: "LLM",
        path: "/llms"
    },
    {
        name: "프롬프트",
        path: "/prompts"
    },
]
const LeftNavigatorProvider: React.FC<{element: ReactNode}> = ({element}) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    // const logout = useCallback(async () => {
    //     try {
    //         await authRepository.logout()
    //         await queryClient.invalidateQueries(['profile'], {exact: true});
    //         navigate("/login", {replace: true});
    //     } catch (e) {
    //         toast.error("실패!")
    //     }
    // }, [queryClient, navigate])

    return (
        <>
            {element}
        </>

    )
    // return (
    //     <div className='flex h-full'>
    //         <div className="flex-[0_0_20%] bg-gray-400 flex flex-col">
    //             <div className='flex flex-col grow'>
    //                 <h3>LOGO?</h3>
    //                 {NAVIGATOR_ITEMS.map((item, index) => (
    //                     <Link key={`nav-item-${index}`} to={item.path}>{item.name}</Link>
    //                 ))}
    //
    //             </div>
    //             {/*<button onClick={logout}>Logout</button>*/}
    //
    //         </div>
    //
    //         <div className="flex-[0_0_80%]">
    //             {element}
    //         </div>
    //     </div>
    // )
}

export default  LeftNavigatorProvider

