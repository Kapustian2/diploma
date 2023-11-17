import { useSelector } from "react-redux";
import styled from "styled-components";
import { SelectUserRole } from "../../selectors";
import { ROLE } from "../../constants";
import { Navigate } from "react-router-dom";
import { AddBlock } from "./components/add-block";
import { ProductsBlock } from "./components";

const AdminPanelContainer = ({ className }) => {
  const role = useSelector(SelectUserRole);

  if (!(role === ROLE.ADMIN)) {
    return <Navigate to="/" />;
  }

  return (
    <div className={className}>
      <AddBlock />
      <ProductsBlock />
    </div>
  );
};

export const AdminPanel = styled(AdminPanelContainer)`
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  gap: 20px;
`;
