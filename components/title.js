// components/title.js

import Head from 'next/head'
import Favicon from '../public/favicon.ico.svg'

/* Component to define webpage title
 * USAGE:
 *  <Title prefix="My Page" />
 *
 * Do not use it in <Head></Head>!
 *
 * props:
 *   prefix: string - text prepended to website title
 *   full: string (optional) - override entire title text (will exclude prefix)
 * returns:
 *   <title>...</title>
 */
export default function Title(props) {
  if( !!props.full ) {
    return <Head>
             <title key="title">{props.full}</title>
           </Head>
  }
  else {
    /* adding key='title' will tell NextJS to only render the last instance of <title> */
    return <Head>
             <title key="title">{props.prefix + " | Public Health FHIR® Implementation Collaborative"}</title>

             <link rel="icon" href={Favicon} />

             <meta name="description" content="PHFIC (Public Health FHIR® Implementation Collaborative) is a community established in 2022 for improving public health data exchange." />

             {/* TODO FOR DEBUT:
             <link rel="canonical" href="https://phfic.org/" />

             <meta name="robots" content="index,follow" />

             <meta property="og:type" content="article" />
             <meta property="og:title" content="TITLE OF YOUR POST OR PAGE" />
             <meta property="og:description" content="DESCRIPTION OF PAGE CONTENT" />
             <meta property="og:image" content="LINK TO THE IMAGE FILE" />
             <meta property="og:url" content="PERMALINK" />
             <meta property="og:site_name" content="SITE NAME" />


             // PROBABLY WON'T RUN TWITTER BUT FOR REFERENCE ANYWAYS:
             <meta name="twitter:title" content="TITLE OF POST OR PAGE">
             <meta name="twitter:description" content="DESCRIPTION OF PAGE CONTENT">
             <meta name="twitter:image" content="LINK TO IMAGE">
             <meta name="twitter:site" content="@USERNAME">
             <meta name="twitter:creator" content="@USERNAME">

               */}

           </Head>
  }
}

