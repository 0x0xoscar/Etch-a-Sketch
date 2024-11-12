const container = document.querySelector(".container");
const SIZE = 16;
const containerWidth = 500;
const containerHeight = 500;

function addColumnsAndRows() {
    const columnWidth = containerWidth / SIZE;
    const rowHeight = containerHeight / SIZE;


    for (let i = 0; i < SIZE; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        container.append(column);

        for (let j = 0; j < SIZE; j++) {
            const row = document.createElement("div");
            row.classList.add("row");

            row.style.width = `${columnWidth}px`;
            row.style.height = `${rowHeight}px`;

            column.append(row);
        }
    }
}

addColumnsAndRows();
const rows = document.querySelectorAll(".rows");
const rowsArr = Array.from(rows);
const cols = document.querySelectorAll(".column")
const columnArr = Array.from(cols)

rowsArr.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    })
});

columnArr.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    })
});