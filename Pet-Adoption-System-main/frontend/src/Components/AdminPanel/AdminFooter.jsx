import React from "react";
import'./Admin.css'

function AdminFooter() {
    return(
        <footer className="admin-footer">
            <p>&copy,{new Date().getFullYear()}Admin Panel. All rights reserved.</p>
        </footer>
    );
}

export default AdminFooter