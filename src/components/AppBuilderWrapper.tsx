import React, { useEffect } from "react";
import AgoraAppBuilder from "@appbuilder/react";

const AppBuilderWrapper = () => {
  //   useEffect(() => {
  //     // Apply any customizations if needed
  //     const customization = AgoraAppBuilder.createCustomization({
  //       // Add your customization config here
  //     });
  //     AgoraAppBuilder.customize(customization);
  //   }, []);

  return (
    <div style={{ display: "flex", width: "100vw", height: "550px" }}>
      <AgoraAppBuilder.View />
    </div>
  );
};

export default AppBuilderWrapper;
