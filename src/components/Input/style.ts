import styled from "styled-components";

export const InputContainer = styled.div`
  @font-face {
    font-family: "HakgyoansimBareondotumB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimBareondotumB.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  margin: 4rem auto 5rem auto;

  text-align: center;

  form {
    border-radius: 30px 30px 30px 30px;
    border: 5px solid #749bc2;

    input {
      // 입력창
      padding: 15px 40px;
      border-radius: 30px 0px 0px 30px;
      font-size: larger;
      border: 0;
    }

    button {
      padding: 15px 20px;
      border-radius: 0px 30px 30px 0px;
      font-size: larger;
      cursor: pointer;
      border-left: 5px solid #749bc2;
      border-bottom: 0;
      border-right: 0;
      border-top: 0;
    }

    input:focus {
      outline: none;
    }

    button:active {
      background-color: #4682a9;
    }

    button,
    input {
      background-color: #f6f4eb;
      font-family: "HakgyoansimBareondotumB";
    }
  }
`;
