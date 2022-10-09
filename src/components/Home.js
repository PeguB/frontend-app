
import DeniendComponent from "./DeniendComponent";
import ResponsiveAppBar from "./ResponsiveAppBar";
import BasicTable from "./BasicTable";
import LoggedUser from "../util/utils"
export default function Home() {
    const loggedIn = localStorage.getItem("logged") !== null;
        return (loggedIn
            ?
            <div>
                <ResponsiveAppBar/>
                {LoggedUser.getRole() !== "Student"&&<BasicTable/>}
            </div>
            :
            <DeniendComponent></DeniendComponent>)
}