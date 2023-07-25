import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { supabse } from "../../services/supabase";

import { Column, Container, CriarText, PoliticsDio, SubtitleLogin, Title, TitleLogin, Wrapper} from './styles'

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

    /*
    const onSubmit = async formData => {
        try{

            const teste = await api.get(`db.json`)
            console.log(teste.data)

            let checkEmail = [];
            checkEmail = teste.data.map((item) => item.email);

            console.log(checkEmail)
            checkEmail = checkEmail.filter(value => value === formData.email);
            console.log(checkEmail)

            if(checkEmail.length === 0) {
                navigate('/feed')
                api.post('db.json', {
                    id: ``,
                    name: `${formData.name}`,
                    email: `${formData.email}`,
                    senha: `${formData.password}`
                })
            }else{
                alert("E-mail ja existente!")
            }

        }catch{
            alert("houve um erro, tente novamente")
        }
    };*/

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
                <form onSubmit={handleSubmit(/*onSubmit*/)}>
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
                    <CriarText>Já tenho conta. <strong>Fazer login</strong></CriarText>
                </Column>
            </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }