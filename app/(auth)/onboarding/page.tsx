import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

const Onboarding = async () => {
  const user = await currentUser();

  const userInfo = {
    _id: "",
    name: "",
    username: "",
    firstName: "",
    bio: "",
    imageUrl: "",
  };

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName,
    bio: userInfo?.bio || "",
    image: userInfo?.imageUrl || user?.imageUrl,
  };

  return (
    <main className="flex flex-col max-w-3xl mx-auto justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default Onboarding;
