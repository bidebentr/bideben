import Link from "next/link";
import Footer from "@/components/Footer";

export default function KvkkAydinlatmaMetni() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-300 leading-relaxed">
      {/* 🏠 Anasayfa Butonu */}
      <div className="text-center mb-8">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 border border-yellow-600 rounded-lg hover:bg-yellow-500/30 transition"
        >
          ← Anasayfa
        </Link>
      </div>

      {/* Başlık */}
      <h1 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
        KVKK Aydınlatma Metni
      </h1>

      <section className="space-y-6 text-sm">
        <p>
          6698 Sayılı Kişisel Verilerin Korunması Kanunu (“<strong>KVKK</strong>”)
          uyarınca, <strong>bideben.com</strong> (“<strong>bideben</strong>”) olarak,
          kullanıcılarımızın kişisel verilerinin güvenliğine ve gizliliğine büyük
          önem veriyoruz. İşbu Aydınlatma Metni, kişisel verilerinizin ne şekilde
          işlendiğini, saklandığını ve haklarınızı açıklamak amacıyla hazırlanmıştır.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          1. Veri Sorumlusu
        </h2>
        <p>
          KVKK kapsamında veri sorumlusu sıfatıyla bideben, kullanıcıların site
          üzerinden paylaştığı kişisel verilerin işlenmesinden sorumludur.{" "}
          İletişim: <strong className="text-yellow-400">destek@bideben.com</strong>
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          2. İşlenen Kişisel Veriler
        </h2>
        <p>
          bideben, kullanıcıların siteyi kullanımı sırasında aşağıdaki verileri
          işleyebilir:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ad, soyad, e-posta adresi, kullanıcı ID bilgisi</li>
          <li>Google veya Facebook üzerinden alınan temel profil bilgileri</li>
          <li>Satın alınan dijital eserlere ilişkin işlem kayıtları</li>
          <li>IP adresi, tarayıcı bilgisi ve kullanım istatistikleri</li>
          <li>İletişim formu aracılığıyla iletilen mesaj içerikleri</li>
        </ul>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          3. Kişisel Verilerin İşlenme Amaçları
        </h2>
        <p>bideben, kişisel verileri aşağıdaki amaçlarla işler:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Kullanıcı hesabı oluşturmak ve giriş işlemlerini yürütmek,</li>
          <li>Dijital eser satışını gerçekleştirmek ve teslimatını e-posta ile sağlamak,</li>
          <li>Topluluk Katkı Sistemi kapsamında istatistiksel analiz yapmak,</li>
          <li>Kullanıcı destek hizmetlerini sunmak,</li>
          <li>Yasal yükümlülükleri yerine getirmek.</li>
        </ul>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          4. Kişisel Verilerin Aktarımı
        </h2>
        <p>
          bideben, kişisel verilerinizi yalnızca hizmetin sağlanması için gerekli
          olduğu durumlarda, kanunen yetkili kurumlar ve hizmet sağlayıcılarıyla
          paylaşabilir. Bu aktarım Türkiye içinde veya yurtdışında bulunan
          bulut tabanlı sistemler (örneğin Firebase, Vercel, Google) aracılığıyla
          yapılabilir.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebep
        </h2>
        <p>
          Kişisel verileriniz; web sitesi üzerindeki formlar, üyelik işlemleri,
          dijital eser satın alımı ve giriş yöntemleri (Google, Facebook vb.)
          aracılığıyla elektronik ortamda toplanmaktadır. Bu veriler, KVKK madde
          5 ve 6 uyarınca sözleşmenin ifası, hukuki yükümlülüklerin yerine
          getirilmesi ve meşru menfaat kapsamında işlenmektedir.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          6. Kişisel Verilerin Saklanma Süresi
        </h2>
        <p>
          bideben, kişisel verileri yalnızca işlenme amacının gerektirdiği süre
          boyunca saklar. Kullanıcı hesabının silinmesi talep edildiğinde, ilgili
          veriler en geç 30 gün içinde sistemden kalıcı olarak kaldırılır.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          7. Kullanıcının Hakları (KVKK Madde 11)
        </h2>
        <p>Kullanıcı, KVKK kapsamında aşağıdaki haklara sahiptir:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme,</li>
          <li>Silinmesini veya anonimleştirilmesini talep etme,</li>
          <li>Yasal şartlar dahilinde verilerin aktarımını kısıtlama hakkı.</li>
        </ul>
        <p>
          Bu talepler,{" "}
          <strong className="text-yellow-400">destek@bideben.com</strong>{" "}
          adresine e-posta gönderilerek iletilebilir.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          8. Sorumluluk Reddi
        </h2>
        <p>
          bideben, kullanıcı verilerinin korunması için gerekli tüm teknik ve
          idari önlemleri almakla birlikte, internet altyapısından veya üçüncü
          taraf sistemlerden kaynaklanan veri sızıntılarından sorumlu tutulamaz.
          Kullanıcı, verilerini kendi sorumluluğunda paylaştığını kabul eder.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          9. Değişiklik Hakkı
        </h2>
        <p>
          bideben, işbu Aydınlatma Metni’ni güncelleme hakkını saklı tutar.
          Güncellenen metin, <strong>bideben.com</strong> adresinde yayınlandığı
          tarihte yürürlüğe girer.
        </p>

        <p className="mt-10 text-xs text-gray-500 text-center">
          Son güncelleme tarihi: {new Date().toLocaleDateString("tr-TR")}
        </p>
      </section>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}
