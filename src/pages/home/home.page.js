import { Navbar } from "../../components/navbar/navbar";
import { UnderDev } from "../../components/under-developement-component/dev.component";

export function HomePage() {
    document.title = "Home | Demi";
    return (
        <>
            <Navbar />
            <UnderDev />
        </>
    );
}
