import { WindowContent, WindowWrap, WindowTitle } from "./styled";

export const Window = ({ children, title = "Title" } ) => {
  return (
    <WindowWrap>
      <WindowTitle>{title}</WindowTitle>
      <WindowContent>{children}</WindowContent>
    </WindowWrap>
  );
};
