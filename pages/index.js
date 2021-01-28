import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../source/components/Widget';
import QuizBackground from '../source/components/QuizBackground';
import Footer from '../source/components/Footer';
import GitHubCorner from '../source/components/GitHubCorner';
import Input from '../source/components/Input';
import Button from '../source/components/Button';
import QuizContainer from '../source/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>JsQuiz</title>
        <meta property="og:image" content="https://www.jstips.co/assets/images/jstips-animation.gif" />
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1> The Javascript </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (e) {
              e.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo submissão por meio do React');

              // router manda para próxima página
            }}
            >

              <Input
                name="nomeDoUsuario"
                onChange={(e) => setName(e.target.value)}
                placeholder="Diz aí seu nome..."
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Bora Jogar ${name} `}
              </Button>
            </form>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1> Outros Quizes </h1>

            <p> lorem ipsum dolor sit amet...</p>

          </Widget.Content>
        </Widget>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/cainamagoncalves" />
      </QuizContainer>
    </QuizBackground>
  );
}
