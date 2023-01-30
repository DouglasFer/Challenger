import styled from "styled-components";

export const ContainerModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 486px;
  min-height: 100%;
  height: auto;
  background-color: var(--color-primary);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: animationModal 1s ease-out 0s 1 normal forwards;
  .removeCardShopp {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--black);
    position: relative;
    left: 360px;
    bottom: 39px;
    cursor: pointer;
    p {
      font-size: 12px;
      color: var(--color-second);
      font-weight: 600;
    }
  }
  button {
    height: 60px;
    background-color: var(--black);
    color: var(--color-second);
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    cursor: pointer;
  }
`;

export const ContentModal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
  height: 90%;

  header {
    width: 379px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    color: var(--color-second);

    h3 {
      width: 190px;
    }
    div {
      background-color: var(--black);
      border-radius: 50%;
      width: 38px;
      height: 38px;
      color: var(--color-second);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      font-size: 26px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const Products = styled.div`
  overflow-x: auto;
  .overflowDiv {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
  }
  width: 100%;
  height: 410px;
`;

export const ContainerCardShopp = styled.div`
  width: 100%;
  max-width: 379px;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-second);
  border-radius: var(--radius);
  animation: animationModal 1s ease-out 0s 1 normal forwards;
`;

export const ContentCardShopp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  .imgShopp {
    height: 57px;
    object-fit: cover;
  }

  .nameSize {
    width: 10ch;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    color: var(--gray);
  }
  .price {
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    line-height: 17px;
    font-family: Montserrat, "Open Sans", Helvetica, Arial, sans-serif;
  }

  .amount {
    font-weight: 600;
    font-size: 5px;
    line-height: 6px;
    color: var(--black);
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
`;

export const AmountProduct = styled.div`
  width: 50px;
  height: 19px;
  border: 1px solid #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: var(--radius);
  p {
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
  }
`;

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: var(--color-second);
  position: absolute;
  width: 100%;
  bottom: 80px;
  right: 0px;
  gap: 180px;
`;
