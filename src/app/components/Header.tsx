import react from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="py-4 w-full header-image rounded-lg">
        <div className="container flex mx-auto items-center justify-between header-content">
            <nav>
            <ul className="flex space-x-2">
                <li>
                <Link href="/" className="m-2 menu-item">
                    Home
                </Link>
                </li>
            </ul>
            </nav>
            <div className="branding"></div>
        </div>
        </header>
    );
  };
  
  export default Header;