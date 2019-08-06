import React from "react";
import styled from "@emotion/styled";
import ErrorBoundary from "react-error-boundary";
import { useStitchAuth } from "./StitchAuth";
import { Card, CardBody, Button } from "reactstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Login.css';


Login.propTypes = {};
export default function Login() {
  const { actions } = useStitchAuth();
  return (
    <ErrorBoundary>
      <Layout>
        <LoginCard>
          <CardBody>
            <ButtonRow>
              <Jumbotron>
              <h1>Welcome to To-Do World.</h1>
                <div className="login-container">
                  <div>
                  <LoginButton provider="anonymous" onClick={() => actions.handleLogin("anonymous")}>
                    Log In as Anonymous
                  </LoginButton>
                  </div>

                  <div>
                  <LoginButton provider="google" onClick={() => actions.handleLogin("google")}>
                    Log In with Google
                  </LoginButton>
                  </div>
                  
                </div>

              </Jumbotron>
              
            </ButtonRow>
          </CardBody>
        </LoginCard>
      </Layout>
    </ErrorBoundary>
  );
}
const Layout = styled.div`
  
  height: 100%;
  padding: 20px;
`;
const LoginCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
`;
const LoginButton = styled(Button)`
  margin-top: 10px;
`;
const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
`;
