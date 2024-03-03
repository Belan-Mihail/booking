import styles from "./App.module.css";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <div className={styles.App}>
      <Container className={styles.MainContainer}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hotels" element={<List />} />
          <Route exact path="/hotels/:id" element={<Hotel />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
