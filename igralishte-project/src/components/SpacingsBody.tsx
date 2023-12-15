import { useRouter } from "next/router";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SpacingsBody = ({ children }: Props) => {
  const router = useRouter();
  const isSearchPageActive = router.pathname === "/search";
  const isLoginPagePageActive = router.pathname === "/login";
  const isRegister1PageActive = router.pathname === "/register1";
  const isRegister2PageActive = router.pathname === "/register2";
  const isRegister3PageActive = router.pathname === "/register3";
  const isMyProfilePageActive = router.pathname === "/myprofile";
  const isOrderFormActive = router.pathname === "/formToOrder";
  const isChangePasswordActive = router.pathname === "/changePassword";

  return (
    <div
      style={{
        paddingTop:
          isSearchPageActive ||
          isLoginPagePageActive ||
          isRegister1PageActive ||
          isRegister2PageActive ||
          isRegister3PageActive ||
          isMyProfilePageActive ||
          isOrderFormActive ||
          isChangePasswordActive
            ? 0
            : "62px",
      }}
    >
      {children}
    </div>
  );
};

export default SpacingsBody;
