import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../Button";
import logo from "../../assets/logo.svg";
import perfil from '../../assets/perfil.jpg';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles";

const Header = ({autenticado}) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da dio" />
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src={perfil} />
                ) : (
                    <>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn} />
                        <Button title="Cadastrar" onClick={handleClickRegister} />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }