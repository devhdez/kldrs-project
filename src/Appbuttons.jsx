import {
    GooglePlayButton,
    AppStoreButton,
    ButtonsContainer,
  } from "react-mobile-app-button";
  
  export default function Buttons () {
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const IOSUrl = "https://apps.apple.com/us/app/expo-go/id982107779";
  
    return (
      <div className="flex rounded-2xl border-red-700 items-center mx-auto my-3">
        <ButtonsContainer>
          <GooglePlayButton
            url={APKUrl}
            theme={"light"}
            className={"custom-style"}
          />
          <AppStoreButton
            url={IOSUrl}
            theme={"light"}
            className={"custom-style"}
        />
      </ButtonsContainer>
      </div>
    );
  };

