import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Dashboard() {
  return (
    <div>
      <Typography variant="h2" component="span">
        h1. Heading
      </Typography>
      <h1>Halaman Dahsboar Admin</h1>
      <Button>Outlined</Button>
    </div>
  );
}

Dashboard.auth = true;
Dashboard.header = {
  title: "Dashboard",
};
export default Dashboard;
