// import { useAuth } from "@/Contexts/AuthContext";
import Image from "next/image";

function SocialLogins() {
  // const { loginWithGoogle } = useAuth();

  // async function handleGoogleLogin() {
  //   await loginWithGoogle();
  // }

  return (
    <div className="d-flex justify-content-center gap-5 px-2">
      <button
        className="myButton myButtonUnColored px-5 border-2"
        // onClick={handleGoogleLogin}
      >
        <Image
          src={"/images/google.svg"}
          height={24}
          width={24}
          alt="Google login"
        />
      </button>
      <button className="myButton myButtonUnColored px-5 border-2">
        <Image
          src={"/images/apple.svg"}
          height={24}
          width={24}
          alt="Google login"
        />
      </button>
      <button className="myButton myButtonUnColored px-5 border-2">
        <Image
          src={"/images/window.svg"}
          height={24}
          width={24}
          alt="Google login"
        />
      </button>
    </div>
  );
}

export default SocialLogins;
