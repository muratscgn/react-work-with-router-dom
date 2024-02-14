import { Outlet } from "react-router-dom";
import { Category } from ".";

export default function ProductLayout() {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <Outlet></Outlet>
        </div>
        <div className="col-sm-4">
          <Category></Category>
        </div>
      </div>
    </>
  )
}