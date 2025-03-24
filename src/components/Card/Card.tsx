import React from "react";
import "./styles.scss";
import { Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ButtonComponent from "../Button/Button";
import { theme } from "../../utils/Theme";

interface TagProps {
  tag: string;
}

interface CardProps {
  image: any;
  header: string;
  isImageIcon?: boolean;
  subHeader?: string;
  leading?: string;
  description?: string;
  tagsList?: Array<string>;
  lastUpdated?: string;
  needActionSection?: boolean;
  price?: string;
  primaryActionButtonText?: string;
  secondaryActionButtonText?: string;
  needSecondaryActionButton?: boolean;
  tagsListTop?: boolean;
  tagsListBottom?: boolean;
  isHorizontal?: boolean;
  centerAlign?: boolean;
}

const iconButtonList = [
  <FavoriteBorderIcon />,
  <ShareIcon />,
  <MoreVertIcon />,
];

const TagComponent = ({ tag }: TagProps) => (
  <div className="tag-background">
    <Typography className="tag">{tag}</Typography>
  </div>
);

const CardComponent = ({
  image,
  isImageIcon = false,
  header,
  subHeader,
  leading,
  description,
  tagsList,
  lastUpdated,
  price,
  needActionSection = false,
  primaryActionButtonText = "PrimaryBtn",
  secondaryActionButtonText = "SecondaryBtn",
  needSecondaryActionButton = false,
  tagsListTop = false,
  tagsListBottom = false,
  isHorizontal = false,
  centerAlign = false,
}: CardProps) => {
  return (
    <div
      className="card-div"
      style={{
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        maxWidth: isHorizontal ? theme.pixelSizes[700] : theme.pixelSizes[300],
      }}
    >
      <div className="image-div">
        <img
          src={image}
          className={`${isImageIcon ? "image-icon" : "card-image"}`}
        />
      </div>
      <div
        className="card-content-section"
        style={{
          alignItems: centerAlign ? "center" : "flex-start",
        }}
      >
        {tagsListTop && (
          <div className="tag-top-list-section">
            <div className="tag-list-wrapper">
              {tagsList?.map((tag) => (
                <TagComponent tag={tag} />
              ))}
            </div>
            <ButtonComponent
              variant="text"
              buttonContent={<MoreVertIcon />}
              color="neutral"
              size="small"
            />
          </div>
        )}
        <div>
          <p
            className="card-leading"
            style={{
              textAlign: centerAlign ? "center" : "left",
            }}
          >
            {leading}
          </p>
          <p
            className="card-header"
            style={{
              textAlign: centerAlign ? "center" : "left",
            }}
          >
            {header}
          </p>
          <p
            className="card-subHeader"
            style={{
              textAlign: centerAlign ? "center" : "left",
            }}
          >
            {subHeader}
          </p>
        </div>
        <p
          className="card-description"
          style={{
            textAlign: centerAlign ? "center" : "left",
          }}
        >
          {description}
        </p>
        {tagsListBottom && (
          <div className="tag-bottom-list-wrapper">
            {tagsList?.map((tag) => (
              <TagComponent tag={tag} />
            ))}
          </div>
        )}
        <p className="price">{price}</p>
        {needActionSection && (
          <div className="action-section">
            <div className="cta-button-div">
              <ButtonComponent
                variant="contained"
                buttonContent={primaryActionButtonText}
                color="primary"
                size="small"
              />
              {needSecondaryActionButton && (
                <ButtonComponent
                  variant="outlined"
                  buttonContent={secondaryActionButtonText}
                  color="primary"
                  size="small"
                />
              )}
            </div>
            <div>
              {iconButtonList.map((iconButtonElement: React.ReactNode) => (
                <ButtonComponent
                  variant="text"
                  buttonContent={iconButtonElement}
                  color="neutral"
                  size="small"
                />
              ))}
            </div>
          </div>
        )}
        <p className="last-updated">{lastUpdated}</p>
      </div>
    </div>
  );
};

export default CardComponent;
