import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    button {
      color: #fff;
      background-color: #7159c1;
      font-weight: 700;
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      text-transform: uppercase;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    display: block;
    color: #333;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;

    input {
      width: 50px;
      color: #555;
      padding: 6px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  button {
    background: none;
    padding: 6px;
    border: 0;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: 700;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
