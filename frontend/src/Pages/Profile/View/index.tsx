import Layout from "../../../Shared/Layout/View";
import { authenticationLogic } from "../../Login/Logic/authenticationLogic";
import Authenticated from "../../Login/View/Components/authenticationChecker";

function Profile() {
  return (
    <Layout>
       <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-6xl">Welcome {authenticationLogic.getLogedUsername()}!</h1>
       </div>
    </Layout>
  );
}

export default Profile;
