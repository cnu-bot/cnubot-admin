import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Typography from "@mui/material/Typography";

type headerType = {
  name: string;
  url: string;
};

export const MuiNavbar = (props: { header: headerType[] }) => {
  const { header } = props;
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="./"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none"
          }}
        >
          LOGO
        </Typography>
        <Stack direction="row" spacing={2}>
          {header.map(page => (
            <Button key={page.name}>
              <Link style={{ textDecoration: "none" }} to={`./${page.url}`}>
                {page.name}
              </Link>
            </Button>
          ))}
          <Outlet />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
