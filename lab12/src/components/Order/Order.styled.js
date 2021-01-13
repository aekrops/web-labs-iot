import styled from "styled-components";

export const Title = styled.h1`
  color: white;
`;

export const Styles = styled.div`
  h1 {
    text-align: center;
    color: #777;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin: 100px auto;

    label {
      margin-top: 20px;
    }

    input,
    select {
      font-size: 1.2em;
    }

    .error {
      color: #b00d23;
      font-size: 0.8em;
    }
  }

  button {
    background: #011b56;
    padding: 10px;
    color: white;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 1.2em;
    border: none;

    &:hover {
      border: 1px solid #011b56;
      background: #5199ff;
    }
  }
`;
