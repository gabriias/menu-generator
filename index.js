function downloadImage() {
    var container = document.getElementById("html-to-image");
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.jpg";
        link.href = canvas.toDataURL();
        link.target = "_blank";
        link.click();
    });
}