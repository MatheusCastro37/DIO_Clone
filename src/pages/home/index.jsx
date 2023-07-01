import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import {Container, TextContent, Title, TitleHighlight} from './styles';
import fundo from "../../assets/fundo1.png";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente
                        <br />
                    </TitleHighlight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                    desafio profissional, evoluindo em comunidade com o smelhores experts.
                </TextContent>
                <Button title="Começar" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={fundo} alt="Imagem principal" />
            </div>
        </Container>
    </>)
}

export { Home }