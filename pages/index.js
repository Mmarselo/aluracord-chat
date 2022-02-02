import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';


function Titulo(props) {

    const Tag = props.tag || 'h1';
    return (

        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
        ${Tag}{
          color: ${appConfig.theme.colors.neutrals['300']};
          font-size: 24px;
          font-weight: 600;
        }
      `}</style>
        </>
    );

}



//Componente React
//function HomePage() {
//JSX
// return (
//<div>
//   <GlobalStyle/>
//  <Titulo tag="h2">Boas vindas de volta!</Titulo>
//    <h2>Discord - Origami</h2>


//   </div>
// )
// }

//export default HomePage

export default function PaginaInicial() {
    // const username = 'Mmarselo';
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();


    return (
        <>
           
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[200],
                    backgroundImage: 'url(http://i.imgur.com/uvwZpEn.gif)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[900],
                    }}
                >
                    {/* Formulário */}
                    <Box
                    as="form"
                    onSubmit={
                        function(infosDoEvento){
                            infosDoEvento.preventDefault();
                            console.log('Alguem submeteu o form');
                           // window.location.href = '/chat';
                            roteamento.push(`/chat?username=${username}`);

                    }}
                        
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Boas vindas de volta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        <TextField
                          value={username}
                          onChange={
                              function (event) {
                                  console.log('usuário digitou', event.target.value)
                                  // onde ta o valor?
                                  const valor = event.target.value;
                                  //trocar o valor da variavel
                                  // através do React e avise quem precisa
                                  setUsername(valor);
                              }}
                           
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[300],
                                    mainColor: appConfig.theme.colors.neutrals[300],
                                    mainColorHighlight: appConfig.theme.colors.neutrals[800],
                                    backgroundColor: appConfig.theme.colors.neutrals[900],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.neutrals[800],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.primary[500],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[300],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[900],
                                backgroundColor: appConfig.theme.colors.neutrals[300],
                                padding: '4px 12px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}