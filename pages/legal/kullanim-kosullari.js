export default function Kosullar() {
  return (
    <main
      style={{
        maxWidth: 800,
        margin: "40px auto",
        padding: "0 16px",
        color: "#ddd",
        lineHeight: "1.7",
      }}
    >
      <h1 style={{ color: "#ffcc00", marginBottom: "20px" }}>Kullanım Koşulları</h1>

      <p>
        İşbu Kullanım Koşulları Sözleşmesi,{" "}
        <strong>bideben.com</strong> internet sitesi (“<strong>bideben</strong>”)
        ile siteyi ziyaret eden veya üyelik oluşturarak hizmetlerden faydalanan
        gerçek veya tüzel kişi (“<strong>Kullanıcı</strong>”) arasında akdedilmiştir.
        Siteye giren, kullanan veya herhangi bir şekilde erişim sağlayan her
        kullanıcı bu sözleşmeyi okumuş, anlamış ve tüm hükümlerini kabul etmiş
        sayılır.
      </p>

      <h2 style={{ marginTop: "30px", color: "#ffcc00" }}>1. Hizmetin Tanımı</h2>
      <p>
        bideben, yapay zekâ teknolojileri kullanarak üretilen dijital sanat
        eserlerini (“<strong>Dijital Eser</strong>”) çevrim içi olarak satışa sunan
        bir platformdur. Kullanıcı, satın aldığı dijital eseri, ödeme işleminin
        tamamlanmasının ardından sistemde belirtmiş olduğu e-posta adresine
        gönderilen dijital dosya olarak teslim alır.
      </p>

      <h2 style={{ marginTop: "30px", color: "#ffcc00" }}>2. Topluluk Ödülleri Sistemi</h2>
      <p>
        bideben platformunda sunulan “<strong>Topluluk Ödülleri Sistemi</strong>”,
        tamamen kullanıcıların dijital eser satın alımlarıyla oluşan topluluk
        katkılarına dayanır. Sistem, topluluk katkı hedeflerinin
        tamamlanması durumunda belirli ödüllerin veya hediyelerin verilmesini
        amaçlar. Ancak bu sistem bir çekiliş, kumar veya garanti edilmiş ödül
        vaadi değildir.
      </p>
      <p>
        bideben hiçbir koşul altında herhangi bir ödül, hediye veya fiziksel ürün
        teslimini garanti etmez. Kullanıcı, Topluluk Ödülleri Sistemi’ne katılımın
        tamamen gönüllülük esasına dayandığını ve katkı paylarının geri
        iadesinin mümkün olmadığını kabul eder.
      </p>

      <h2 style={{ marginTop: "30px", color: "#ffcc00" }}>3. Kullanıcı Yükümlülükleri</h2>
      <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
        <li>
          Kullanıcı, site üzerinden yaptığı işlemlerde verdiği bilgilerin doğru
          ve güncel olduğunu beyan eder.
        </li>
        <li>
          Kullanıcı, bideben platformunu yürürlükteki mevzuata, kamu düzenine ve
          ahlaka aykırı biçimde kullanmamayı kabul eder.
        </li>
        <li>
          Kullanıcı, kendisine ait hesabın güvenliğinden sorumludur. Üçüncü
          kişilerin hesabı kötüye kullanmasından bideben sorumlu tutulamaz.
        </li>
      </ul>

      <h2 style={{ marginTop: "30px", color: "#ffcc00" }}>4. Fikri Mülkiyet Hakları</h2>
      <p>
        Site üzerindeki tüm görseller, dijital eserler, metinler, logolar ve
        tasarımlar bideben veya lisans veren üçüncü kişilere aittir. Yazılı izin
        alınmaksızın kopyalanamaz, çoğaltılamaz veya ticari amaçla
        kullanılamaz.
      </p>

      <h2 style={{ marginTop: "30px", color: "#ffcc00" }}>5. Sorumluluk Reddi</h2>
      <p>
        bideben, dijital eserlerin niteliği, doğruluğu veya kullanıcı
        beklentilerine uygunluğu konusunda herhangi bir garanti vermez. Dijital
        eserler “olduğu gibi” sunulmaktadır.
      </p>
      <p>
        bideben, Topluluk Ödülleri Sistemi kapsamında veya site üzerinde yer alan
        bilgiler, açıklamalar veya vaatler nedeniyle hiçbir koşul altında hukuki
        veya mali açıdan sorumlu tutulamaz.
      </p>
      <p>
        Kullanıcı, platformu kendi sorumluluğunda kullandığını ve bideben’in
        hiçbir durumda maddi, manevi, dolaylı veya doğrudan zararlardan dolayı
        yükümlü olmayacağını kabul eder.
      </p>

      <h2 style={{ marginTop: "30px", color: "#ffcc00" }}>6. Değişiklik Hakkı</h2>
      <p>
        bideben, işbu Kullanım Koşulları’nı dilediği zaman tek taraflı olarak
        güncelleme veya değiştirme hakkını saklı tutar. Güncellenen koşullar
        site üzerinde yayınlandığı tarihte yürürlüğe girer.
      </p>

      <h2 style={{ marginTop: "30px", color: "#ffcc00" }}>7. Uygulanacak Hukuk ve Yetki</h2>
      <p>
        İşbu sözleşme Türkiye Cumhuriyeti kanunlarına tabidir. Taraflar
        arasındaki uyuşmazlıklarda İstanbul (Merkez) Mahkemeleri ve İcra
        Daireleri yetkilidir.
      </p>

      <p style={{ marginTop: "40px", fontSize: "0.9em", color: "#999" }}>
        Son güncelleme tarihi: {new Date().toLocaleDateString("tr-TR")}
      </p>
    </main>
  );
}
