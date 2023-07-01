import React from 'react'
import { Container, NameText, Progress, UserPicture } from './styles';
import perfil from '../../assets/perfil.jpg';


const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
        <UserPicture src={perfil} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }