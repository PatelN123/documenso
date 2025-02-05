import { NEXT_PUBLIC_WEBAPP_URL } from "../constants";
import { Document as PrismaDocument } from "@prisma/client";

export const baseEmailTemplate = (message: string, content: string) => {
  const html = `
    <div style="background-color: #eaeaea; padding: 2%;">
      <div style="text-align:center; margin: auto; font-size: 14px; font-color: #353434; max-width: 500px; border-radius: 0.375rem; background: white; padding: 50px">
        <img src="https://media.discordapp.net/attachments/1048261960388575313/1095258498381664256/image.png?width=500&height=507" alt="Resolv Logo" style="width: 180px; display: block; margin: auto; margin-bottom: 14px;">
        ${message} 
        ${content}
      </div>
    `;

  const footer = `     
      <div style="text-align: left; line-height: 18px; color: #666666; margin: 24px">
        <div>
          <b>Do not forward.</b>
          <br>
          This email gives access to a secure document. Keep it secret and do not forward this email.
        </div>
        <div style="margin-top: 12px">
          <b>Need help?</b>
          <br>
          Contact us at <a href="https://discord.gg/resolv">discord.gg/resolv</a>  
        </div>
        <hr size="1" style="height: 1px; border: none; color: #D8D8D8; background-color: #D8D8D8">
        <div style="text-align: center">
          <small>Resolv confidential document. Do not share.</small>
        </div>
      </div>
    </div>
      `;

  return html + footer;
};

export default baseEmailTemplate;
