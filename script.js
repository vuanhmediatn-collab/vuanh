const CONTENT_PATHS = {
  homepage: "content/homepage.json",
  products: "content/products.json",
  settings: "content/settings.json",
};

const FALLBACK_CONTENT = {
  homepage: {
    hero: {
      eyebrow: "VŨ ANH MEDIA",
      headline:
        "NỘI DUNG CẦN\nĐƯỢC XÂY DỰNG\nNHƯ MỘT HỆ THỐNG\nVẬN HÀNH\nCHUYÊN NGHIỆP,\nBÀI BẢN,\nKHÔNG NGẮN HẠN",
      subtexts: [
        "Nhiều doanh nghiệp có hình ảnh đẹp nhưng quá trình sản xuất lại phụ thuộc vào từng thời điểm, từng con người và từng cảm hứng ngắn hạn.",
        "VŨ ANH MEDIA xây dựng quy trình sản xuất rõ ràng hơn để đội ngũ có thể duy trì nội dung đều, phối hợp dễ và sử dụng được lâu hơn về sau.",
      ],
      ctaPrimary: {
        label: "Trao đổi cùng VŨ ANH MEDIA",
        url: "#contact",
      },
      ctaSecondary: {
        label: "Xem cách chúng tôi làm việc",
        url: "#process",
      },
      proofPoints: [
        "Việc cần quay được chốt sớm",
        "Người duyệt nhìn đúng bản",
        "Tư liệu dễ dùng lại",
      ],
      visual: {
        image: "assets/hero/hero-main.jpg",
        alt: "Không gian làm việc production với máy quay, ánh sáng và màn hình hậu kỳ",
        captionLabel: "Bàn sản xuất",
        captionText: "Shotlist, ánh sáng và bản dựng đi cùng một hướng",
      },
      cards: [
        {
          number: "01",
          title: "Trước ngày quay",
          description: "Mục tiêu, bối cảnh và người duyệt được làm rõ trước ngày quay.",
        },
        {
          number: "02",
          title: "Trong ngày quay",
          description: "Ánh sáng, âm thanh, khung hình và dữ liệu được giữ chặt trên set.",
        },
        {
          number: "03",
          title: "Sau bàn giao",
          description: "Bản cuối, bản rút gọn và tư liệu gốc được đặt đúng phiên bản.",
        },
      ],
    },
    capabilities: ["Thẩm mỹ", "Nha khoa", "Sản phẩm", "Doanh nghiệp", "Đào tạo"],
    whyChoose: {
      eyebrow: "Vì sao chọn",
      headline:
        "MỘT VIDEO ĐẸP,\nKHÔNG KHÓ BẰNG VIỆC\nDUY TRÌ CHẤT LƯỢNG ĐỀU\nTRONG NHIỀU THÁNG,\nVÀ CÓ HIỆU QUẢ CAO",
      paragraphs: [
        "Điều doanh nghiệp cần về lâu dài không chỉ là vài sản phẩm nổi bật.",
        "Mà là một cách làm việc giúp hình ảnh, nội dung và đội ngũ có thể phối hợp ổn định theo thời gian.",
      ],
      cards: [
        {
          number: "01",
          title: "Rõ việc trước khi quay",
          description: "Làm rõ nội dung phục vụ việc gì, nói với ai và phần tư liệu nào cần giữ lại.",
        },
        {
          number: "02",
          title: "Phối hợp có nhịp",
          description:
            "Lịch quay, shotlist, vai trò, mốc duyệt và phản hồi được thống nhất trước khi vào việc.",
        },
        {
          number: "03",
          title: "Giữ chuẩn qua từng lần",
          description:
            "Khung hình, màu sắc, âm thanh và nhịp dựng được giữ cùng một chuẩn qua nhiều lần sản xuất.",
        },
        {
          number: "04",
          title: "Làm lâu không mất nhịp",
          description:
            "Giữ lại kinh nghiệm sau mỗi lần làm việc để lần sau chuẩn bị nhanh hơn và ít hao sức hơn.",
        },
      ],
    },
    servicesSection: {
      eyebrow: "Dịch vụ",
      headline:
        "QUY TRÌNH RÕ RÀNG\nGIÚP ĐỘI NGŨ\nKHÔNG PHỤ THUỘC\nVÀO CẢM HỨNG NHẤT THỜI",
      paragraph:
        "Mỗi doanh nghiệp bước vào media ở một thời điểm khác nhau. Có nơi cần một phim ra mắt được làm kỹ. Có nơi cần lịch quay đều. Có đội ngũ chỉ cần sắp lại tư liệu để những gì đã quay không bị bỏ phí.",
      services: [
        {
          number: "01",
          title: "Sản xuất theo dự án",
          description:
            "Phù hợp khi anh/chị cần một bộ hình ảnh được chuẩn bị kỹ trước ngày bấm máy: phim thương hiệu, video sản phẩm, sự kiện, chân dung đội ngũ hoặc bộ ảnh doanh nghiệp.",
          bullets: [
            "Phạm vi và lịch làm việc rõ từ đầu",
            "Shotlist, bối cảnh, nhân sự, thiết bị",
            "Bản cuối đúng kênh sử dụng",
          ],
          featured: false,
        },
        {
          number: "02",
          title: "Nội dung định kỳ",
          description:
            "Dành cho doanh nghiệp cần xuất hiện đều hơn, nhưng không muốn mỗi tháng lại bắt đầu từ một brief mới, một file cũ thất lạc và một cách làm khác.",
          bullets: [
            "Lịch quay và lịch hậu kỳ theo tháng",
            "Khung nội dung lặp lại được mà không cũ",
            "Một đầu mối giữ nhịp sản xuất",
          ],
          featured: true,
        },
        {
          number: "03",
          title: "Sắp xếp lại tư liệu và cách duyệt",
          description:
            "Dành cho đội ngũ đã có nhiều file, nhiều người tham gia và cần cách brief, duyệt, lưu trữ, bàn giao gọn hơn để không thất lạc công sức đã bỏ ra.",
          bullets: [
            "Cách brief và phản hồi rõ hơn",
            "Thư mục, tên file và bản sao lưu gọn hơn",
            "Vai trò rõ trong từng giai đoạn",
          ],
          featured: false,
        },
      ],
    },
    portfolioSection: {
      eyebrow: "Dự án tiêu biểu",
      headline: "KHI QUY TRÌNH\nĐỦ GỌN\nĐỘI NGŨ SẼ CÓ NHIỀU\nTHỜI GIAN HƠN\nCHO CHẤT LƯỢNG",
      paragraph:
        "Một dự án tốt thường bắt đầu bằng một nhu cầu rất cụ thể: ra mắt sản phẩm, ghi lại không gian, làm mới hình ảnh thương hiệu hoặc giữ nhịp nội dung trong một giai đoạn dài.",
      projects: [
        {
          image: "assets/portfolio/project-01.png",
          alt: "Không gian thương hiệu được xử lý bằng ánh sáng điện ảnh",
          kicker: "Không gian thương hiệu / ánh sáng hiện trường",
          title: "Phim giới thiệu không gian",
          description: "Phim chính, ảnh không gian và tư liệu giữ lại cho giai đoạn ra mắt.",
        },
        {
          image: "assets/portfolio/project-02.jpg",
          alt: "Máy quay, monitor và bối cảnh sản xuất video",
          kicker: "Set quay sản phẩm / phim ra mắt",
          title: "Phim ra mắt sản phẩm",
          description: "Video chính, bản rút gọn và phiên bản bàn giao theo từng kênh.",
        },
        {
          image: "assets/portfolio/project-03.png",
          alt: "Sản phẩm được đặt trong ánh sáng tối giản và cao cấp",
          kicker: "Ảnh sản phẩm / chi tiết chất liệu",
          title: "Editorial sản phẩm",
          description: "Ảnh chủ đạo, video ngắn và bộ tư liệu chi tiết để dùng lại.",
        },
      ],
    },
    productsSection: {
      headline: "SẢN PHẨM ĐÃ\nTRIỂN KHAI",
      paragraph:
        "Một số dự án video, hình ảnh và nội dung định kỳ đã được VŨ ANH MEDIA thực hiện cho khách hàng trong các lĩnh vực thẩm mỹ, nha khoa, sản phẩm, sự kiện và đào tạo.",
    },
    processSection: {
      eyebrow: "Quy trình làm việc",
      headline:
        "NHIỀU VẤN ĐỀ\nTRONG MEDIA\nTHƯỜNG ĐẾN TỪ\nNHỮNG THỨ\nKHÔNG ĐƯỢC THỐNG NHẤT\nTỪ ĐẦU",
      paragraph:
        "Quy trình tốt không làm buổi quay cứng lại. Nó chỉ giúp đúng người biết mình cần chuẩn bị gì, duyệt gì, nhận lại gì và phần nào phải được giữ sạch sau khi dự án kết thúc.",
      steps: [
        {
          number: "01",
          title: "Lắng nghe & nhìn bối cảnh",
          description: "Hiểu nhu cầu hiện tại, tình trạng tư liệu đang có và mức độ sẵn sàng của đội ngũ.",
        },
        {
          number: "02",
          title: "Chốt cách làm",
          description: "Thống nhất mục tiêu, định dạng, lịch quay, shotlist, người duyệt và mốc hậu kỳ.",
        },
        {
          number: "03",
          title: "Sản xuất",
          description:
            "Quay/chụp theo kế hoạch, đồng thời giữ đủ khoảng linh hoạt cho những khoảnh khắc thật.",
        },
        {
          number: "04",
          title: "Hậu kỳ",
          description: "Dựng, chỉnh màu, xử lý âm thanh, phụ đề và nhận phản hồi theo từng phiên bản.",
        },
        {
          number: "05",
          title: "Bàn giao & lưu trữ",
          description:
            "Bàn giao bản cuối, tư liệu cần thiết và cấu trúc lưu trữ để sau này không phải hỏi lại.",
        },
      ],
    },
    founderSection: {
      eyebrow: "Về chúng tôi",
      headline:
        "KINH NGHIỆM TRONG MEDIA\nKHÔNG CHỈ NẰM\nỞ VIỆC QUAY ĐẸP\nMÀ Ở CÁCH GIỮ NHỊP\nTOÀN BỘ QUÁ TRÌNH\nHOÀN THIỆN",
      paragraphs: [
        "VŨ ANH MEDIA được xây như một nhóm production thực thụ: ít nói những điều bóng bẩy, dành nhiều sự chú ý cho brief, ngày quay, dữ liệu hiện trường và cách bàn giao sau cùng.",
        "Kinh nghiệm thường nằm ở những việc nhỏ: biết khi nào cần quay thêm một góc, giữ lại âm thanh nền, đặt tên file đúng, hoặc nhắc khách duyệt đúng phiên bản trước khi đi tiếp.",
      ],
      image: "assets/founder/founder-main.png",
      alt: "Founder VŨ ANH MEDIA trong không gian làm việc production",
      metrics: [
        {
          title: "Trước quay",
          description: "Mục tiêu, định dạng và bối cảnh rõ trước ngày sản xuất.",
        },
        {
          title: "Trên set",
          description: "Ánh sáng, âm thanh, khung hình và dữ liệu được giữ chặt.",
        },
        {
          title: "Hậu kỳ",
          description: "Bản dựng, màu, âm thanh và phụ đề đi theo một nhịp.",
        },
        {
          title: "Lưu trữ",
          description: "Bản cuối và tư liệu gốc được sắp để dễ tìm lại.",
        },
      ],
    },
    contactSection: {
      eyebrow: "Liên hệ",
      headline:
        "MỘT CUỘC TRAO ĐỔI NGẮN\nTHƯỜNG GIÚP\nQUÝ DOANH NGHIỆP\nNHÌN RÕ HƠN NHỮNG ĐIỂM\nĐANG GÂY RỐI\nTRONG QUÁ TRÌNH\nLÀM MEDIA",
      paragraph:
        "VŨ ANH MEDIA sẽ lắng nghe nhu cầu hiện tại của doanh nghiệp anh/chị trước khi đề xuất cách làm. Một dự án riêng, một lịch quay định kỳ hay một kho tư liệu cần sắp lại đều nên bắt đầu từ đúng bối cảnh kinh doanh.",
      buttonLabel: "Gửi yêu cầu tư vấn",
      formNote:
        "Chúng tôi sẽ phản hồi với sự chuẩn bị kỹ lưỡng và tôn trọng thời gian của anh/chị.",
    },
  },
  products: {
    products: [
      {
        visible: true,
        category: "video",
        title: "Phim giới thiệu phòng khám",
        description: "Khung hình sạch, nhịp dựng gọn cho kênh số.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-01.jpg",
        thumbnailAlt: "Thumbnail phim giới thiệu phòng khám",
        videoUrl: "#",
      },
      {
        visible: true,
        category: "video",
        title: "Video ra mắt sản phẩm",
        description: "Tập trung chất liệu, chuyển động và phiên bản ngắn.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-02.jpg",
        thumbnailAlt: "Thumbnail video ra mắt sản phẩm",
        videoUrl: "#",
      },
      {
        visible: true,
        category: "video",
        title: "Tư liệu sự kiện đào tạo",
        description: "Ghi hình diễn biến chính để dùng lại sau chương trình.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-03.jpg",
        thumbnailAlt: "Thumbnail tư liệu sự kiện đào tạo",
        videoUrl: "#",
      },
      {
        visible: true,
        category: "image",
        title: "Bộ ảnh không gian thẩm mỹ",
        description: "Ánh sáng mềm, bố cục giữ đúng tinh thần thương hiệu.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-04.jpg",
        thumbnailAlt: "Bộ ảnh không gian thẩm mỹ",
        videoUrl: "",
      },
      {
        visible: true,
        category: "image",
        title: "Ảnh sản phẩm cao cấp",
        description: "Chi tiết bề mặt, màu sắc và form dáng được giữ rõ.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-05.jpg",
        thumbnailAlt: "Ảnh sản phẩm cao cấp",
        videoUrl: "",
      },
      {
        visible: true,
        category: "image",
        title: "Chân dung đội ngũ nha khoa",
        description: "Hình ảnh chỉn chu cho hồ sơ, website và nội dung.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-06.jpg",
        thumbnailAlt: "Chân dung đội ngũ nha khoa",
        videoUrl: "",
      },
      {
        visible: true,
        category: "regular",
        title: "Lịch nội dung phòng khám",
        description: "Một nhịp quay định kỳ cho nhiều kênh sử dụng.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-07.jpg",
        thumbnailAlt: "Lịch nội dung phòng khám",
        videoUrl: "",
      },
      {
        visible: true,
        category: "regular",
        title: "Nội dung tháng cho thương hiệu",
        description: "Giữ chất lượng đều mà không phải bắt đầu lại từ đầu.",
        client: "",
        year: "",
        thumbnail: "assets/products/product-08.jpg",
        thumbnailAlt: "Nội dung tháng cho thương hiệu",
        videoUrl: "",
      },
    ],
  },
  settings: {
    brand: {
      name: "VŨ ANH MEDIA",
      tagline: "MEDIA PRODUCTION & OPERATIONS",
      logo: "assets/logo-main.png",
    },
    contact: {
      email: "hello@vuanhmedia.vn",
      phone: "",
      address: "",
    },
    socialLinks: [
      {
        label: "Facebook",
        url: "",
      },
      {
        label: "YouTube",
        url: "",
      },
    ],
    cta: {
      navText: "Tư vấn dự án",
    },
    footer: {
      description: "Hình ảnh chỉn chu, tư liệu gọn gàng cho doanh nghiệp của anh/chị.",
    },
  },
};

