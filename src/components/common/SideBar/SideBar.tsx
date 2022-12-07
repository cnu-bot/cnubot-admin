import { Link } from "react-router-dom";
import * as Styled from "./SideBar.style";

const SideBar = () => {
  const pages = [
    {
      url: "analysis",
      name: "분석"
    },
    {
      url: "foodManager",
      name: "학식관리"
    },
    {
      url: "transportManager",
      name: "교통관리"
    }
  ];

  return (
    <Styled.Container>
      <ul>
        {pages.map(page => (
          <Styled.ListItem key={page.name}>
            <Link to={`/main/${page.url}`}>{page.name}</Link>
          </Styled.ListItem>
        ))}
      </ul>
    </Styled.Container>
  );
};

export default SideBar;
