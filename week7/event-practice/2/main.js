// เลือกกล่องและปุ่มทั้งหมด
const box = document.getElementById("box");
const buttons = document.querySelectorAll("button");

// วนลูปเพิ่ม event ให้ทุกปุ่ม
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color; // อ่านค่า data-color
    box.style.backgroundColor = color; // เปลี่ยนสีของกล่อง
    box.textContent = color.toUpperCase(); // แสดงชื่อสีบนกล่อง
    console.log(`เปลี่ยนสีเป็น: ${color}`);
  });
});
