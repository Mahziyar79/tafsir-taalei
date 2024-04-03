"use client";
import HomeBanner from "@/components/HomeBanner";
import UserForm from "@/components/userForm";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

const MainPage = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   router.replace("https://google.com");
  // }, [router]);
  return (
    <>
      <HomeBanner />
      <UserForm />
    </>
  );
};
export default MainPage;
