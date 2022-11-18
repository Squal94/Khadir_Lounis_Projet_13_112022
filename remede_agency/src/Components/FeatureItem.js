import React, { useEffect, useState } from "react";
import picMoney from "./../Assets/icon-money.png";
import picSecurity from "./../Assets/icon-security.png";
import picChat from "./../Assets/icon-chat.png";

const FeatureItem = ({ props }) => {
  const [featureItem, setFeatureIem] = useState();
  let picture = "";

  useEffect(() => {
    setFeatureIem(props);
  }, [props]);

  if (props.id === "tchat") {
    picture = picChat;
  }
  if (props.id === "money") {
    picture = picMoney;
  }
  if (props.id === "security") {
    picture = picSecurity;
  }

  return (
    <div className="featureContainer__item">
      <div className="featureContainer__item__border">
        <img
          className="featureContainer__item__border--pic"
          src={picture}
          alt={featureItem?.id}
        />
      </div>
      <h2 className="featureContainer__item--title">{featureItem?.title} </h2>
      <p className="featureContainer__item--txt">{featureItem?.texte}</p>
    </div>
  );
};

export default FeatureItem;
