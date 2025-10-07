import * as XLSX from "xlsx/xlsx.mjs";
import fs from "fs";

// Excel dosyanın adı:
const excelFile = "./bideben_urunler.xlsx";
// Çıktı dosyası:
const outputFile = "./data/products.js";

try {
  // Excel dosyasını binary olarak oku
  const fileBuffer = fs.readFileSync(excelFile);
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });

  // İlk sayfayı al
  const sheetName = workbook.SheetNames[0];
  const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

  // Her satırı products dizisine dönüştür
  const products = sheet.map((row, index) => ({
    id: index + 1,
    name: row["ürün adı"] || "",
    category: row["ana kategori"] || "",
    price: parseFloat(row["dijital eser fiyatı"]).toFixed(2) + " TL",
    target: parseInt(row["hedef satış adeti"]) || 0,
    marketprice: row["gerçek ürün piyasa değeri"]
      ? Number(row["gerçek ürün piyasa değeri"]).toLocaleString("tr-TR") + " TL"
      : "",
    link: row["gerçek ürün linki"] || "",
    image: `/images/${index + 1}.jpg`,
  }));

  // JS formatına dönüştür
  const jsContent = `export const products = ${JSON.stringify(products, null, 2)};`;

  // Dosyayı kaydet
  fs.writeFileSync(outputFile, jsContent, "utf8");
  console.log(`✅ ${products.length} ürün başarıyla dönüştürüldü -> ${outputFile}`);
} catch (err) {
  console.error("❌ Hata oluştu:", err);
}
