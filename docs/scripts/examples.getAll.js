import { idPlease } from "../../dist/index";

export const getAll = () => {
  const html =
    `
    <div class="p-5">
      <h6>Stringify JSON of all data received during handshake:</h6>
      <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">key</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
      ` +
    Object.entries(idPlease.getAll())
      .map(
        (e, i) =>
          `<tr>
          <th scope="row">${i + 1}</th>
          <td>${e[0]
            .replace(/([a-z])([A-Z])/g, "$1 $2")
            .toLocaleUpperCase()}</td>
          <td>${e[1]}</td>
        </tr>`
      )
      .join(" ") +
    `</tbody>
        </table>
      </div>
    </div>
  `;

  return html;
};
