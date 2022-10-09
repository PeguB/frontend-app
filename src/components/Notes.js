const Notes = () =>{
    return <div>Hello + {JSON.parse(localStorage.getItem("logged")).role}</div>
}

export default Notes;