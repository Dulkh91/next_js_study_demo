import { ReactNode } from "react";

const LayoutParInter = ({children,main}:{children:ReactNode; main: ReactNode}) => {
    return ( 
            <div className="m-5 p-5 space-y-4">
        <div>{children}</div>
        <div>
            {main}
        </div>
    </div>
        );
}
 
export default LayoutParInter;