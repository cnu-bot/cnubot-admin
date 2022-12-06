import { Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { MuiTimeCard } from "./MuiTimeCard";

export const MuiLayout = (props: { layoutTitles: string[] }) => {
  const { layoutTitles } = props;
  const InnerBlock = layoutTitles.map(title => {
    return (
      <Grid rowSpacing={2} columnSpacing={1} container my={4} xs={12}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <MuiTimeCard title="학기" />
        </Grid>
        <Grid item xs={6}>
          <MuiTimeCard title="방학" />
        </Grid>
      </Grid>
    );
  });

  return (
    <Paper sx={{ padding: "32px" }} elevation={2}>
      {InnerBlock}
    </Paper>
  );
};
