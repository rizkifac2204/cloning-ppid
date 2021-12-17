import {signOut} from 'next-auth/react'

function Dashboard() {
  return (
    <div>

      <h1>Halaman Dahsboar Admin</h1>
      <button type="button" onClick={()=>signOut()}>Keluar</button>
      
    </div>
  )
}

Dashboard.auth=true
Dashboard.header = {
  title: "Dashboard"
}
export default Dashboard
