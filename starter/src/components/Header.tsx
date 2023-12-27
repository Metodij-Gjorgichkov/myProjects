import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  image: string;
  leftIcon?: string;
  rightIcon?: string;
}

const Header: React.FC<Props> = ({ image, leftIcon, rightIcon }) => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  }

  return (
    <>
      <div className="container header-container-absolute">
        <div className="row">
          <div onClick={handleBackClick} className="col-3 align-self-center text-center backBtn"><i className={leftIcon}></i></div>
          <div className="col-6">

            <img className="img-LOGO" src={image} alt="LOGO" />
        
          </div>
          <div className="col-3 align-self-center text-center"><i className={rightIcon}></i></div>
        </div>
      </div>
    </>
  );
};

export default Header;
