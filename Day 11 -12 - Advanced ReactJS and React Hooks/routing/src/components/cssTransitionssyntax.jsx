import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Routes, Route, useLocation } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}
