import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { supabase } from "../../services/supabase";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'

const schema = yup.object({
    email: yup.string().email('email não é valido').required("Campo Obrigatorio"),
    password: yup.number().min(3).required("Campo Obrigatorio"),
  }).required();

const Login = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try{
            const { data } = await supabase.from("DIO_DB").select("*")
            const newLogin = data.filter(data => {
                return data.email === formData.email && data.senha === formData.password
            })
            console.log(newLogin)
            
            if(newLogin.length === 1){
                navigate('/feed')
            }else{
                alert("Email ou Senha invalido")
            }
        }catch{
            alert("houve um erro, tente novamente")
        }
    };

    const navigate = useNavigate();

    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para voce aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
            <Wrapper>
                <TitleLogin>Faça seu Login</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<EmailIcon />}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<LockIcon />}/>
                    <Button title="Entrar" variant="secondary" type="submit" />
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar minha conta</CriarText>
                </Row>
            </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }