import FooterSiteNavigation from './footer-site-navigation/FooterSiteNavigation';
import FooterLinks from './footer-links/FooterLinks';

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <FooterSiteNavigation />
      <FooterLinks />
    </>
  );
};

export default Footer;
