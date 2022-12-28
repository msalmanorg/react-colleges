import { Navbar } from "../../components/navbar/navbar";

import { UnderDev } from "../../components/under-developement-component/dev.component";

export function CoursesPage() {
    document.title = "Courses | Demi";
    return (
        <>
            <Navbar />
            <UnderDev />
        </>
    );
}
