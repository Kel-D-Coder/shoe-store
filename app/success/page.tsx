import pic from "../../assets/Successful Submitted form Badge.png"
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={pic} alt="" />
    </div>
  );
}

export default Page;