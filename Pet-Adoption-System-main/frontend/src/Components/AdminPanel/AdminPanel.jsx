import React from "react";
import AdminFooter from "./AdminFooter";
import AdminNavBar from "./AdminNavbar";
import AdminScreen from "./AdminScree";
import'./Admin.css'

const AdminPanel =()=>{
    return(
        <div>
            <AdminNavBar/>
            <AdminScreen/>  
            <AdminFooter/>
        </div>
    )
}

export default AdminPanel