import React from "react";

function PermohonanOnline() {
  return (
    <div>
      <h1>Data Permohonan Online</h1>
    </div>
  );
}

PermohonanOnline.auth = true;
PermohonanOnline.header = {
  breadcrumb: [
    { url: "/admin", text: "Home" },
    { url: "/admin/permohonan/online", text: "Permohonan Online" },
  ],
  title: "Permohonan Online",
};
export default PermohonanOnline;
