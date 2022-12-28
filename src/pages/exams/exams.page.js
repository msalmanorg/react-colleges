import { Navbar } from "../../components/navbar/navbar";
import { UnderDev } from "../../components/under-developement-component/dev.component";

export function ExamsPage() {
    document.title = "Exams | Demi";
    return (
        <>
            <Navbar />
            <UnderDev />
        </>
    );
}
