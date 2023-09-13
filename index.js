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