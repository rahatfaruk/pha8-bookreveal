import PageTitle from "../PageTitle";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

function ConnectPage() {
  return (  
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto my-8">
        <PageTitle title={"Connect with us"} />

        <Newsletter />
        <Socials />
      </div>
    </section>
  );
}

export default ConnectPage;