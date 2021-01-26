import styled from 'styled-components'
import db from '../db.json'
import Widget from '../source/components/Widget'
import QuizBackground from '../source/components/QuizBackground'
import Footer from '../source/components/Footer'
import GitHubCorner from '../source/components/GitHubCorner'


const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <meta property="og:image:type" content={db.bg} />
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1> The Javascript </h1>
          </Widget.Header>
          <Widget.Content>

            <p> lorem ipsum dolor sit amet...</p>
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
      </QuizContainer >
    </QuizBackground >
  )
}
