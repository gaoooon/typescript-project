import styled from "styled-components";

export const WeatherContainer = styled.div`
  @font-face {
    font-family: "HakgyoansimBareondotumB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimBareondotumB.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }

  border-radius: 30px 30px 30px 30px;
  background-color: #f6f4eb;
  font-size: 30px;
  font-family: "HakgyoansimBareondotumB";
  text-align: center;
  padding: 30px 90px;
  border: 5px solid #749bc2;

  div {
    border: 5px solid #91c8e4;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 20px;
  }
`;
