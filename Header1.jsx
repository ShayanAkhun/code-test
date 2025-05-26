"use client";

import Image from "next/image";


export default function Header1() {

    return (
        <header>


            <div className="dropdown">
                <button
                    className="btn btn-light dropdown-toggle d-flex align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <Image src={`/flags/${locale}.jpg`} alt="flag" width={30} height={20} className="me-2" />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button className="dropdown-item d-flex align-items-center" onClick={() => changeLocale("en")}>
                            <Image src="/flags/en.jpg" alt="English" width={20} height={15} className="me-2" />
                            Englis
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item d-flex align-items-center" onClick={() => changeLocale("fr")}>
                            <Image src="/flags/fr.jpg" alt="Français" width={20} height={15} className="me-2" />
                            Français
                        </button>
                    </li>
                </ul>
            </div>

        </header>
    );
}
