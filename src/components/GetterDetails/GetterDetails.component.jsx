import { GetterDetailsContainer, H1 } from "./GetterDetails.style";
import GetterHeader from "../Getter/header-getter/getter-header.component"

const GetterDetails = () => (
    <GetterDetailsContainer>
        <GetterHeader />
        <H1>coin details page</H1>
    </GetterDetailsContainer>
)

export default GetterDetails;



// export default function GetterDetails() {
//     <GetterDetailsContainer>
//         <GetterHeader />
//         <H1>coin details page</H1>
//     </GetterDetailsContainer>
// }