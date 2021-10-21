import {
  StyledTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "./../components/Styles";

//logo
import Logo from "./../assets/logo.png";

const Home = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          padding: "15px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <Avatar image={Logo} />
        </div>
      </div>

      <StyledTitle size={65}>Welcome to my page</StyledTitle>
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="signup">Signup</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Home;
