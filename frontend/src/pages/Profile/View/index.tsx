import Layout from "../../../shared/layout/view";
import { authenticationLogic } from "../../login/Logic/authenticationLogic";
import Authenticated from "../../login/view/components/authenticationChecker";

function Profile() {
  return (
    <Layout>
       <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-6xl">Bienvenido {authenticationLogic.getLogedUsername()}!</h1>
       </div>
    </Layout>
  );
}

export default Profile;
