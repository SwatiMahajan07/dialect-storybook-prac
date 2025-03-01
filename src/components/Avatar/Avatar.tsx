import React from "react";
import { theme } from "../../utils/Theme";
import "./styles.scss";
import defaultAvatar from "../../assets/images/avatar-default.jpg";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

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
        <img
          src={src}
          alt={alt}
          width={
            size === "small"
              ? theme.imageSizes.small
              : size === "medium"
              ? theme.imageSizes.medium
              : size === "large"
              ? theme.imageSizes.large
              : size === "xlarge"
              ? theme.imageSizes.xlarge
              : 0
          }
          height={
            size === "small"
              ? theme.imageSizes.small
              : size === "medium"
              ? theme.imageSizes.medium
              : size === "large"
              ? theme.imageSizes.large
              : size === "xlarge"
              ? theme.imageSizes.xlarge
              : 0
          }
          className={`img-rounded-full`}
        />
        {hasBadge && <div className="badge"></div>}
      </div>
      {hasUsername && <div className="username">{username}</div>}
      {hasCaretMenu && (
        <ArrowDropDownRoundedIcon
          sx={{
            fontSize:
              size === "small"
                ? theme.pixelSizes[16]
                : size === "medium"
                ? theme.pixelSizes[20]
                : size === "large"
                ? theme.pixelSizes[24]
                : size === "xlarge"
                ? theme.pixelSizes[24]
                : 0,
          }}
        />
      )}
    </div>
  );
};

export default AvatarComponent;
