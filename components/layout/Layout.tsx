import React, {ReactNode, FC} from "react";
import Sidebar from "@/components/layout/Sidebar";

interface LayoutProps{
    children: ReactNode
}
const Layout : FC<LayoutProps> =({children}) => {
    return (
        <div className="h-screen bg-black">
            <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
                <div className='grid grid-cols-4 h-full'>
                    <Sidebar/>
                    <div className="
                        col-span-3
                        lg:col-span-2
                        border-x-[1px]
                        border-neutral-800
                    ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;