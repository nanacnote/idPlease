import { idPlease } from "../../dist/index";

export const getAllJSON = () => {
  const html = `
    <div class="p-5">
      <h6>Stringify JSON of all data received during handshake:</h6>
      <p>
        ${idPlease.getAll().test}
      </p>
    </div>
  `;

  return html;
};
