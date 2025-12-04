// client/src/modules/guest/Home.jsx
import { motion } from "framer-motion";
import Slide from "../../components/Slide";

// Animasi umum (reusable variants)
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* ================= HERO SECTION (SLIDER) ================= */}
      <Slide />

      {/* ================= TENTANG RUMAHKU KONSTRUKSI ================= */}
      <section className="py-24 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-heading-l-bold mb-6 text-primary-main"
            variants={fadeUp}
          >
            Tentang RumahKu Konstruksi
          </motion.h2>
          <motion.p
            className="text-l-regular text-neutral-90 max-w-4xl mx-auto"
            variants={fadeUp}
            custom={1}
          >
            <strong>RumahKu Konstruksi</strong> adalah platform digital yang
            mempermudah proses pembangunan rumah dan proyek konstruksi modern.
            Kami hadir untuk menjembatani <strong>konsumen</strong>,
            <strong> mandor</strong>, dan <strong>pengawas proyek</strong> agar
            dapat berkolaborasi dengan efisien, transparan, dan profesional.
            <br />
            <br />
            Melalui sistem berbasis teknologi, setiap tahapan proyek dapat
            dipantau secara <strong>real-time</strong>, mulai dari desain,
            perencanaan, pembelian material, hingga penyelesaian akhir.
            Tujuannya adalah memastikan proyek Anda berjalan
            <strong> tepat waktu</strong>, <strong>sesuai anggaran</strong>, dan
            <strong> bebas stres</strong>.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= FITUR UNGGULAN ================= */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-heading-l-bold mb-12 text-primary-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Fitur Unggulan Kami
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cari & Hubungkan",
                desc: "Temukan mandor, tukang, dan pengawas proyek terpercaya di sekitar Anda hanya dengan beberapa klik.",
                icon: "🔍",
              },
              {
                title: "Kelola Proyek",
                desc: "Pantau progres pembangunan, laporan harian, jadwal, dan anggaran dalam satu dasbor terpadu.",
                icon: "📅",
              },
              {
                title: "Kolaborasi Mudah",
                desc: "Komunikasi antar tim proyek jadi lebih efisien tanpa perlu berpindah aplikasi — semua di satu tempat.",
                icon: "💬",
              },
              {
                title: "Transparansi Biaya",
                desc: "Setiap pengeluaran tercatat otomatis, sehingga Anda tahu ke mana setiap rupiah digunakan.",
                icon: "📈",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index * 0.3}
              >
                <div className="text-display mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-heading-s-bold mb-3 text-primary-main">
                  {item.title}
                </h3>
                <p className="text-l-regular text-neutral-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PERANCANGAN DAN PERENCANAAN ================= */}
      <section className="bg-primary-surface py-24 border-t border-primary-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <motion.img
            src="https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=703&auto=format&fit=crop"
            alt="Perancangan dan Perencanaan"
            className="max-w-sm w-full rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-heading-l-bold text-primary-main mb-4">
              Perancangan dan Perencanaan
            </h2>
            <p className="text-l-regular text-neutral-90">
              Semua proyek besar dimulai dari perencanaan yang baik. Kami
              membantu Anda dalam setiap langkah — mulai dari desain arsitektur,
              analisa kebutuhan, hingga perhitungan biaya material. Dengan tim
              profesional dan pendekatan sistematis, hasil rancangan
              mencerminkan gaya hidup Anda sekaligus efisien secara fungsional.
              <br />
              <br />
              Kami juga menyediakan simulasi 3D agar Anda dapat melihat hasil
              akhir bangunan sebelum pembangunan dimulai. Setiap detail
              dipertimbangkan: dari tata ruang, pencahayaan alami, hingga
              sirkulasi udara — memastikan rumah Anda nyaman, estetis, dan tahan
              lama.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= IMPLEMENTASI ================= */}
      <section className="bg-white py-24 border-t border-teal-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop"
            alt="Implementasi Perancangan"
            className="max-w-sm w-full rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-heading-l-bold text-primary-main mb-4">
              Implementasi dan Pengawasan Lapangan
            </h2>
            <p className="text-l-regular text-neutral-90">
              Setelah desain disetujui, tim kami mengawal implementasi di
              lapangan. Anda tidak perlu khawatir soal keterlambatan, kualitas,
              atau pemborosan — semuanya dikontrol dengan sistem pemantauan
              kami.
              <br />
              <br />
              Setiap progres, dokumentasi, dan laporan harian dapat diakses
              kapan pun. Dengan begitu, proses pembangunan menjadi lebih aman,
              transparan, dan efisien — memastikan hasil akhir sesuai dengan
              harapan Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PENUTUP / AJAKAN ================= */}
      <motion.section
        className="py-24 px-6 bg-primary-main text-neutral-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-heading-l-bold text-neutral-10 mb-6">
            Siap Mewujudkan Proyek Impian Anda?
          </h2>
          <p className="text-l-regular text-neutral-40">
            Dengan RumahKu Konstruksi, Anda tidak hanya membangun rumah — tetapi
            juga membangun pengalaman yang lebih baik dalam setiap langkahnya.
            Kami menghadirkan solusi menyeluruh untuk perencanaan, implementasi,
            dan pengawasan proyek agar semua berjalan lancar, transparan, dan
            terukur.
            <br />
            <br />
            Mulailah perjalanan Anda bersama kami hari ini, dan rasakan
            bagaimana teknologi membuat proses konstruksi lebih mudah dan
            menyenangkan.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
