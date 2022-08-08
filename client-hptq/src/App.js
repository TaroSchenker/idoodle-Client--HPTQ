import "./App.css";
import { Container } from "@chakra-ui/react";
import { GameRoom, NavBar } from "./components";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <NavBar />
      <Container
        display="flex"
        justifyContent="center"
        flexDirection="column"
        maxW="container.2xl"
        py={"50px"}
        px={"50px"}
        gap={12}
      >
        {/* <GameRoom /> */}
      </Container>
      <AppRoutes />
    </>
  );
}

export default App;
