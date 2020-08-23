import { idPlease } from "../../dist/index";

export const getAll = () => {
  const html =
    `
    <div class="p-5">
      <h6>Stringify JSON of all data received during handshake:</h6>
      <div>` +
    Object.entries(idPlease.getAll()).map(
      (e) => `<div><span>${e[0]}</span> ---> ${e[1]}</div>`
    ) +
    `
      </div>
    </div>
  `;

  return html;
};
