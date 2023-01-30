import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  p {
    color: var(--color-second);
  }
  p b {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
  }
`;

export const ContentHeader = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartHeader = styled.div`
  width: 90px;
  height: 45px;
  background-color: var(--color-second);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  span {
    font-weight: 600;
  }
`;
