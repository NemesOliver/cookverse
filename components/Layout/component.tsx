import { FC } from "react";
import { Props } from "./props";
import { Header, Container, Navigation } from "../../components";

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Container>
        <Header />
        <div className="grid grid-cols-[260px_1fr]">
          <Navigation />
          {children}
        </div>
        {/* Footer */}
      </Container>
    </div>
  );
};
