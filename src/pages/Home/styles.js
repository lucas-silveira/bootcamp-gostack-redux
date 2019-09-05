import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;

    img {
      max-width: 100%;
      align-self: center;
    }

    > strong {
      color: #333;
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: 700;
      margin: 5px 0 20px;
    }

    button {
      display: flex;
      align-items: center;
      color: #fff;
      background-color: #7159c1;
      border: none;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 12px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: 700;
      }
    }
  }
`;
