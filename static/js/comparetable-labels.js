document.addEventListener("DOMContentLoaded", function () {
  var tables = document.querySelectorAll(".comparetable-wrap table");
  if (!tables.length) return;

  tables.forEach(function (table) {
    var headCells = table.querySelectorAll("thead th");
    if (!headCells.length) return;

    var headers = Array.from(headCells).map(function (th) {
      return (th.textContent || "").trim();
    });

    table.querySelectorAll("tbody tr").forEach(function (row) {
      row.querySelectorAll("td").forEach(function (td, index) {
        td.setAttribute("data-label", headers[index] || "");
      });
    });
  });
});
