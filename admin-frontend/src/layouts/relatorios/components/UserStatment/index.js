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

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Relatorios page components
import Relatorio from "layouts/relatorios/components/relatorio";

function UserStatment() {
  return (
    <Card id="delete-account">
      <SoftBox pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium">
          Relatorios
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1} pb={2} px={2}>
        <SoftBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Relatorio
            name="oliver liam"
            id="12345"
            telefone="+1 234 567 890"
            email="oliver@burrito.com"
          />
          <Relatorio
            name="lucas harper"
            id="67890"
            telefone="+1 987 654 321"
            email="lucas@stone-tech.com"
          />
          <Relatorio
            name="ethan james"
            id="11223"
            telefone="+1 555 555 555"
            email="ethan@fiber.com"
            noGutter
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default UserStatment;
