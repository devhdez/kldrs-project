import {
    GooglePlayButton,
    AppGalleryButton,
    ButtonsContainer,
  } from "react-mobile-app-button";
  
  export const MyComponent = () => {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  
    return (
      <ButtonsContainer>
        <GooglePlayButton
          url={APKUrl}
          theme={"light"}
          className={"custom-style"}
        />
  
        <AppGalleryButton
          url={IOSUrl}
          theme={"light"}
          className={"custom-style"}
        />
      </ButtonsContainer>
    );
  };
