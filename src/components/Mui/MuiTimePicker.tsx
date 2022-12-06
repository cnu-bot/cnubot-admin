import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Box
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export const MuiTimePicker = (props: { title: string }) => {
  const { title } = props;
  const [startTime, setStartTime] = React.useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [endTime, setEndTime] = React.useState<Dayjs | null>(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [disabled, setDisabled] = React.useState(false);
  const handleDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisabled(event.target.checked);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row">
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="h4" color="text.secondary">
            {title}
          </Typography>
        </Box>
        <TimePicker
          value={startTime}
          onChange={setStartTime}
          renderInput={params => (
            <TextField {...params} sx={{ width: "30%" }} />
          )}
        />
        <Typography gutterBottom variant="h2" component="div">
          ~
        </Typography>
        <TimePicker
          value={endTime}
          onChange={setEndTime}
          renderInput={params => (
            <TextField {...params} sx={{ width: "30%" }} />
          )}
        />

        <FormControlLabel
          label={
            <Typography gutterBottom variant="h4" component="div">
              운영안함
            </Typography>
          }
          control={
            <Checkbox
              sx={{ p: 2 }}
              checked={disabled}
              onChange={handleDisabled}
              size="medium"
              color="secondary"
            />
          }
          sx={{ p: 2 }}
        />
        <Button style={{ fontSize: "15px" }}>수정</Button>
      </Stack>
    </LocalizationProvider>
  );
};
