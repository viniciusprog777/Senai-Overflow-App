const { StatusBar, FlatList } = require("react-native");
import React, { useState, useEffect } from "react";
import { Container, ToolBar, TextToolbar } from "./styles";
import colors from "../../styles/colors";
import CardQuestion from "../../components/CardQuestion";
import { api } from "../../services/api";
function Home() {
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [loadingFeed, setLoadingFeed] = useState(false);

  const [questions, setQuestions] = useState([]);

  const [page, setPage] = useState(1);

  const loadQuestions = async () => {
    if (loadingFeed) return;

    if (totalQuestions > 0 && totalQuestions == questions.length) return;

    setLoadingFeed(true);
    const response = await api.get(`/feed`, {
      params: { page },
    });
    setPage(page + 1);
    setQuestions([...questions, ...response.data]);

    setTotalQuestions(response.headers["x-total-count"]);

    setLoadingFeed(false);
  };
  useEffect(() => {
    loadQuestions();
  }, []);

  // const handleReload = () => {
  //   setQuestions([]);
  //   setPage(1);
  //   setReload(Math.random());
  // };
  StatusBar.setBackgroundColor(colors.primary);
  return (
    <Container>
      <ToolBar>
        <TextToolbar>SENAI OVERFLOW</TextToolbar>
      </ToolBar>
      <FlatList
        data={questions}
        style={{ width: "100%" }}
        onEndReached={() => loadQuestions()}
        onEndReachedThreshold={0.2}
        keyExtractor={(question) => String(question.id)}
        renderItem={({ item: question }) => (
          <CardQuestion question={question} />
        )}
      />
    </Container>
  );
}

export default Home;
