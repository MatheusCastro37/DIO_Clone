import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={99} nome="Matheus Castro" image="" />
                <UserInfo percentual={80} nome="Matheus Castro" image="" />
                <UserInfo percentual={10} nome="Matheus Castro" image="" />
                <UserInfo percentual={75} nome="Matheus Castro" image="" />
                <UserInfo percentual={33} nome="Matheus Castro" image="" />
            </Column>
        </Container>
    </>)
}

export { Feed }