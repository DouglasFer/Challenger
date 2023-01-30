import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 217.56px;
  height: 285px;
  background-color: var(--color-second);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: var(--radius);
  gap: 8px;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  .imgProduct {
    object-fit: contain;
    height: 135px;
  }
  .btnBuy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 32px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 0px 0px 8px 8px;
    outline: none;
    font-weight: 600;
    font-size: 14px;
    color: var(--color-second);
    cursor: pointer;

    &:hover {
      opacity: 0.95;
    }
  }

  &:hover {
    opacity: 0.95;
  }
`;
export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 145px;
  width: 90%;
  justify-content: center;
  gap: 10px;
  .titleProduct {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 46px;

    span {
      font-weight: 600;
      color: var(--gray);
    }

    div {
      padding: 0 8px;
      display: flex;
      align-items: center;
      width: auto;
      height: 26px;
      background-color: var(--gray);
      color: var(--color-second);
      border-radius: var(--radius);

      p {
        font-weight: 700;
        color: var(--color-second);
        font-size: 14px;
      }
    }
  }
  .textSize {
    width: 19ch;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;

export const BodyCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  scroll-behavior: none;
`;

export const ContentBodyCard = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
