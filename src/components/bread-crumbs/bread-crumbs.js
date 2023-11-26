import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadCrumbsContainer = ({ className }) => {
  const location = useLocation();

  let currentLink = ``;

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = `${currentLink}/${crumb}`;

      return (
        <div
          key={crumb}
          className=" z-20 top-[8%] text-gray-600 text-base ml-1"
        >
          <Link to={currentLink}>{crumb} </Link>
          <span>/</span>
        </div>
      );
    });

  return <div className={className}>{crumbs}</div>;
};

export const BreadCrumbs = styled(BreadCrumbsContainer)``;
