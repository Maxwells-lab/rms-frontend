import { Box, useTheme } from "@mui/material";
import MapDomain from "../../components/GeographyChart";
import TextTemplator from "../../components/Template/Header";
import { tokens } from "../../theme";

const Map = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <TextTemplator title="Map" subtitle="Simple Map to take a glance" />

      <Box
     
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
        alignItems="center"
      >
        <MapDomain />
      </Box>
    </Box>
  );
};

export default Map;
