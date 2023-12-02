import { useEffect, useState } from "react";

interface Props {
  productId?: string;
}

const NavbarHeart = ({ productId }: Props) => {
  const [primaryColor, setPrimaryColor] = useState("");

  useEffect(() => {
    if (productId === "3") {
      setPrimaryColor("heart_stroke_ccc");
    } else {
      setPrimaryColor("");
    }
  }, [productId]);

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.9767 13.4438L15 25.8895L3.02331 13.4438C2.29166 12.6725 1.73551 11.7521 1.39301 10.7457C1.05051 9.73925 0.929761 8.67064 1.03906 7.61317C1.14836 6.55569 1.48511 5.53437 2.02621 4.61927C2.56732 3.70417 3.29997 2.91695 4.1739 2.31161C5.04784 1.70627 6.04238 1.29714 7.08929 1.11229C8.13621 0.92743 9.21072 0.971226 10.2391 1.24067C11.2675 1.51011 12.2255 1.99882 13.0472 2.67327C13.869 3.34773 14.5352 4.19196 15 5.14806C15.4648 4.19196 16.131 3.34773 16.9528 2.67327C17.7745 1.99882 18.7325 1.51011 19.7609 1.24067C20.7893 0.971226 21.8638 0.92743 22.9107 1.11229C23.9576 1.29714 24.9522 1.70627 25.8261 2.31161C26.7 2.91695 27.4327 3.70417 27.9738 4.61927C28.5149 5.53437 28.8516 6.55569 28.9609 7.61317C29.0702 8.67064 28.9495 9.73925 28.607 10.7457C28.2645 11.7521 27.7083 12.6725 26.9767 13.4438Z"
        stroke="#171717"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        className={primaryColor}
      />
    </svg>
  );
};

export default NavbarHeart;
