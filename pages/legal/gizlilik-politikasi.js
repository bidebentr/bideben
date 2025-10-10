import Link from "next/link";
import Footer from "@/components/Footer";

export default function GizlilikPolitikasi() {
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
        Gizlilik Politikası
      </h1>

      <section className="space-y-6 text-sm">
        <p>
          İşbu Gizlilik Politikası, <strong>bideben.com</strong> web sitesi
          (“<strong>bideben</strong>”) üzerinden sunulan hizmetlerin kullanımı
          sırasında kullanıcıların paylaştığı kişisel verilerin toplanması,
          kullanılması, saklanması ve korunması esaslarını açıklamaktadır.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          1. Toplanan Bilgiler
        </h2>
        <p>
          bideben, kullanıcıdan yalnızca hizmetin sunulabilmesi için gerekli
          bilgileri toplar. Bu bilgiler şunları içerebilir:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Ad, soyad ve e-posta adresi</li>
          <li>Google veya Facebook hesabı üzerinden alınan temel profil bilgileri</li>
          <li>Satın alınan dijital eserlerin işlem kayıtları</li>
          <li>İletişim formları aracılığıyla paylaşılan mesaj veya içerikler</li>
          <li>Site trafiği analizinde kullanılan çerez (cookie) verileri</li>
        </ul>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          2. Kişisel Verilerin Kullanım Amacı
        </h2>
        <p>Toplanan kişisel veriler aşağıdaki amaçlarla işlenmektedir:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Kullanıcı hesabı oluşturmak ve giriş işlemlerini yönetmek,</li>
          <li>Dijital eser satışını gerçekleştirmek ve e-posta ile teslim etmek,</li>
          <li>Topluluk Katkı Sistemi’ne ait istatistiksel bilgileri analiz etmek,</li>
          <li>Kullanıcı deneyimini geliştirmek ve teknik destek sağlamak,</li>
          <li>Yasal yükümlülükleri yerine getirmek.</li>
        </ul>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          3. Veri Saklama Süresi
        </h2>
        <p>
          bideben, kullanıcı verilerini yalnızca hizmetin yürütülmesi için gerekli
          süre boyunca saklar. Kullanıcı talep ettiğinde, hesabı ve ilgili tüm
          kişisel veriler kalıcı olarak silinir.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          4. Üçüncü Taraf Hizmetler
        </h2>
        <p>
          bideben, kimlik doğrulama, analiz veya depolama işlemleri için bazı
          üçüncü taraf servislerden yararlanabilir (örneğin Google, Facebook,
          Firebase, Vercel vb.). Bu hizmetler, kendi gizlilik politikalarına
          tabidir.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          5. Çerez (Cookie) Kullanımı
        </h2>
        <p>
          Site, kullanıcı deneyimini geliştirmek için çerezler (cookies)
          kullanmaktadır. Kullanıcı dilerse tarayıcı ayarları üzerinden çerezleri
          reddedebilir veya silebilir. Ancak bu durumda sitenin bazı
          özelliklerinden tam olarak faydalanılamayabilir.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          6. Veri Güvenliği
        </h2>
        <p>
          bideben, kullanıcı bilgilerinin güvenliğini sağlamak için uygun teknik
          ve idari önlemleri almaktadır. Ancak internet üzerinden yapılan
          veri iletimlerinin tamamen güvenli olacağı garanti edilemez. Kullanıcı,
          kişisel verilerini kendi sorumluluğunda paylaştığını kabul eder.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          7. Topluluk Ödülleri Sistemi
        </h2>
        <p>
          bideben tarafından sunulan Topluluk Ödülleri Sistemi, kullanıcı
          katkılarına dayalıdır. Bu sistem kapsamında elde edilen dijital veriler
          yalnızca istatistiksel analiz amacıyla kullanılır. bideben, ödül veya
          hediye kazanımı konusunda hiçbir şekilde garanti vermez.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          8. Kullanıcının Hakları
        </h2>
        <p>
          Kullanıcı, KVKK kapsamında kişisel verilerine ilişkin olarak aşağıdaki
          haklara sahiptir:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Kişisel verilerinin işlenip işlenmediğini öğrenme,</li>
          <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
          <li>Yanlış veya eksik işlenmiş verilerin düzeltilmesini isteme,</li>
          <li>Yasal şartlar oluştuğunda kişisel verilerinin silinmesini talep etme.</li>
        </ul>

        <p>
          Bu talepler,{" "}
          <strong className="text-yellow-400">destek@bideben.com</strong>{" "}
          adresine e-posta gönderilerek iletilebilir.
        </p>

        <h2 className="text-yellow-400 text-xl font-semibold mt-8">
          9. Değişiklik Hakkı
        </h2>
        <p>
          bideben, bu Gizlilik Politikası’nı dilediği zaman güncelleme hakkını
          saklı tutar. Güncellenen metin, yayınlandığı tarihten itibaren geçerli
          olur.
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
