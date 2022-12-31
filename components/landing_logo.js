// components/landing_logo.js

import Image from 'next/image'

/* LandingLogo
 *
 * Params:
 *   seo: renderable, hidden SEO element, should be descriptive text
 *   src: Next/Image
 *   alt: string, alt text for image
 *
 */
export default function LandingLogo(props) {

  return (
    <>
    <h1 className="d-none">{props.seo}</h1>
    <div className="position-relative w-100" style={{height: "40vh"}}>
      <Image src={props.img}
             alt={props.alt}
             priority
             fill
      />
    </div>
    <hr className="d-none d-lg-inline-block bg-primary opacity-100 border border-0" style={{height: '10px', width: '80%'}} />
    <h3 className="d-none d-lg-block">{props.tagline}</h3>
    </>
  )
}

