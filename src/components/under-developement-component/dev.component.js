import "./dev.component.css";
import { NavLink } from "react-router-dom";

export function UnderDev() {
    return (
        <>
            <div className="under-dev-component">
                <h1>
                    This component is under development phase, The colleges page
                    is ready
                </h1>
                <NavLink to="/colleges">
                    Goto the <b>colleges</b> page
                </NavLink>
            </div>
        </>
    );
}
