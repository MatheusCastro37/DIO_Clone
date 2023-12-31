import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { supabase } from "../../services/supabase";

import { Column, Container, CriarText, ImportantText, PoliticsDio, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'

const schema = yup.object({
    name: yup.string().required("Campo Obrigatorio"),
    email: yup.string().email('email não é valido').required("Campo Obrigatorio"),
    password: yup.string().min(3).required("Campo Obrigatorio"),
}).required();

const Register = () => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try{

            const register = await supabase.from("DIO_DB").select("email")
            
            let checkEmail = [];
            checkEmail = register.data.map((item) => item.email);
            checkEmail = checkEmail.filter(value => value === formData.email);
            console.log(checkEmail)
            
            if(checkEmail.length === 0) {
                navigate('/feed')
                await supabase.from("DIO_DB").insert({name: formData.name, email: formData.email, senha: formData.password})
            }else{
                alert("E-mail ja existente!")
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
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <ImportantText>Não use um email e senha valido!</ImportantText>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<PersonIcon />}/>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<EmailIcon />}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<LockIcon />}/>
                    <Button title="Criar minha conta" variant="secondary" type="submit" />
                </form>
                <Column>
                    <PoliticsDio>Ao clicar em "criar minha conta grátis",
                        declaro que aceito as Políticas de
                        Privacidade e os termos de Uso da DIO.
                    </PoliticsDio>
                    <CriarText>Já tenho conta. <Link to="/login">Fazer login</Link></CriarText>
                </Column>
            </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }