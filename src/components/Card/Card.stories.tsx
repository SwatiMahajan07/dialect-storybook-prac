import type { Meta, StoryObj } from "@storybook/react";
import CardComponent from "./Card";
import fallbackImage from "../../assets/images/fallback-image.jpg";

const meta: Meta<typeof CardComponent> = {
  title: "Components/Card",
  component: CardComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: "text",
    },
    header: {
      control: "text",
    },
    isImageIcon: {
      control: "boolean",
    },
    subHeader: {
      control: "text",
    },
    lastUpdated: {
      control: "text",
    },
    leading: {
      control: "text",
    },
    price: {
      control: "text",
    },
    needActionSection: {
      control: "boolean",
    },
    primaryActionButtonText: {
      control: "text",
    },
    secondaryActionButtonText: {
      control: "text",
    },
    needSecondaryActionButton: {
      control: "boolean",
    },
    tagsList: {
      control: "text",
    },
    description: {
      control: "text",
    },
    tagsListTop: {
      control: "boolean",
    },
    tagsListBottom: {
      control: "boolean",
    },
    centerAlign: {
      control: "boolean",
    },
    isHorizontal: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardComponent>;

export const PrimaryHorizantal: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    subHeader: "Card Subheader",
    lastUpdated: "Last updated 8 hours ago",
    leading: "Card Leading",
    price: "$99.90",
    needActionSection: true,
    primaryActionButtonText: "Submit",
    secondaryActionButtonText: "Reset",
    needSecondaryActionButton: true,
    tagsList: ["Tag", "Tag", "Tag", "Tag"],
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
    tagsListTop: true,
    tagsListBottom: true,
    centerAlign: true,
    isHorizontal: true,
  },
};

export const PrimaryVertical: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    subHeader: "Card Subheader",
    lastUpdated: "Last updated 8 hours ago",
    leading: "Card Leading",
    price: "$99.90",
    needActionSection: true,
    primaryActionButtonText: "Submit",
    secondaryActionButtonText: "Reset",
    needSecondaryActionButton: true,
    tagsList: ["Tag", "Tag", "Tag", "Tag"],
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
    tagsListTop: true,
    tagsListBottom: true,
    centerAlign: true,
    isHorizontal: false,
  },
};

export const HorizontalCardWithImageAndActions: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    leading: "Card Leading",
    needActionSection: true,
    primaryActionButtonText: "Submit",
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
    isHorizontal: true,
  },
};

export const SimpleHorizontalImageCard: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    leading: "Card Leading",
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
    isHorizontal: true,
  },
};

export const HorizontalCardWithIconAndActions: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    isImageIcon: true,
    leading: "Card Leading",
    needActionSection: true,
    primaryActionButtonText: "Submit",
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
    isHorizontal: true,
  },
};

export const SimpleHorizontalIconCard: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    isImageIcon: true,
    leading: "Card Leading",
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
    isHorizontal: true,
  },
};

export const VerticalImageCardWithActions: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    leading: "Card Leading",
    needActionSection: true,
    primaryActionButtonText: "Submit",
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
  },
};

export const VerticalImageProductCardWithImage: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    price: "$99.90",
    needActionSection: true,
    primaryActionButtonText: "Submit",
    centerAlign: true,
  },
};

export const CenteredVerticalIconCard: Story = {
  args: {
    image: fallbackImage,
    header: "Card Header",
    isImageIcon: true,
    lastUpdated: "Last updated 8 hours ago",
    leading: "Card Leading",
    description:
      "Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed quisque velit, auctor at lobortis hac tincidunt sodales id. Elit interdum vel nisi, in enim sagittis at. Netus sagittis eleifend aliquet urna quis.",
    centerAlign: true,
  },
};
