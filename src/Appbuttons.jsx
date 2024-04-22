import {
    AppStoreButton,
    ButtonsContainer,
  } from "react-mobile-app-button";
  
  export default function Buttons () {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  
    return (
      <div className="flex place-content-center py-20">
        <ButtonsContainer >
          <AppStoreButton
            url={IOSUrl}
            theme={"light"}
            className={"custom-style"}
        />
      </ButtonsContainer>
      </div>
    );
  };

