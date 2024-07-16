import { Link } from "react-router-dom";
import AuthLayout from "../auth/AuthLayout";

const PageNotFound = () => {
  return (
    <AuthLayout title="">
      <div className="flex flex-1 flex-col gap-[10px]">
        <span>Page Not Found!</span>
        <div>
          <span>
            Return to homepage: <Link to={"/home"} className="underline text-[#ff9500] cursor-pointer">home</Link>
          </span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default PageNotFound;
