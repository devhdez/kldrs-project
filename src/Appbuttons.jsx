import {
    AppStoreButton,
    ButtonsContainer,
  } from "react-mobile-app-button";

  import { motion } from "framer-motion";
  
  export default function Buttons () {
    const IOSUrl = "https://apps.apple.com/us/app/id6502048405";
  
    return (
      <motion.div className="flex place-content-center py-10"
        whileHover={{ scale: 1.2 }}
        whileTap={{
        scale: 0.8,
        borderRadius: "100%"
        }}
      >
        <ButtonsContainer >
          <AppStoreButton
            url={IOSUrl}
            theme={"light"}
            className={"custom-style"}
        />
      </ButtonsContainer>
      </motion.div>
    );
  };

