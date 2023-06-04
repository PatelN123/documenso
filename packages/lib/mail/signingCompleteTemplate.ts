import { NEXT_PUBLIC_WEBAPP_URL } from "../constants";
import { baseEmailTemplate } from "./baseTemplate";
import { Document as PrismaDocument } from "@prisma/client";

export const signingCompleteTemplate = (message: string) => {
  const customContent = `
<div style="
    width: 100px;
    height: 100px;
    margin: auto;
    padding-top: 14px;
  ">
  <img src="https://media.discordapp.net/attachments/1048261960388575313/1095258498381664256/image.png?width=500&height=507" alt="Resolv Logo" style="width: 100px; display: block;">
</div>

  <p style="margin-top: 14px;">
    A copy of the signed document has been attached to this email.
  </p>`;

  const html = baseEmailTemplate(message, customContent);

  return html;
};

export default signingCompleteTemplate;
