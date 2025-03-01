import React from "react";
import "./styles.scss";
import defaultAvatar from "../../assets/images/avatar-default.jpg";
import caretDown from "../../assets/images/caret-down.svg";

interface AvatarComponentProps {
  size?: "small" | "medium" | "large" | "xlarge";
  src?: string;
  alt?: string;
  hasBadge?: boolean;
  hasCaretMenu?: boolean;
  hasUsername?: boolean;
  username?: string;
}

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  size = "medium",
  src = defaultAvatar,
  alt = "Avatar",
  hasBadge = false,
  hasCaretMenu = false,
  hasUsername = false,
  username = "John Doe",
}) => {
  return (
    <div className="avatar-container">
      <div className="img-container">
        <img src={src} alt={alt} className={`img-rounded-full img-${size}`} />
        {hasBadge && <div className={`badge badge-${size}`}></div>}
      </div>
      {hasUsername && (
        <div className={`username username-${size}`}>{username}</div>
      )}
      {hasCaretMenu && (
        <img
          src={caretDown}
          alt="Caret Down"
          className={`caret-down-${size}`}
        />
      )}
    </div>
  );
};

export default AvatarComponent;
