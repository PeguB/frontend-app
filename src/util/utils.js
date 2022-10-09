
class LoggedUser{

    static getRole() {
        return JSON.parse(localStorage.getItem("logged")).role;
    }

}

export default LoggedUser;