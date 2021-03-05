import React, { useState } from "react";
import {
  Container,
  CardHeader,
  ImageProfile,
  HeaderContent,
  TextPoster,
  TextDate,
  CardBody,
  TextTitle,
  TextDescription,
  ImageQuestion,
  InputAnswer,
  CardFooter,
  ContainerInputAnswer,
  SendIcon,
  ContainerAnswer,
} from "./styles";
// import { format } from "date-fns";
import fotoPerfil from "../../../assets/foto_perfil.png";
// import { Image } from "react-native";
import colors from "../../styles/colors";
import { FlatList, TouchableOpacity } from "react-native";

function CardAnswer({ answer }) {
  return (
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile
          source={
            answer.Student.image ? { uri: answer.Student.image } : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster>{answer.Student.name}</TextPoster>
          <TextDate>{answer.created_at}</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>{answer.description}</TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}

function CardQuestion({ question }) {
  const [showAnswers, setShowAnswers] = useState(false);
  return (
    <Container>
      <CardHeader>
        <ImageProfile
          source={
            question.Student.image
              ? { uri: question.Student.image }
              : fotoPerfil
          }
        />
        <HeaderContent>
          <TextPoster>{question.Student.name}</TextPoster>
          <TextDate> {question.created_at}</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>{question.title}</TextTitle>
        <TextDescription>{question.description}</TextDescription>
        <ImageQuestion
          style={{ resizeMode: "contain" }}
          source={{ uri: question.image }}
        ></ImageQuestion>
      </CardBody>
      <CardFooter>
        <TouchableOpacity onPress={() => setShowAnswers(!showAnswers)}>
          <TextPoster>
            {question.Answers.length === 0
              ? "Seja o primeiro a responder"
              : question.Answers.length + " respostas"}
          </TextPoster>
        </TouchableOpacity>

        {showAnswers && (
          <FlatList
            data={question.Answers}
            keyExtractor={(answer) => String(answer.id)}
            renderItem={({ item: answer }) => <CardAnswer answer={answer} />}
          />
        )}

        <ContainerInputAnswer>
          <InputAnswer
            placeholder="Responda essa Pergunta"
            placeholderTextColor={colors.light}
          />
          <SendIcon name="paper-plane" color="#fff" />
        </ContainerInputAnswer>
      </CardFooter>
    </Container>
  );
}
export default CardQuestion;
