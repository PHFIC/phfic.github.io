// components/footer.js

export default function Footer() {
  return (
    <footer className="text-center mb-5">
      <hr />
      Copyright &copy; 2022 MITRE. All rights reserved.
      <br />

      Approved for public release. Distribution Unlimited. Case number 22-1062.
      <br />

      FHIR&reg; is a registered trademark of HL7&reg; |&nbsp;
      <a className="text-secondary" href="https://www.mitre.org/privacy-policy">Privacy Policy</a> |&nbsp;
      Email: <a className="text-secondary" href="mailto:phfic@mitre.org">phfic@mitre.org</a> |&nbsp;
      <a className="text-secondary" href="#top">Jump to Top</a>

      {/*TODO: 508 accessability notice */}
    </footer>
  )
}

