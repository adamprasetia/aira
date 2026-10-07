// Nomor WhatsApp (format internasional tanpa +)
const WA_NUMBER = "6281320053678";

const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Semua elemen dengan data-wa membuka WhatsApp dengan pesan terisi
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = waLink(el.dataset.wa);
  el.target = "_blank";
  el.rel = "noopener";
});

// Form pesan cepat -> pesan WhatsApp terformat
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const lines = [
    "Halo Aira Printing, saya mau pesan:",
    `• Layanan: ${f.get("produk")}`,
    f.get("ukuran") && `• Ukuran: ${f.get("ukuran")}`,
    f.get("jumlah") && `• Jumlah: ${f.get("jumlah")}`,
    f.get("catatan") && `• Catatan: ${f.get("catatan")}`,
    `• Nama: ${f.get("nama")}`,
    "",
    "Mohon info harga & estimasi waktu. Terima kasih.",
  ].filter((l) => l !== "" ? Boolean(l) : true);
  window.open(waLink(lines.join("\n")), "_blank", "noopener");
});

document.getElementById("yr").textContent = new Date().getFullYear();