const CATEGORY_LABELS = {
  video: "VIDEO",
  image: "HÌNH ẢNH",
  regular: "KHÁCH HÀNG THƯỜNG XUYÊN",
};

const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const navToggle = document.querySelector(".nav-toggle");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let contactEmail = FALLBACK_CONTENT.settings.contact.email;

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeContent(base, override) {
  if (Array.isArray(override)) return override;
  if (!isPlainObject(override)) return override ?? base;

  const output = isPlainObject(base) ? { ...base } : {};
  Object.entries(override).forEach(([key, value]) => {
    output[key] = mergeContent(output[key], value);
  });
  return output;
}

async function loadJson(path) {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Cannot load ${path}: ${response.status}`);
  }
  return response.json();
}

async function loadSiteContent() {
  const [homepage, products, settings] = await Promise.all([
    loadJson(CONTENT_PATHS.homepage).catch(() => null),
    loadJson(CONTENT_PATHS.products).catch(() => null),
    loadJson(CONTENT_PATHS.settings).catch(() => null),
  ]);

  return mergeContent(FALLBACK_CONTENT, {
    homepage: homepage || {},
    products: products || {},
    settings: settings || {},
  });
}

function toText(value) {
  return value == null ? "" : String(value);
}

function nonEmpty(value, fallback = "") {
  const text = toText(value).trim();
  return text || fallback;
}

function textList(value) {
  if (Array.isArray(value)) {
    return value.map((item) => nonEmpty(item)).filter(Boolean);
  }

  const text = nonEmpty(value);
  return text ? [text] : [];
}

function headlineLines(value) {
  return nonEmpty(value)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function safeUrl(value, fallback = "#") {
  const url = nonEmpty(value, fallback);
  if (/^(https?:|mailto:|tel:|#|\/|\.\/|\.\.\/|[a-z0-9_-]+\/)/i.test(url)) {
    return url;
  }
  return fallback;
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = nonEmpty(value);
  });
}

function setLink(selector, item) {
  const link = document.querySelector(selector);
  if (!link || !item) return;
  link.textContent = nonEmpty(item.label, link.textContent);
  link.setAttribute("href", safeUrl(item.url, link.getAttribute("href") || "#"));
}

function setImage(selector, image, alt) {
  const target = document.querySelector(selector);
  if (!target) return;
  if (nonEmpty(image)) target.setAttribute("src", safeUrl(image, target.getAttribute("src") || ""));
  target.setAttribute("alt", toText(alt));
}

function renderHeadline(selector, value, options = {}) {
  const target = document.querySelector(selector);
  if (!target) return;

  target.replaceChildren();

  headlineLines(value).forEach((line, index) => {
    const span = document.createElement("span");
    span.className = "headline-line";
    span.textContent = line;

    if (options.hero) {
      span.style.animationDelay = `${320 + index * 90}ms`;
    }

    target.append(span);
  });
}

function renderParagraphs(containerSelector, paragraphs) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.replaceChildren(
    ...textList(paragraphs).map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    })
  );
}

function renderHero(hero) {
  setText(".hero .eyebrow", hero.eyebrow);
  renderHeadline(".hero-title", hero.headline, { hero: true });

  const ledeGroup = document.querySelector(".hero-copy .hero-lede-group");
  if (ledeGroup) {
    ledeGroup.replaceChildren(
      ...textList(hero.subtexts).map((paragraph, index) => {
        const element = document.createElement("p");
        element.className = `hero-lede${index === 1 ? " hero-lede-secondary" : ""}`;
        element.textContent = paragraph;
        return element;
      })
    );
  }

  setLink(".hero-actions .button-primary", hero.ctaPrimary);
  setLink(".hero-actions .button-secondary", hero.ctaSecondary);

  const proof = document.querySelector(".hero-proof");
  if (proof) {
    proof.replaceChildren(
      ...textList(hero.proofPoints).map((item) => {
        const span = document.createElement("span");
        span.textContent = item;
        return span;
      })
    );
  }

  setImage(".cinema-frame img", hero.visual?.image, hero.visual?.alt);
  setText(".frame-caption span", hero.visual?.captionLabel);
  setText(".frame-caption strong", hero.visual?.captionText);

  const cardContainer = document.querySelector(".hero-visual");
  const existingCards = cardContainer ? Array.from(cardContainer.querySelectorAll(".hero-card")) : [];
  existingCards.forEach((card) => card.remove());

  if (cardContainer) {
    const cardClasses = ["hero-card-one", "hero-card-two", "hero-card-three"];
    (hero.cards || []).slice(0, 3).forEach((card, index) => {
      const article = document.createElement("div");
      article.className = `hero-card ${cardClasses[index] || ""}`.trim();
      const number = document.createElement("span");
      number.textContent = nonEmpty(card.number, String(index + 1).padStart(2, "0"));
      const title = document.createElement("strong");
      title.textContent = nonEmpty(card.title);
      const description = document.createElement("p");
      description.textContent = nonEmpty(card.description);
      article.append(number, title, description);
      cardContainer.append(article);
    });
  }
}

function renderCapabilities(capabilities) {
  const container = document.querySelector(".capability-inner");
  if (!container) return;
  container.replaceChildren(
    ...textList(capabilities).map((item) => {
      const span = document.createElement("span");
      span.textContent = item;
      return span;
    })
  );
}

function renderWhyChoose(section) {
  setText(".philosophy-section .eyebrow", section.eyebrow);
  renderHeadline(".section-title--why", section.headline);
  renderParagraphs(".philosophy-copy", section.paragraphs);

  const grid = document.querySelector(".principle-grid");
  if (!grid) return;

  grid.replaceChildren(
    ...(section.cards || []).map((card, index) => {
      const article = document.createElement("article");
      article.className = "glass-card principle-card";
      const number = document.createElement("span");
      number.className = "principle-number";
      number.textContent = nonEmpty(card.number, String(index + 1).padStart(2, "0"));
      const title = document.createElement("h3");
      title.textContent = nonEmpty(card.title);
      const description = document.createElement("p");
      description.textContent = nonEmpty(card.description);
      article.append(number, title, description);
      return article;
    })
  );
}

function renderServices(section) {
  setText(".services-section .eyebrow", section.eyebrow);
  renderHeadline(".section-title--services", section.headline);
  setText(".services-section .section-heading.split > p", section.paragraph);

  const list = document.querySelector(".service-list");
  if (!list) return;

  list.replaceChildren(
    ...(section.services || []).map((service, index) => {
      const article = document.createElement("article");
      article.className = `service-row${service.featured ? " service-row-featured" : ""}`;

      const number = nonEmpty(service.number, String(index + 1).padStart(2, "0"));
      const numberElement = document.createElement("span");
      numberElement.dataset.number = number;
      numberElement.textContent = number;

      const content = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = nonEmpty(service.title);
      const description = document.createElement("p");
      description.textContent = nonEmpty(service.description);
      content.append(title, description);

      const bullets = document.createElement("ul");
      textList(service.bullets).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        bullets.append(li);
      });

      article.append(numberElement, content, bullets);
      return article;
    })
  );
}

function renderPortfolio(section) {
  setText(".portfolio-intro .eyebrow", section.eyebrow);
  renderHeadline(".section-title--portfolio", section.headline);
  setText(".portfolio-intro p:not(.eyebrow)", section.paragraph);

  const grid = document.querySelector(".project-grid");
  if (!grid) return;

  grid.replaceChildren(
    ...(section.projects || []).map((project) => {
      const article = document.createElement("article");
      article.className = "project-card";

      const media = document.createElement("div");
      media.className = "project-media";
      const image = document.createElement("img");
      image.src = safeUrl(project.image, "");
      image.alt = toText(project.alt);
      media.append(image);

      const content = document.createElement("div");
      content.className = "project-content";
      const kicker = document.createElement("span");
      kicker.textContent = nonEmpty(project.kicker);
      const title = document.createElement("h3");
      title.textContent = nonEmpty(project.title);
      const description = document.createElement("p");
      description.textContent = nonEmpty(project.description);
      content.append(kicker, title, description);

      article.append(media, content);
      return article;
    })
  );
}

function renderProductsIntro(section) {
  renderHeadline(".section-title--products", section.headline);
  setText(".product-intro p", section.paragraph);
}

function renderProducts(productsData) {
  const grid = document.querySelector("[data-products-grid]");
  if (!grid) return;

  const products = Array.isArray(productsData.products) ? productsData.products : [];
  const visibleProducts = products.filter((product) => product && product.visible !== false);

  grid.replaceChildren(
    ...visibleProducts.map((product) => {
      const category = nonEmpty(product.category, "video");
      const article = document.createElement("article");
      article.className = "product-card";
      article.dataset.productCategory = category;

      const media = document.createElement("div");
      media.className = "product-media";
      const image = document.createElement("img");
      image.src = safeUrl(product.thumbnail, "");
      image.alt = toText(product.thumbnailAlt || product.title);
      image.loading = "lazy";
      media.append(image);

      const content = document.createElement("div");
      content.className = "product-content";

      const label = document.createElement("span");
      label.className = "product-category";
      label.textContent = CATEGORY_LABELS[category] || category.toUpperCase();

      const title = document.createElement("h3");
      title.textContent = nonEmpty(product.title);

      const description = document.createElement("p");
      description.textContent = nonEmpty(product.description);

      content.append(label, title, description);

      const metaItems = [product.client, product.year].map((item) => nonEmpty(item)).filter(Boolean);
      if (metaItems.length) {
        const meta = document.createElement("span");
        meta.className = "product-meta";
        meta.textContent = metaItems.join(" / ");
        content.append(meta);
      }

      if (category === "video" && nonEmpty(product.videoUrl)) {
        const link = document.createElement("a");
        link.className = "product-video-link";
        link.href = safeUrl(product.videoUrl, "#");
        link.textContent = "Xem video";
        content.append(link);
      }

      article.append(media, content);
      return article;
    })
  );
}

function renderProcess(section) {
  setText(".process-section .eyebrow", section.eyebrow);
  renderHeadline(".section-title--process", section.headline);
  setText(".process-layout .section-heading p:not(.eyebrow)", section.paragraph);

  const list = document.querySelector(".process-timeline");
  if (!list) return;

  list.replaceChildren(
    ...(section.steps || []).map((step, index) => {
      const item = document.createElement("li");
      const number = document.createElement("span");
      number.textContent = nonEmpty(step.number, String(index + 1).padStart(2, "0"));
      const title = document.createElement("h3");
      title.textContent = nonEmpty(step.title);
      const description = document.createElement("p");
      description.textContent = nonEmpty(step.description);
      item.append(number, title, description);
      return item;
    })
  );
}

function renderFounder(section) {
  setText(".founder-copy .eyebrow", section.eyebrow);
  renderHeadline(".section-title--founder", section.headline);
  setImage(".founder-image img", section.image, section.alt);

  const copy = document.querySelector(".founder-copy");
  const metrics = document.querySelector(".founder-metrics");
  if (copy && metrics) {
    Array.from(copy.querySelectorAll(":scope > p:not(.eyebrow)")).forEach((paragraph) =>
      paragraph.remove()
    );
    textList(section.paragraphs).forEach((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      copy.insertBefore(element, metrics);
    });
  }

  if (metrics) {
    metrics.replaceChildren(
      ...(section.metrics || []).map((metric) => {
        const item = document.createElement("span");
        const title = document.createElement("strong");
        title.textContent = nonEmpty(metric.title);
        item.append(title, document.createTextNode(nonEmpty(metric.description)));
        return item;
      })
    );
  }
}

function renderContact(section) {
  setText(".contact-copy .eyebrow", section.eyebrow);
  renderHeadline(".section-title--cta", section.headline);
  setText(".contact-copy p:not(.eyebrow)", section.paragraph);
  setText(".contact-form button[type='submit']", section.buttonLabel);
  setText("[data-form-note]", section.formNote);
}

function renderSettings(settings) {
  contactEmail = nonEmpty(settings.contact?.email, contactEmail);

  document.querySelectorAll(".brand-logo, .footer-brand img").forEach((image) => {
    image.src = safeUrl(settings.brand?.logo, image.getAttribute("src") || "");
    image.alt = "";
  });

  setText(".brand-name, .footer-brand span", settings.brand?.name);
  setText(".brand-line", settings.brand?.tagline);
  setText(".nav-cta", settings.cta?.navText);
  setText("[data-footer-description]", settings.footer?.description);

  const footerContact = document.querySelector("[data-footer-contact]");
  if (footerContact) {
    const contactItems = [settings.contact?.phone, settings.contact?.address]
      .map((item) => nonEmpty(item))
      .filter(Boolean);
    footerContact.textContent = contactItems.join(" · ");
    footerContact.hidden = contactItems.length === 0;
  }

  const footerSocial = document.querySelector("[data-footer-social]");
  if (footerSocial) {
    footerSocial.replaceChildren();
    (settings.socialLinks || [])
      .filter((item) => nonEmpty(item.label) && nonEmpty(item.url))
      .forEach((item) => {
        const link = document.createElement("a");
        link.href = safeUrl(item.url, "#");
        link.textContent = item.label;
        link.rel = "noopener";
        link.target = "_blank";
        footerSocial.append(link);
      });
    footerSocial.hidden = footerSocial.children.length === 0;
  }
}

function renderSite(content) {
  renderSettings(content.settings);
  renderHero(content.homepage.hero);
  renderCapabilities(content.homepage.capabilities);
  renderWhyChoose(content.homepage.whyChoose);
  renderServices(content.homepage.servicesSection);
  renderPortfolio(content.homepage.portfolioSection);
  renderProductsIntro(content.homepage.productsSection);
  renderProducts(content.products);
  renderProcess(content.homepage.processSection);
  renderFounder(content.homepage.founderSection);
  renderContact(content.homepage.contactSection);
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNav() {
  if (!nav || !navToggle) return;
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const company = String(formData.get("company") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const need = String(formData.get("need") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Trao đổi dự án media - ${company || "Doanh nghiệp"}`;
    const body = [
      "Xin chào VŨ ANH MEDIA,",
      "",
      "Doanh nghiệp muốn đặt lịch trao đổi về dự án media.",
      "",
      `Tên doanh nghiệp: ${company}`,
      `Người liên hệ: ${name}`,
      `Email / số điện thoại: ${contact}`,
      `Nhu cầu hiện tại: ${need}`,
      "",
      "Mô tả ngắn:",
      message || "Chưa cung cấp.",
    ].join("\n");

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    if (formNote) {
      formNote.textContent =
        "Email đã được tạo từ nội dung brief. Vui lòng kiểm tra ứng dụng email mặc định.";
    }
  });
}

