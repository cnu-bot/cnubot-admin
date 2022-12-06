import { Button, Typography } from "@mui/material";
import { MuiLayout } from "~/components/Mui/MuiLayout";

const layoutTitle = [""];
export const Dorm = () => {
  return (
    <div>
      {/* need router */}
      <Button sx={{ p: 2 }}>
        <Typography gutterBottom variant="h4">
          운영시간수정
        </Typography>
      </Button>
      <MuiLayout layoutTitles={layoutTitle} />
    </div>
  );
};
