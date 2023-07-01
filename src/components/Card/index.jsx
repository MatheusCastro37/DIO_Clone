import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import perfil from '../../assets/perfil.jpg';

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture    
} from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture src={perfil} alt="perfil do usuario" />
                <div>
                    <h4>Matheus</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no bootcamp dio do Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <ThumbUpIcon /> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }