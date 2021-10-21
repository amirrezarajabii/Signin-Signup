import {
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
    colors
  } from "./../components/Styles";
  
  //logo
  import Logo from "./../assets/logo.png";
  
  const Dashboard = () => {
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

        <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}>Welcome, user</StyledTitle>
        <ButtonGroup>
          <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
        </StyledFormArea>
      </div>
    );
  };
  
  export default Dashboard;
  