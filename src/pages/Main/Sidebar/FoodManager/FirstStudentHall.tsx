import { Button, Typography } from "@mui/material";
import { MuiLayout } from "~/components/Mui/MuiLayout";

const layoutTitle = ["라면 & 간식", "양식", "스낵", "한식", "일식", "중식"];

export const FirstStudentHall = () => {
  return (
    <div>
      {/* need router */}
      <Button sx={{ p: 2 }}>
        <Typography gutterBottom variant="h4">
          운영시간수정
        </Typography>
      </Button>
      <Button sx={{ p: 2 }}>
        <Typography gutterBottom variant="h4">
          메뉴 추가/삭제/수정
        </Typography>
      </Button>
      <MuiLayout layoutTitles={layoutTitle} />
    </div>
  );
};
