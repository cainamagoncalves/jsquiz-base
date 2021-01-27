import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../source/components/Widget';
import QuizBackground from '../source/components/QuizBackground';
import Footer from '../source/components/Footer';
import GitHubCorner from '../source/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>JsQuiz</title>
        <meta property="og:image" content="https://refresh-digital.com/wp-content/uploads/2020/04/Javascript-History-Image.jpg" />
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

              <input
                onChange={function (e) {
                  setName(e.target.value);
                }}
                placeholder="Diz aí seu nome..."
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
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
