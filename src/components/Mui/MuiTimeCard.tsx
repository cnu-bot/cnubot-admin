import { Box, Card, CardContent, Typography, Stack } from "@mui/material";
import { MuiTimePicker } from "./MuiTimePicker";

export const MuiTimeCard = (props: { title: string }) => {
  const { title } = props;
  return (
    <Box>
      <Typography gutterBottom variant="h4" color="text.secondary">
        {title}
      </Typography>
      <Card>
        <CardContent>
          <Stack>
            <MuiTimePicker title="아침" />
            <MuiTimePicker title="점심" />
            <MuiTimePicker title="저녁" />
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
