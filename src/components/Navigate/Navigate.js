import {StyledNavigate} from "./styled";
import {DateTime} from "luxon";
import {useState} from "react";

export const Navigate = ({children}) => {
    // const [time, setTime] = useState(0)
    // const RealTime = DateTime.local().toFormat('dd EEEE ZZ');
    // console.log(RealTime)

    return (
        <StyledNavigate>
            {children}
            {/*{time}*/}
        </StyledNavigate>
    )
}