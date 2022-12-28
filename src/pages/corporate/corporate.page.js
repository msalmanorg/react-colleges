import { Navbar } from "../../components/navbar/navbar";

import { UnderDev } from "../../components/under-developement-component/dev.component";
export function CorporatePage() {
    document.title = "Corporate | Demi";
    return (
        <>
            <Navbar />
            <UnderDev />
        </>
    );
}
