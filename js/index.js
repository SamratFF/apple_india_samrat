let img1Main = document.getElementById('img1Main');

function img1MainWidthHeight() {
     let width = screen.width;
     let height = screen.height;

     img1Main.style.width = String(width) + "px";
     img1Main.style.height = String(height) + "px";
}