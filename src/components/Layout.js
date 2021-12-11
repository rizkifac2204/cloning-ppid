export default function Layout({children}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Header</h1>
        </div>
        <div className="col-md-3">
          <h1>Sidebar</h1>
        </div>
        <div className="col-md-9">
          {children}
        </div>
      </div>
    </div>
  )
}