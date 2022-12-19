// components/nav_logo.js
import {Nav, Navbar} from 'react-bootstrap'
import Image from 'next/image'
import LogoImg from '../public/PHFIC_LogoAlt_Color.svg'
import IconImg from '../public/PHFIC_Icon_COL.svg'


export default function NavLogo({ children }) {

  return (
          <Navbar.Brand className="fs-3" href="/">
            <h1 className="d-none">PHFIC | Public Health FHIR® Implementation Collaborative</h1>

            <Image
                src={IconImg}
                alt={"PHFIC"}
                width={50}
                height={50}
                priority
                className="d-inline-block d-sm-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block align-top"
            />
            <Image
                src={LogoImg}
                alt={"Public Health FHIR® Implementation Collaborative"}
                width={500}
                height={50}
                priority
                className="d-none d-sm-inline-block d-lg-inline-block d-xl-none d-xxl-inline-block align-top"
            />

            {/*
            <Image
                src={LogoImg}
                alt={"Public Health FHIR® Implementation Collaborative"}
                width={400}
                height={40}
                priority
                className="d-none d-sm-inline-block d-md-none align-top"
            />

            <Image
                src={IconImg}
                alt={"PHFIC"}
                width={40}
                height={40}
                priority
                className="d-inline-block d-sm-none align-top"
            />
            */}
          </Navbar.Brand>
        )
}

