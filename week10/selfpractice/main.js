document.addEventListener("DOMContentLoaded", function () {

    const bgColorInput = document.getElementById("bgColor");
    const fontColorInput = document.getElementById("fontColor");
    const fontSizeSelect = document.getElementById("fontSize");
    const saveBtn = document.getElementById("saveBtn");
    const resetBtn = document.getElementById("resetBtn");


    function Settings() {
        const bgColor = localStorage.getItem("bgColor") || "#ffffff";
        const fontColor = localStorage.getItem("fontColor") || "#000000";
        const fontSize = localStorage.getItem("fontSize") || "medium";
        
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = fontColor;
   
        if (fontSize === "small") document.body.style.fontSize = "14px";
        else if (fontSize === "medium") document.body.style.fontSize = "18px";
        else if (fontSize === "large") document.body.style.fontSize = "24px";

        bgColorInput.value = bgColor;
        fontColorInput.value = fontColor;
        fontSizeSelect.value = fontSize;
    }
    Settings();

    saveBtn.addEventListener("click", function () {
        localStorage.setItem("bgColor", bgColorInput.value);
        localStorage.setItem("fontColor", fontColorInput.value);
        localStorage.setItem("fontSize", fontSizeSelect.value);
        Settings();
        alert("บันทึกค่าแล้ว!!");
    });

    resetBtn.addEventListener("click", function () {
        localStorage.clear();
        Settings();
        alert("รีเซ็ตค่าแล้ว!!");
    });
});