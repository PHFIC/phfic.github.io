// components/title.js

import Head from 'next/head'

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
    return <Head><title key="title">{props.full}</title></Head>
  }
  else {
    /* adding key='title' will tell NextJS to only render the last instance of <title> */
    return <Head><title key="title">{props.prefix + " | Public Health FHIR® Implementation Collaborative"}</title></Head>
  }
}

