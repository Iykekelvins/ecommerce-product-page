import appSvgs from "../public/appSvgs";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <button>
          <Image src={appSvgs.logo} width={138} height={20} alt="logo" />
        </button>
      </a>
    </Link>
  );
};

export default Logo;
