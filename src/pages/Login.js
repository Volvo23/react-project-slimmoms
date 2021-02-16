import React, { Component } from "react";
import styled from "styled-components";
import Inputt from "../components/form/Input";
import Buttonn from "../components/form/Button";
import slimMomApi from "../services/api";
import { connect } from "react-redux";
import { logInOperation } from "../redux/operations/logInOperation";
import { NavLink, Link } from "react-router-dom";

const ContainerForm = styled.div`
  max-width: 439px;
`;
const ContainerButton = styled.div`
  max-width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
`;

const HeadingH1 = styled.h1`
  color: #fc842d;
  font-family: "GothamPro";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: 0.04em;
  margin-bottom: 60px;
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.logInOperation(this.state);
    this.setState({ email: "", password: "" });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <ContainerForm>
        <HeadingH1>ВХОД</HeadingH1>
        <form onSubmit={this.onSubmit}>
          <Inputt
            text={"email"}
            placeholder={"Электронная почта *"}
            name={"email"}
            onChange={this.onChange}
            value={this.state.email}
          />

          <Inputt
            text={""}
            placeholder={"Пароль *"}
            name={"password"}
            onChange={this.onChange}
            value={this.state.password}
          />
          <ContainerButton>
            <Buttonn type={"submit"} text={"Вход"} />
            <Link to={{ pathname: "/register" }}>
              <Buttonn type={""} text={"Регистрация"} />
            </Link>
          </ContainerButton>
        </form>
      </ContainerForm>
    );
  }
}

export default connect(null, { logInOperation })(Login);
