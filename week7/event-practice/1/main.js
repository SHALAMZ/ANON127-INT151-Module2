// เข้าถึงกล่องและปุ่มทั้งหมด
const box = document.getElementById("box")
const addBtn = document.getElementById("add")
const removeBtn = document.getElementById("remove")
const toggleBtn = document.getElementById("toggle")

// ปุ่มเพิ่มเส้นขอบ
addBtn.addEventListener("click", () => {
  box.classList.add("bordered")
  console.log("เพิ่มเส้นขอบแล้ว ✅")
})

// ปุ่มลบเส้นขอบ
removeBtn.addEventListener("click", () => {
  box.classList.remove("bordered")
  console.log("ลบเส้นขอบออกแล้ว ❌")
})

// ปุ่มสลับเส้นขอบ
toggleBtn.addEventListener("click", () => {
  box.classList.toggle("bordered")
  console.log("สลับสถานะเส้นขอบ 🔁")
})