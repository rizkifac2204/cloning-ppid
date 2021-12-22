import React from "react";

function PermohonanOffline() {
  return (
    <div>
      <h1>Data Permohonan Offline</h1>
    </div>
  );
}

PermohonanOffline.auth = true;
PermohonanOffline.header = {
  breadcrumb: [
    { url: "/admin", text: "Home" },
    { url: "/admin/permohonan/offline", text: "Permohonan Offline" },
  ],
  title: "Permohonan Offline",
};
export default PermohonanOffline;
