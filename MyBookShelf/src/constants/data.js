export const BOOKS = [
  {
    id: "1",
    title: "Clean Code",
    author: "Robert Martin",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "Clean Code, yazılım geliştiricilere daha okunabilir, düzenli ve sürdürülebilir kod yazma alışkanlıkları kazandıran kapsamlı bir rehberdir. Gerçek örneklerle iyi ve kötü kod arasındaki farkı göstererek profesyonel yaklaşım geliştirmenizi sağlar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    favorite: false,
    read: false,
    description:
      "Atomic Habits, küçük alışkanlıkların uzun vadede büyük değişimler yaratabileceğini anlatan bilimsel temelli bir rehberdir. Davranış kalıplarını anlamayı kolaylaştırır ve günlük yaşamda uygulanabilir pratik stratejiler sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "3",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "The Pragmatic Programmer, yazılım geliştiricilere esnek düşünme, doğru karar alma ve projeleri verimli yönetme konularında rehberlik eden klasik bir kaynaktır. Kariyer boyunca sürekli gelişimi teşvik eden pratik öneriler içerir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "4",
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    favorite: false,
    read: false,
    description:
      "Deep Work, dikkat dağıtıcı unsurlardan uzaklaşıp yoğun odaklanma becerisi kazanmanın önemini vurgular. Üretkenliği artırmak ve kaliteli işler ortaya koymak için bilimsel yöntemler ve uygulanabilir stratejiler sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "5",
    title: "The Clean Coder",
    author: "Robert Martin",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "The Clean Coder, profesyonel yazılım geliştiricinin çalışma disiplinini, sorumluluklarını ve etik yaklaşımını ele alır. Kariyer boyunca karşılaşılabilecek zorluklara karşı doğru tutum geliştirmeyi öğreten değerli bir rehberdir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "6",
    title: "The Power of Habit",
    author: "Charles Duhigg",
    category: "Self Development",
    favorite: false,
    read: false,
    description:
      "The Power of Habit, alışkanlıkların nasıl oluştuğunu ve hayatımızı nasıl şekillendirdiğini bilimsel bir bakış açısıyla açıklar. Kötü alışkanlıkları kırmak ve yenilerini oluşturmak için etkili yöntemler sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "7",
    title: "Refactoring",
    author: "Martin Fowler",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "Refactoring, mevcut kodu daha temiz, anlaşılır ve sürdürülebilir hâle getirmek için kullanılan teknikleri detaylı şekilde açıklar. Yazılım kalitesini artırmak isteyen geliştiriciler için vazgeçilmez bir kaynaktır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "8",
    title: "Digital Minimalism",
    author: "Cal Newport",
    category: "Productivity",
    favorite: false,
    read: false,
    description:
      "Digital Minimalism, teknolojiyi bilinçli ve kontrollü kullanmanın önemini vurgular. Dijital dikkat dağınıklığını azaltarak daha odaklı, anlamlı ve üretken bir yaşam sürmek için uygulanabilir yöntemler sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "9",
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    category: "Self Development",
    favorite: false,
    read: false,
    description:
      "Bu kitap, kişisel ve profesyonel hayatta daha etkili olmayı sağlayan yedi temel alışkanlığı açıklar. Değer odaklı yaşam, sorumluluk bilinci ve uzun vadeli başarı için güçlü bir rehber niteliğindedir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "10",
    title: "Introduction to Algorithms",
    author: "CLRS",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "Introduction to Algorithms, algoritmaların temellerini, çalışma mantığını ve uygulama yöntemlerini detaylı şekilde açıklayan kapsamlı bir akademik kaynaktır. Bilgisayar bilimi öğrencileri için temel başvuru kitabıdır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "11",
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "Business",
    favorite: false,
    read: false,
    description:
      "The Lean Startup, girişimlerin hızlı, esnek ve düşük maliyetli şekilde büyümesini sağlayan yöntemleri açıklar. Deneme-yanılma yerine sürekli öğrenme ve hızlı geri bildirim odaklı bir yaklaşım sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "12",
    title: "Thinking Fast and Slow",
    author: "Daniel Kahneman",
    category: "Psychology",
    favorite: false,
    read: false,
    description:
      "Thinking Fast and Slow, insan zihninin hızlı ve yavaş düşünme sistemlerini açıklayan bilimsel bir çalışmadır. Karar verme süreçlerindeki hataları ve bilişsel yanılgıları anlaşılır örneklerle ortaya koyar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "13",
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "Cracking the Coding Interview, teknik mülakatlara hazırlanan yazılımcılar için kapsamlı bir rehberdir. Veri yapıları, algoritmalar ve mülakat stratejileri üzerine yüzlerce örnek soru içerir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "14",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Novel",
    favorite: false,
    read: false,
    description:
      "The Alchemist, kişisel yolculuk, hayallerin peşinden gitme ve içsel dönüşüm üzerine etkileyici bir hikâye sunar. Basit ama derin anlatımıyla okuyucuda kalıcı bir iz bırakır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "15",
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    favorite: false,
    read: false,
    description:
      "Zero to One, yenilikçi düşünme, rekabetten uzaklaşma ve benzersiz değer yaratma üzerine güçlü fikirler sunar. Girişimcilere farklı perspektif kazandıran etkili bir iş kitabıdır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "16",
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    category: "Self Development",
    favorite: false,
    read: false,
    description:
      "The Four Agreements, kişisel özgürlük ve içsel huzur için dört temel prensibi açıklar. Basit ama güçlü öğretileriyle günlük yaşamda daha bilinçli ve dengeli bir yaklaşım sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "17",
    title: "The Art of Computer Programming",
    author: "Donald Knuth",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "Bu klasik eser, bilgisayar biliminin temel yapı taşlarını derinlemesine inceleyen kapsamlı bir kaynaktır. Algoritmaların matematiksel temellerini anlamak isteyenler için vazgeçilmezdir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "18",
    title: "Mindset",
    author: "Carol Dweck",
    category: "Psychology",
    favorite: false,
    read: false,
    description:
      "Mindset, sabit ve gelişim odaklı düşünce yapılarının başarı üzerindeki etkisini açıklar. Kişisel gelişim ve motivasyon için bilimsel temelli güçlü bir bakış açısı sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "19",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "Self Development",
    favorite: false,
    read: false,
    description:
      "Bu kitap, hayatta gerçekten önemli olan şeylere odaklanmayı ve gereksiz yüklerden kurtulmayı öğreten samimi bir rehberdir. Modern yaşamın baskılarına karşı daha sağlıklı bir yaklaşım sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "20",
    title: "Hooked",
    author: "Nir Eyal",
    category: "Business",
    favorite: false,
    read: false,
    description:
      "Hooked, kullanıcıların alışkanlık hâline getirdiği ürünlerin nasıl tasarlandığını açıklayan pratik bir rehberdir. Ürün geliştirme süreçlerinde psikolojik motivasyonları anlamak için etkili bir kaynaktır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "21",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "You Don't Know JS, JavaScript’in derinliklerini anlamak isteyen geliştiriciler için detaylı bir kaynak sunar. Dilin karmaşık yönlerini anlaşılır şekilde açıklayan kapsamlı bir seridir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "22",
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    favorite: false,
    read: false,
    description:
      "Rich Dad Poor Dad, finansal özgürlük, yatırım bilinci ve para yönetimi üzerine güçlü fikirler sunar. Geleneksel düşünce kalıplarını sorgulayan etkili bir kişisel finans rehberidir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "23",
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "Spirituality",
    favorite: false,
    read: false,
    description:
      "The Power of Now, anda kalmanın gücünü ve zihinsel huzuru keşfetmeyi öğreten spiritüel bir rehberdir. Bilinçli farkındalıkla daha dengeli bir yaşam sürmek için pratik öneriler sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "24",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "Design",
    favorite: false,
    read: false,
    description:
      "Bu kitap, günlük nesnelerin tasarımında kullanıcı deneyiminin önemini vurgular. İnsan davranışlarını anlamaya yönelik pratik ve etkili tasarım prensipleri sunar.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "25",
    title: "Algorithms to Live By",
    author: "Brian Christian",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "Algorithms to Live By, bilgisayar algoritmalarının günlük hayatta nasıl uygulanabileceğini eğlenceli ve anlaşılır bir dille açıklar. Karar verme süreçlerini geliştirmek için pratik bir rehberdir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "26",
    title: "Grit",
    author: "Angela Duckworth",
    category: "Psychology",
    favorite: false,
    read: false,
    description:
      "Grit, başarıda yetenekten çok azim ve tutarlılığın belirleyici olduğunu anlatır. Uzun vadeli hedeflere bağlı kalmanın önemini bilimsel araştırmalarla destekleyen etkileyici bir çalışmadır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "27",
    title: "The Millionaire Fastlane",
    author: "MJ DeMarco",
    category: "Business",
    favorite: false,
    read: false,
    description:
      "The Millionaire Fastlane, geleneksel finansal düşünceleri sorgulayan ve hızlı büyüme odaklı bir zenginlik yaklaşımı sunan cesur bir kitaptır. Girişimcilere farklı bir perspektif kazandırır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "28",
    title: "The War of Art",
    author: "Steven Pressfield",
    category: "Creativity",
    favorite: false,
    read: false,
    description:
      "The War of Art, yaratıcı süreçte karşılaşılan içsel engelleri ve direnç duygusunu ele alır. Üretkenliği artırmak ve yaratıcı potansiyeli ortaya çıkarmak için güçlü bir motivasyon kaynağıdır.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "29",
    title: "Soft Skills",
    author: "John Sonmez",
    category: "Software",
    favorite: false,
    read: false,
    description:
      "Soft Skills, yazılım geliştiricilerin teknik becerilerin ötesinde iletişim, zaman yönetimi ve kariyer planlama gibi alanlarda gelişmesini sağlayan kapsamlı bir rehberdir.",
    image: require("../../assets/img/1.jpg"),
  },

  {
    id: "30",
    title: "The Compound Effect",
    author: "Darren Hardy",
    category: "Self Development",
    favorite: false,
    read: false,
    description:
      "The Compound Effect, küçük ama sürekli adımların uzun vadede büyük sonuçlar doğurduğunu anlatır. Başarıyı alışkanlıklar ve disiplin üzerinden açıklayan etkili bir kişisel gelişim kitabıdır.",
    image: require("../../assets/img/1.jpg"),
  },
];