function getProductFilterButtons() {
  return Array.from(document.querySelectorAll("[data-products-filter]"));
}

function applyProductFilter(filter) {
  const buttons = getProductFilterButtons();
  const cards = Array.from(document.querySelectorAll("[data-product-category]"));

  buttons.forEach((button) => {
    const isActive = (button.dataset.productsFilter || "all") === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  cards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.productCategory === filter;
    card.hidden = !shouldShow;
  });
}

function setupProductFilters() {
  const buttons = getProductFilterButtons();
  if (!buttons.length) return;

  buttons.forEach((button) => {
    if (button.dataset.filterBound === "true") return;
    button.dataset.filterBound = "true";
    button.addEventListener("click", () => {
      applyProductFilter(button.dataset.productsFilter || "all");
    });
  });

  const activeButton = buttons.find((button) => button.classList.contains("is-active"));
  applyProductFilter(activeButton?.dataset.productsFilter || "all");
}

function setupScrollReveal() {
  if (prefersReducedMotion.matches) return;

  const revealSelectors = [
    ".capability-band",
    ".philosophy-grid",
    ".principle-card",
    ".services-section .section-heading",
    ".service-row",
    ".portfolio-intro",
    ".project-card",
    ".product-intro",
    ".product-toolbar",
    ".product-card",
    ".process-layout .section-heading",
    ".process-timeline li",
    ".founder-image",
    ".founder-copy",
    ".founder-metrics span",
    ".contact-box",
  ];

  const revealItems = revealSelectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  if (!revealItems.length) return;

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealItems.forEach((item, index) => {
    if (item.classList.contains("is-visible")) return;
    const delay = item.matches(".contact-box") ? 180 : Math.min((index % 4) * 90, 270);
    item.classList.add("reveal");
    item.style.setProperty("--reveal-delay", `${delay}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.16,
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

async function initContent() {
  const content = await loadSiteContent();
  renderSite(content);
  setupProductFilters();
  setupScrollReveal();
}

setHeaderState();
setupProductFilters();
initContent();
window.addEventListener("scroll", setHeaderState, { passive: true });
