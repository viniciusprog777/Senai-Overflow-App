import React from "react";
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
import fotoPerfil from "../../../assets/foto_perfil.png";
import { Image } from "react-native";
import colors from "../../styles/colors";

function CardAnswer() {
  return (
    <ContainerAnswer>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>Por Fulano</TextPoster>
          <TextDate>em 10/10/2010 às 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextDescription>Essa é a Descrição da resposta</TextDescription>
      </CardBody>
    </ContainerAnswer>
  );
}

function CardQuestion() {
  return (
    <Container>
      <CardHeader>
        <ImageProfile source={fotoPerfil} />
        <HeaderContent>
          <TextPoster>Por Fulano</TextPoster>
          <TextDate>em 10/10/2010 às 10:10</TextDate>
        </HeaderContent>
      </CardHeader>
      <CardBody>
        <TextTitle>Titulo da questão</TextTitle>
        <TextDescription>Descrição da questão</TextDescription>
        <ImageQuestion
          style={{ resizeMode: "contain" }}
          source={fotoPerfil}
        ></ImageQuestion>
      </CardBody>
      <CardFooter>
        <TextPoster>Seja o Primeiro a responder</TextPoster>
        <CardAnswer />
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
