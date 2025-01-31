// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftBadge from "components/SoftBadge";
import PropTypes from "prop-types";

function Author({ name, email }) {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftTypography variant="button" fontWeight="medium">
        {name}
      </SoftTypography>
      <SoftTypography variant="caption" color="secondary">
        {email}
      </SoftTypography>
    </SoftBox>
  );
}

// Validação das props no componente Author
Author.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const authorsTableData = {
  columns: [
    { name: "nome", align: "left" },
    { name: "bi", align: "left" },
    { name: "email", align: "left" },
    { name: "telefone", align: "left" },
    { name: "ultimaAvaliacao", align: "center" },
    { name: "categoria", align: "center" },
    { name: "acoes", align: "center" },
  ],

  rows: [
    {
      nome: <Author name="João Pedro" />,
      bi: "00123456789LA032",
      email: "joao.pedro@example.co.ao",
      telefone: "+244 923 456 789",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-15
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="EVEREST" color="success" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de João Pedro")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de João Pedro")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="Maria Silva" />,
      bi: "00123456789LA012",
      email: "maria.silva@example.co.ao",
      telefone: "+244 924 123 456",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-12
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="KILIMANJARO" color="warning" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Maria Silva")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Maria Silva")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="António Miguel" />,
      bi: "00123456789LA045",
      email: "antonio.miguel@example.co.ao",
      telefone: "+244 926 987 654",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-10
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="MOCO" color="info" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de António Miguel")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de António Miguel")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="Ana Paula" />,
      bi: "00123456789LA078",
      email: "ana.paula@example.co.ao",
      telefone: "+244 927 654 321",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-08
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="EVEREST" color="success" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Ana Paula")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Ana Paula")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="Carlos Eduardo" />,
      bi: "00123456789LA034",
      email: "carlos.eduardo@example.co.ao",
      telefone: "+244 928 123 789",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-18
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="KILIMANJARO" color="warning" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Carlos Eduardo")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Carlos Eduardo")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    // Novos usuários adicionados abaixo
    {
      nome: <Author name="Francisco Tomás" />,
      bi: "00123456789LA089",
      email: "francisco.tomas@example.co.ao",
      telefone: "+244 929 111 111",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-20
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="EVEREST" color="success" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Francisco Tomás")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Francisco Tomás")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="Luísa Neto" />,
      bi: "00123456789LA076",
      email: "luisa.neto@example.co.ao",
      telefone: "+244 930 222 222",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-19
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="KILIMANJARO" color="warning" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Luísa Neto")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Luísa Neto")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="Alberto Costa" />,
      bi: "00123456789LA054",
      email: "alberto.costa@example.co.ao",
      telefone: "+244 931 333 333",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-16
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="MOCO" color="info" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Alberto Costa")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Alberto Costa")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="Rita Marques" />,
      bi: "00123456789LA064",
      email: "rita.marques@example.co.ao",
      telefone: "+244 932 444 444",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-14
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="EVEREST" color="success" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Rita Marques")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Rita Marques")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
    {
      nome: <Author name="Paulo Andrade" />,
      bi: "00123456789LA098",
      email: "paulo.andrade@example.co.ao",
      telefone: "+244 933 555 555",
      ultimaAvaliacao: (
        <SoftTypography variant="caption" color="secondary" fontWeight="medium">
          2025-01-13
        </SoftTypography>
      ),
      categoria: (
        <SoftBadge variant="gradient" badgeContent="MOCO" color="info" size="xs" container />
      ),
      acoes: (
        <SoftBox display="flex" justifyContent="space-around">
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Visualizar perfil de Paulo Andrade")}
            variant="caption"
            color="info"
            fontWeight="medium"
          >
            Visualizar
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            onClick={() => console.log("Editar perfil de Paulo Andrade")}
            variant="caption"
            color="secondary"
            fontWeight="medium"
          >
            Editar
          </SoftTypography>
        </SoftBox>
      ),
    },
  ],
};

export default authorsTableData;
