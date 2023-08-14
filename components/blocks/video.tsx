import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { Template } from "tinacms";
import { PageBlocksVideo } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

export const Video = ({ data }: { data: PageBlocksVideo }) => {
  return (
    <Section color={data.color}>
      <Container size="large">

      <div className=" text-center items-center">
            <div className=" prose-lg">
                <iframe 
                className="w-full h-96"
                src={data.quote}
                allowFullScreen
                ></iframe>
            </div>
        </div>

        <footer className="text-center">
        <p
            data-tina-field={tinaField(data, `author`)}
            className={`tracking-wide title-font font-bold text-lg ${
              data.color === "primary"
              ? `text-gray-1000`
              : `text-gray-700 dark:text-gray-50`
            }`}
          >
              {data.author}
          </p>
        </footer>
        
      </Container>
    </Section>
  );
};

export const videoBlockSchema: Template = {
  name: "video",
  label: "Video",
  ui: {
    previewSrc: "/blocks/video.png",
    defaultItem: {
      quote:
        "Video Link",
      author: "Alt text",
      color: "primary",
    },
  },
  fields: [
    {
      type: "string",
      label: "Video Link",
      name: "quote",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};