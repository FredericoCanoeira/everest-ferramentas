/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Footer({ company = {} }) {
  const { href = "https://everest40.com/", name = "Everest" } = company;

  return (
    <SoftBox position="relative" width="100%" py={3} px={1}>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
      >
        <SoftTypography variant="button" fontWeight="regular">
          &copy; {new Date().getFullYear()},
          {" "}
          <a href={href} target="_blank" rel="noreferrer">
            <SoftTypography variant="button" fontWeight="medium">
              {name}
            </SoftTypography>
          </a>
            - Consultoria e Gestão de Carreiras, LDA
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
  }),
};

// Default props for the Footer
Footer.defaultProps = {
  company: {
    href: "#",
    name: "",
  },
};

export default Footer;
