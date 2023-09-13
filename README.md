# DROP_Down
![Screenshot (135)](https://github.com/kumar19999uday/DROP_Down/assets/109509729/9726f645-0a42-43fa-9aed-d6497997c5e0)
# Html
!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Dropdown Property Changer</title>
   
</head>
<body>
    <h1>Dropdown Property Changer</h1>

    <label for="colorDropdown">Color:</label>
    <select id="colorDropdown">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
    </select>

    <label for="bgColorDropdown">Background Color:</label>
    <select id="bgColorDropdown">
        <option value="white">White</option>
        <option value="lightgray">Light Gray</option>
        <option value="lightblue">Light Blue</option>
        <option value="lightgreen">Light Green</option>
    </select>

    <label for="paddingDropdown">Padding:</label>
    <select id="paddingDropdown">
        <option value="10px">10px</option>
        <option value="20px">20px</option>
        <option value="30px">30px</option>
        <option value="40px">40px</option>
    </select>

    <label for="fontSizeDropdown">Font Size:</label>
    <select id="fontSizeDropdown">
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
    </select>

    <label for="fontWeightDropdown">Font Weight:</label>
    <select id="fontWeightDropdown">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
    </select>

    <div id="propertyChanger">
        This is a div element with some text.
    </div>

    <script src="index.js"></script>
</body>
</html>

# css
body {
    font-family: Arial, sans-serif;
    text-align: center;
}
#propertyChanger {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
}

# javaScript
const colorDropdown = document.getElementById("colorDropdown");
        const bgColorDropdown = document.getElementById("bgColorDropdown");
        const paddingDropdown = document.getElementById("paddingDropdown");
        const fontSizeDropdown = document.getElementById("fontSizeDropdown");
        const fontWeightDropdown = document.getElementById("fontWeightDropdown");
        const propertyChanger = document.getElementById("propertyChanger");

        colorDropdown.addEventListener("change", () => {
            propertyChanger.style.color = colorDropdown.value;
        });

        bgColorDropdown.addEventListener("change", () => {
            propertyChanger.style.backgroundColor = bgColorDropdown.value;
        });

        paddingDropdown.addEventListener("change", () => {
            propertyChanger.style.padding = paddingDropdown.value;
        });

        fontSizeDropdown.addEventListener("change", () => {
            propertyChanger.style.fontSize = fontSizeDropdown.value;
        });

        fontWeightDropdown.addEventListener("change", () => {
            propertyChanger.style.fontWeight = fontWeightDropdown.value;
        });
