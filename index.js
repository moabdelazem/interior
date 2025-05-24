let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {
  Armchair: { arabic: "كرسي بذراعين", image: "" },
  "Accent Wall": { arabic: "جدار مميز", image: "" },
  Backsplash: { arabic: "جدار خلفي للمطبخ", image: "" },
  Balcony: { arabic: "شرفة", image: "" },
  Baseboards: { arabic: "ألواح القاعدة", image: "" },
  Bookshelf: { arabic: "رف كتب", image: "" },
  Cabinet: { arabic: "خزانة", image: "" },
  Chandelier: { arabic: "ثريا", image: "" },
  Closet: { arabic: "خزانة ملابس", image: "" },
  "Coffee Table": { arabic: "طاولة قهوة", image: "" },
  "Console Table": { arabic: "طاولة الكونسول", image: "" },
  Curtains: { arabic: "ستائر", image: "" },
  Desk: { arabic: "مكتب", image: "" },
  "Dining Table": { arabic: "طاولة طعام", image: "" },
  Doorknob: { arabic: "مقبض الباب", image: "" },
  Dresser: { arabic: "خزانة الملابس", image: "" },
  "End Table": { arabic: "طاولة جانبية", image: "" },
  Fireplace: { arabic: "موقد", image: "" },
  "Floor Lamp": { arabic: "مصباح أرضي", image: "" },
  Footstool: { arabic: "مسند قدم", image: "" },
  "Gallery Wall": { arabic: "جدار معرض", image: "" },
  Headboard: { arabic: "رأس السرير", image: "" },
  Island: { arabic: "جزيرة المطبخ", image: "" },
  "Jewelry Box": { arabic: "صندوق مجوهرات", image: "" },
  "Kitchen Counter": { arabic: "طاولة المطبخ", image: "" },
  "Lamp Shade": { arabic: "غطاء المصباح", image: "" },
  Loveseat: { arabic: "أريكة صغيرة", image: "" },
  Mirror: { arabic: "مرآة", image: "" },
  Nightstand: { arabic: "طاولة سرير", image: "" },
  Ottoman: { arabic: "مقعد عثماني", image: "" },
  Pantry: { arabic: "مخزن طعام", image: "" },
  "Picture Frame": { arabic: "إطار صورة", image: "" },
  Pillow: { arabic: "وسادة", image: "" },
  Quilt: { arabic: "لحاف", image: "" },
  Rack: { arabic: "رف", image: "" },
  Radiator: { arabic: "مشعاع", image: "" },
  Rug: { arabic: "سجادة", image: "" },
  Shelf: { arabic: "رف", image: "" },
  Sofa: { arabic: "أريكة", image: "" },
  "Table Lamp": { arabic: "مصباح طاولة", image: "" },
  Upholstery: { arabic: "تنجيد", image: "" },
  Vanity: { arabic: "طاولة زينة", image: "" },
  Wardrobe: { arabic: "خزانة ملابس", image: "" },
  "Window Sill": { arabic: "عتبة النافذة", image: "" },
  "Accent Chair": { arabic: "كرسي مميز", image: "" },
  "Bar Stool": { arabic: "كرسي بار", image: "" },
  Bench: { arabic: "مقعد طويل", image: "" },
  Carpet: { arabic: "سجاد", image: "" },
  "Ceiling Fan": { arabic: "مروحة سقف", image: "" },
  "Desk Chair": { arabic: "كرسي مكتب", image: "" },
  Drawer: { arabic: "درج", image: "" },
  "Entertainment Center": { arabic: "مركز ترفيه", image: "" },
  "Floor Tile": { arabic: "بلاط أرضي", image: "" },
  "Glass Door": { arabic: "باب زجاجي", image: "" },
  Hammock: { arabic: "أرجوحة", image: "" },
  "Indoor Plant": { arabic: "نبات داخلي", image: "" },
  "Kitchen Sink": { arabic: "حوض المطبخ", image: "" },
  "Light Switch": { arabic: "مفتاح إضاءة", image: "" },
  "Magazine Rack": { arabic: "حامل مجلات", image: "" },
  Nook: { arabic: "ركن صغير", image: "" },
  "Office Chair": { arabic: "كرسي مكتب", image: "" },
  "Pendant Light": { arabic: "مصباح معلق", image: "" },
  "Queen Bed": { arabic: "سرير كوين", image: "" },
  Recliner: { arabic: "كرسي استرخاء", image: "" },
  "Side Table": { arabic: "طاولة جانبية", image: "" },
  "Track Lighting": { arabic: "إضاءة متتبعة", image: "" },
  "Umbrella Stand": { arabic: "حامل مظلات", image: "" },
  Vase: { arabic: "مزهرية", image: "" },
  "Wall Clock": { arabic: "ساعة حائط", image: "" },
  Xerophyte: { arabic: "نبات صحراوي", image: "" },
  "Yard Furniture": { arabic: "أثاث الفناء", image: "" },
  "Zen Garden": { arabic: "حديقة زن", image: "" },
  Alcove: { arabic: "تجويف", image: "" },
  Banister: { arabic: "درابزين", image: "" },
  Canopy: { arabic: "مظلة", image: "" },
  Doormat: { arabic: "ممسحة أرجل", image: "" },
  Etagere: { arabic: "رف مفتوح", image: "" },
  Futon: { arabic: "فوتون", image: "" },
  "Garden Stool": { arabic: "كرسي حديقة", image: "" },
  "Hall Tree": { arabic: "شماعة مدخل", image: "" },
  "Iron Board": { arabic: "لوح كي", image: "" },
  "Jute Rug": { arabic: "سجادة جوت", image: "" },
  "Key Holder": { arabic: "حامل مفاتيح", image: "" },
  "Ladder Shelf": { arabic: "رف سلم", image: "" },
  "Media Console": { arabic: "كونسول وسائط", image: "" },
  "Napkin Holder": { arabic: "حامل مناديل", image: "" },
  "Ottoman Tray": { arabic: "صينية عثمانية", image: "" },
  Planter: { arabic: "وعاء نباتات", image: "" },
  "Quilt Rack": { arabic: "حامل لحاف", image: "" },
  "Room Divider": { arabic: "فاصل غرف", image: "" },
  "Shoe Rack": { arabic: "رف أحذية", image: "" },
  "Tea Cart": { arabic: "عربة شاي", image: "" },
  "Utility Cart": { arabic: "عربة متعددة الاستخدامات", image: "" },
  "Vanity Stool": { arabic: "كرسي طاولة الزينة", image: "" },
  "Wall Sconce": { arabic: "مصباح جداري", image: "" },
  "Wine Rack": { arabic: "رف نبيذ", image: "" },
  "Xylophone Decor": { arabic: "ديكور زيلوفون", image: "" },
  "Yoga Mat": { arabic: "سجادة يوغا", image: "" },
  "Zebra Rug": { arabic: "سجادة مخططة", image: "" },

  // T Letter Entries
  "Tung Oil Finish": { arabic: "طلاء زيت التونغ", image: "" },
  "Travertine": { arabic: "حجر الترافرتين", image: "" },
  "Terrazzo": { arabic: "تيرازو", image: "" },
  "Tin Ceiling": { arabic: "سقف معدني", image: "" },
  "Textiles": { arabic: "المنسوجات", image: "" },
  "Twill Fabric": { arabic: "قماش التويل", image: "" },
  "Tempered Glass": { arabic: "زجاج مقسى", image: "" },
  "Tile": { arabic: "بلاط", image: "" },
  "Tapestry": { arabic: "نسيج منقوش", image: "" },
  "Teak Wood": { arabic: "خشب الساج", image: "" },
  "Twill": { arabic: "نسج قطري", image: "" },
  "Taffeta": { arabic: "تفتا", image: "" },
  "Ticking": { arabic: "قماش الفرش", image: "" },
  "Tweed": { arabic: "قماش التويد", image: "" },
  "Toile": { arabic: "قماش التويل المطبوع", image: "" },
  "Table Runner": { arabic: "مفرش طاولة طولي", image: "" },
  "Tufted Rugs": { arabic: "سجاد مخملي", image: "" },
  "Tile Mural": { arabic: "جدارية بلاط", image: "" },
  "Throw Blanket": { arabic: "بطانية رمي", image: "" },
  "Transitional": { arabic: "انتقالي", image: "" },
  "Tailored": { arabic: "مفصل", image: "" },
  "Tropical": { arabic: "استوائي", image: "" },
  "Tech-integrated": { arabic: "مدمج التكنولوجيا", image: "" },
  "Trendy": { arabic: "عصري", image: "" },
  "Tuscan": { arabic: "توسكاني", image: "" },
  "Theatrical": { arabic: "مسرحي", image: "" },
  "Textural": { arabic: "ملمسي", image: "" },
  "Timber-based": { arabic: "قائم على الخشب", image: "" },
  "Toile de Jouy": { arabic: "توال دو جوي", image: "" },
  "Tokyo Minimalist": { arabic: "طوكيو البسيط", image: "" },
  "Tudor": { arabic: "تيودور", image: "" },
  "Terra-cotta Style": { arabic: "طراز الطين المحروق", image: "" },
  "Tribal": { arabic: "قبلي", image: "" },
  "Textile Mixing": { arabic: "خلط المنسوجات", image: "" },
  "Thematic Design": { arabic: "تصميم موضوعي", image: "" },
  "Task Lighting": { arabic: "إضاءة المهام", image: "" },
  "Tone-on-tone": { arabic: "درجة على درجة", image: "" },
  "Trompe-l'oeil": { arabic: "خداع البصر", image: "" },
  "Texture Layering": { arabic: "طبقات الملمس", image: "" },
  "Trim Detailing": { arabic: "تفاصيل الزخرفة", image: "" },
  "Traditional": { arabic: "تقليدي", image: "" },
  "Tile Patterning": { arabic: "أنماط البلاط", image: "" },
  "Transitional Style": { arabic: "الطراز الانتقالي", image: "" },
  "Traffic Flow Planning": { arabic: "تخطيط تدفق الحركة", image: "" },

  // Q Letter Entries
  "Quirk Molding": { arabic: "قولبة الأخدود", image: "" },
  "Quilt": { arabic: "لحاف مبطن", image: "" },
  "Quatrefoil": { arabic: "شكل رباعي الفصوص", image: "" },
  "Quirky Pendant Lights": { arabic: "مصابيح معلقة غريبة", image: "" },
  "Queen Sized Bed": { arabic: "سرير كوين", image: "" },
  "Quartz Crystal Chandelier": { arabic: "ثريا كريستال الكوارتز", image: "" },
  "Quilted Leather": { arabic: "جلد مبطن", image: "" },
  "Queen Post Truss": { arabic: "جمالون الملكة", image: "" },
  "Quasi-vaulted Ceilings": { arabic: "أسقف شبه مقببة", image: "" },
  "Quirky Figurines": { arabic: "تماثيل غريبة", image: "" },
  "Quonset Hut Home": { arabic: "منزل كوخ كوانست", image: "" },
  "Quirky Shelving": { arabic: "أرفف غريبة", image: "" },
  "Quirk Groove Paneling": { arabic: "ألواح الأخدود", image: "" },
  "Quadrangular Stool": { arabic: "كرسي رباعي الزوايا", image: "" },
  "Quilt Tufted Sofa": { arabic: "أريكة مبطنة", image: "" },
  "Queen Anne Highboy": { arabic: "خزانة كوين آن العالية", image: "" },
  "Quarter Turn Staircase": { arabic: "درج ربع دورة", image: "" },
  "Quarter Twist Leg": { arabic: "ساق ربع التواء", image: "" },
  "Quoined Legs": { arabic: "أرجل مقواة", image: "" },
  "Quartered Light Panels": { arabic: "ألواح ضوء مقسمة", image: "" },
  "Quaint Vases": { arabic: "مزهريات قديمة الطراز", image: "" },
  "Quilted Ottoman": { arabic: "عثماني مبطن", image: "" },
  "Quadrant Molding": { arabic: "قولبة ربع دائرة", image: "" },
  "Quilted Headboard": { arabic: "رأس سرير مبطن", image: "" },
  "Quatrefoil Mirror": { arabic: "مرآة رباعية الفصوص", image: "" },
  "Quick Assembly Furniture": { arabic: "أثاث سريع التجميع", image: "" },
  "Quercus Wood": { arabic: "خشب البلوط", image: "" },
  "Quoins": { arabic: "أحجار الزاوية", image: "" },
  "Quarry Tiles": { arabic: "بلاط المحجر", image: "" },
  "Quartz Stone": { arabic: "حجر الكوارتز", image: "" },
  "Queen Anne Foot": { arabic: "قدم كوين آن", image: "" },
  "Quarter Paneling": { arabic: "ألواح ربعية", image: "" },
  "Queen Anne Armchair": { arabic: "كرسي بذراعين كوين آن", image: "" },
  "Quirky Wall Art": { arabic: "فن جداري غريب", image: "" },
  "Quirky Rugs": { arabic: "سجاد غريب", image: "" },
  "Quartz Clock": { arabic: "ساعة كوارتز", image: "" },
  "Quartz Lamp": { arabic: "مصباح كوارتز", image: "" },
  "Quirky Chair": { arabic: "كرسي غريب", image: "" },
  "Quilted Fabric": { arabic: "قماش مبطن", image: "" },

   // --- G Words ---
   "Gainsborough chair": { arabic: "كرسي جينزبورو", image: "" },
   "Greek style": { arabic: "النمط اليوناني", image: "" },
   "Gateleg table": { arabic: "طاولة ذات أرجل متحركة", image: "" },
   "Gesso": { arabic: "جيسو", image: "" },
   "Gliding": { arabic: "التذهيب", image: "" },
   "Goncalo alves": { arabic: "خشب الغونسالو ألفيس", image: "" },
   "Girandole": { arabic: "جيراندول", image: "" },
   "Glaze": { arabic: "التزجيج", image: "" },
   "Gobelin stitch": { arabic: "غرزة غوبلين", image: "" },
   "Goblet pleat": { arabic: "طية الكأس", image: "" },
   "Gouache": { arabic: "غواش", image: "" },
   "Grass cloth": { arabic: "ورق الحائط العشبي", image: "" },
   "Grout": { arabic: "الجص", image: "" },
   "Gueridon": { arabic: "غيريدون", image: "" },
   "Glastonbury chair": { arabic: "كرسي جلاستنبري", image: "" },
   "Grandfather clock": { arabic: "ساعة الجد", image: "" },
   "Gallery Wall": { arabic: "جدار المعرض", image: "" },
   "Glass Block": { arabic: "كتلة زجاجية", image: "" },
   "Grille": { arabic: "شبكة", image: "" },
   "Grommet": { arabic: "عين", image: "" },
   "Geometric Pattern": { arabic: "نمط هندسي", image: "" },
   "Gabardine": { arabic: "غاباردين", image: "" },
   "Gadrooning": { arabic: "تزيين مخدد", image: "" },
   "Gothic style": { arabic: "نمط قوطي", image: "" },
   "Galley Kitchen": { arabic: "مطبخ غاليري", image: "" },
   "Galvanized Metal": { arabic: "معدن مجلفن", image: "" },
   "Game Room": { arabic: "غرفة الألعاب", image: "" },
   "Garniture": { arabic: "طقم زينة", image: "" },
   "Gauze Curtain": { arabic: "ستارة شاش", image: "" },
   "Glider": { arabic: "كرسي هزاز انزلاقي", image: "" },
   "Gessoed Frame": { arabic: "إطار مجصص", image: "" },
   "Georgian Style": { arabic: "النمط الجورجي", image: "" },
   "Gold Leaf": { arabic: "ورق الذهب", image: "" },
   "Granite": { arabic: "جرانيت", image: "" },
   "Greige": { arabic: "جريج", image: "" },
   "Glass Tile": { arabic: "بلاط زجاجي", image: "" },
   "Grotto Style": { arabic: "نمط الكهف", image: "" },
   "Granny Chic": { arabic: "أناقة الجدات", image: "" },
   "Glamping Style": { arabic: "نمط التخييم الفاخر", image: "" },
   "Galleria": { arabic: "غاليريا", image: "" },

       // --- O Words ---
    "Oiled Wood Flooring": { arabic: "أرضيات خشبية مزيتة", image: "" },
    "Oxidized Concrete": { arabic: "خرسانة مؤكسدة", image: "" },
    "Oak Flooring": { arabic: "أرضيات البلوط", image: "" },
    "Onyx Flooring": { arabic: "أرضيات العقيق", image: "" },
    "Outdoor Flooring": { arabic: "أرضيات خارجية", image: "" },
    "Ornamental Tile": { arabic: "بلاط زخرفي", image: "" },
    "Overlay Flooring": { arabic: "أرضيات التغطية", image: "" },
    "OSB (Oriented Strand Board)": { arabic: "لوح خشبي مجدول موجه (OSB)", image: "" },
    "Ortta wall finish": { arabic: "تشطيب جدار أورتا", image: "" },
    "Opaque glass wall": { arabic: "جدار زجاجي معتم", image: "" },
    "Organic Textured Wall": { arabic: "جدار ذو نسيج عضوي", image: "" },
    "Outdoor Stucco Finish": { arabic: "تشطيب جبس خارجي", image: "" },
    "Oak (materials)": { arabic: "بلوط (مواد)", image: "" },
    "Onyx (materials)": { arabic: "عقيق (مواد)", image: "" },
    "Outdoor Fabric": { arabic: "قماش خارجي", image: "" },
    "Oriental rugs": { arabic: "سجاد شرقي", image: "" },
    "Oil-Based Paint": { arabic: "طلاء زيتي", image: "" },
    "Oxidized Metal": { arabic: "معدن مؤكسد", image: "" },
    "Open Pore Wood": { arabic: "خشب مسام مفتوحة", image: "" },
    "Olive Green (colors)": { arabic: "أخضر زيتوني (ألوان)", image: "" },
    "Ocean Blue (colors)": { arabic: "أزرق المحيط (ألوان)", image: "" },
    "Orchid Purple (colors)": { arabic: "بنفسجي الأوركيد (ألوان)", image: "" },
    "Oatmeal Beige (colors)": { arabic: "بيج دقيق الشوفان (ألوان)", image: "" },
    "Orange (colors)": { arabic: "برتقالي (ألوان)", image: "" },
    "Ottoman (furniture)": { arabic: "عثماني (أثاث)", image: "" },
    "Office chair (furniture)": { arabic: "كرسي مكتب (أثاث)", image: "" },
    "Office desk (furniture)": { arabic: "مكتب (أثاث)", image: "" },
    "Open Shelving (furniture)": { arabic: "أرفف مفتوحة (أثاث)", image: "" },
    "Occasional Table (furniture)": { arabic: "طاولة جانبية (أثاث)", image: "" },
    "Overbed Table (lighting)": { arabic: "طاولة فوق السرير (إضاءة)", image: "" },
    "Outdoor Furniture (lighting)": { arabic: "أثاث خارجي (إضاءة)", image: "" },
    "Overstuffed Chair (lighting)": { arabic: "كرسي مبطن بالكامل (إضاءة)", image: "" },
    "Ornate Mirror (lighting)": { arabic: "مرآة مزخرفة (إضاءة)", image: "" },
    "Overhead Storage (lighting)": { arabic: "تخزين علوي (إضاءة)", image: "" },
    "Orb Light (lighting)": { arabic: "ضوء الكرة (إضاءة)", image: "" },
    "Overhead Lighting (lighting)": { arabic: "إضاءة علوية (إضاءة)", image: "" },
    "Ottoman Lamp (lighting)": { arabic: "مصباح عثماني (إضاءة)", image: "" },
    "Opal Glass Light (lighting)": { arabic: "ضوء الزجاج الأوبال (إضاءة)", image: "" },
    "Outdoor Lighting (lighting)": { arabic: "إضاءة خارجية (إضاءة)", image: "" },
    "OLED Lighting (lighting)": { arabic: "إضاءة OLED (إضاءة)", image: "" },
    "Open Frame Pendant (lighting)": { arabic: "إضاءة معلقة بإطار مفتوح (إضاءة)", image: "" },
    "Oil Lamp (lighting)": { arabic: "مصباح زيتي (إضاءة)", image: "" },
    "Oyster Light (lighting)": { arabic: "ضوء المحارة (إضاءة)", image: "" },
    "Offset Lighting (lighting)": { arabic: "إضاءة متغيرة (إضاءة)", image: "" },
    "Orchid (plants)": { arabic: "أوركيد (نباتات)", image: "" },
    "Oregano (plants)": { arabic: "أوريجانو (نباتات)", image: "" },
    "Oxalis (plants)": { arabic: "أوكساليس (نباتات)", image: "" },
    "Olive tree (plants)": { arabic: "شجرة الزيتون (نباتات)", image: "" },
    "Organza (fabrics)": { arabic: "أورجانزا (أقمشة)", image: "" },
    "Oilcloth (fabrics)": { arabic: "قماش مشمع (أقمشة)", image: "" },
    "Oxford cloth (fabrics)": { arabic: "قماش أوكسفورد (أقمشة)", image: "" },
    "Organdy (fabrics)": { arabic: "أورجاندي (أقمشة)", image: "" },
    "Ottoman fabric (fabrics)": { arabic: "قماش عثماني (أقمشة)", image: "" },
    "Oriental Brocade (fabrics)": { arabic: "بروكار شرقي (أقمشة)", image: "" },
    "Ornament (decorations)": { arabic: "زينة (ديكورات)", image: "" },
    "Orb Chandelier (decorations)": { arabic: "ثريا الكرة (ديكورات)", image: "" },
    "Oil Diffuser (decorations)": { arabic: "موزع الزيوت (ديكورات)", image: "" },
    "Onyx Decor (decorations)": { arabic: "ديكور العقيق (ديكورات)", image: "" },
    "Ornate Frame (decorations)": { arabic: "إطار مزخرف (ديكورات)", image: "" },


         // --- Y Words ---
    "Yak Wool": { arabic: "صوف الياك", image: "" },
    "Yakisugi": { arabic: "ياكيسوغي", image: "" },
    "Yard Landscaping": { arabic: "تنسيق حدائق", image: "" },
    "Yard Water": { arabic: "عنصر مياه الحدائق", image: "" },
    "Yarn Wall Art": { arabic: "فن جداري من الخيوط", image: "" },
    "Yeast-Derived Textiles": { arabic: "منسوجات مشتقة من الخميرة", image: "" },
    "Yellow Velvet Upholstery": { arabic: "تنجيد مخمل أصفر", image: "" },
    "Yew Wood": { arabic: "خشب الطقسوس", image: "" },
    "Yield": { arabic: "العائد", image: "" },
    "Yin Yang Décor": { arabic: "ديكور الين واليانغ", image: "" },
    "Yoke Ceiling": { arabic: "سقف العارضة", image: "" },
    "Yorkshire Stone": { arabic: "حجر يوركشاير", image: "" },
    "Youthful Design": { arabic: "تصميم شبابي", image: "" },
    "Yucca Wood": { arabic: "خشب اليوكا", image: "" },
    "Yule Tree Wood": { arabic: "خشب شجرة عيد الميلاد", image: "" },
    "Yurt-Inspired Interior": { arabic: "تصميم داخلي مستوحى من اليورت", image: "" },
    "Yuta Grass Baskets": { arabic: "سلال من عشب اليوتا", image: "" },
    "Yuzen Paper": { arabic: "ورق يوزن", image: "" },
  // F Letter Entries
  "Folding Chair": { arabic: "كرسي قابل للطي", image: "" },
  "Foyer Console": { arabic: "كونسول المدخل", image: "" },
  "Folding Screen": { arabic: "شاشة قابلة للطي", image: "" },
  "Folding Table": { arabic: "طاولة قابلة للطي", image: "" },
  "Foot Stool": { arabic: "مسند أقدام", image: "" },
  "Fold Away Bed": { arabic: "سرير قابل للطي", image: "" },
  "Fireside Chair": { arabic: "كرسي المدفأة", image: "" },
  "Futon": { arabic: "فوتون", image: "" },
  "Feather": { arabic: "ريش", image: "" },
  "Fleece": { arabic: "صوف ناعم", image: "" },
  "Fringe": { arabic: "هدب", image: "" },
  "Fustian": { arabic: "قماش فستيان", image: "" },
  "Fabric Panels": { arabic: "ألواح قماش", image: "" },
  "Fabric Wall Sculpture": { arabic: "منحوتة جدارية قماشية", image: "" },
  "Fabric Canopy": { arabic: "مظلة قماشية", image: "" },
  "Fabric Drapes": { arabic: "ستائر قماشية", image: "" },
  "Figurines": { arabic: "تماثيل صغيرة", image: "" },
  "Frames": { arabic: "إطارات", image: "" },
  "Floating Shelves": { arabic: "أرفف عائمة", image: "" },
  "Fretwork": { arabic: "أعمال التفريغ", image: "" },
  "Fire Bowl": { arabic: "وعاء نار", image: "" },
  "Frosted Glass Decor": { arabic: "ديكور زجاج مصنفر", image: "" },
  "Funky Mirrors": { arabic: "مرايا عصرية", image: "" },
  "Fairy Lights": { arabic: "أضواء خيالية", image: "" },
  "Flexible Lighting": { arabic: "إضاءة مرنة", image: "" },
  "Floor Lamp": { arabic: "مصباح أرضي", image: "" },
  "Fiber Optic Lighting": { arabic: "إضاءة الألياف الضوئية", image: "" },
  "Flush Mount Light": { arabic: "مصباح مسطح", image: "" },
  "Frame (Bed Frame)": { arabic: "إطار السرير", image: "" },
  "Filing Cabinet": { arabic: "خزانة ملفات", image: "" },
  "Floating Shelf": { arabic: "رف عائم", image: "" },
  "Fixture": { arabic: "تركيبة إضاءة", image: "" },
  "Fluorescent Light": { arabic: "ضوء فلوريسنت", image: "" },
  "Filament Bulb": { arabic: "مصباح خيطي", image: "" },
  "Flannel": { arabic: "فانيلا", image: "" },
  "Fittings": { arabic: "تجهيزات", image: "" },
  "Foyer": { arabic: "بهو المدخل", image: "" },
  "French Polish": { arabic: "تلميع فرنسي", image: "" },
  "Feng Shui": { arabic: "فنغ شوي", image: "" },
  "Finish": { arabic: "لمسة أخيرة", image: "" },
  "Facade": { arabic: "واجهة", image: "" },
  "Feature Wall": { arabic: "جدار مميز", image: "" },
  "Focal Point": { arabic: "نقطة التركيز", image: "" },
  "French Doors": { arabic: "أبواب فرنسية", image: "" },
  "Frame": { arabic: "إطار", image: "" },
  // --- Z Words ---
      "Z-fold doors": { arabic: "أبواب قابلة للطي على شكل حرف Z", image: "" },
      "Z-frame Windows": { arabic: "نوافذ بإطار على شكل حرف Z", image: "" },
      "Z-shape shelves": { arabic: "أرفف على شكل حرف Z", image: "" },
      "Zany Décor": { arabic: "ديكور غريب الأطوار", image: "" },
      "Zebra Blinds": { arabic: "ستائر زيبرا", image: "" },
      "Zebra pattern": { arabic: "نمط الحمار الوحشي", image: "" },
      "Zebrawood Veneer": { arabic: "قشرة خشب الحمار الوحشي", image: "" },
      "Zellige Mosaic": { arabic: "فسيفساء الزليج", image: "" },
      "Zen garden": { arabic: "حديقة زن", image: "" },
      "Zen Style": { arabic: "نمط الزن", image: "" },
      "Zero gravity chair": { arabic: "كرسي انعدام الجاذبية", image: "" },
      "Zero Threshold Shower": { arabic: "دش بدون عتبة", image: "" },
      "Ziggurat design": { arabic: "تصميم الزقورة", image: "" },
      "Ziggurat Shelving": { arabic: "أرفف الزقورة", image: "" },
      "Zigzag Borders": { arabic: "حدود متعرجة", image: "" },
      "Zigzag pattern": { arabic: "نمط متعرج", image: "" },
      "Zinc alloy": { arabic: "سبيكة الزنك", image: "" },
      "Zinc countertops": { arabic: "أسطح عمل الزنك", image: "" },
      "Zinc roofing": { arabic: "أسقف الزنك", image: "" },

      
       // ---C  Words ---

      "Curtains": { arabic: "ستائر", image: "" },
      "Couch": { arabic: "أريكة", image: "" },
      "Cushions": { arabic: "وسائد", image: "" },
      "Concrete": { arabic: "خرسانة", image: "" },
      "Ceramic": { arabic: "سيراميك", image: "" },
      "Chrome": { arabic: "كروم", image: "" },
      "Contemporary": { arabic: "معاصر", image: "" },
      "Classic": { arabic: "كلاسيكي", image: "" },
      "Coastal": { arabic: "ساحلي", image: "" },
      "Countertop": { arabic: "سطح عمل", image: "" },
      "Credenza": { arabic: "كريدنزا", image: "" },
      "Cornice": { arabic: "كورنيش", image: "" },
      "Ceiling Fan": { arabic: "مروحة سقف", image: "" },
      "Candelabra": { arabic: "شمعدان", image: "" },
      "Canopy Bed": { arabic: "سرير بمظلة", image: "" },
      "Cantilever": { arabic: "كانتيليفر (نظام كابولي)", image: "" },
      "Casement Window": { arabic: "نافذة مفصلية جانبية", image: "" },
      "Chair Rail": { arabic: "حاجز الكرسي", image: "" },
      "Chalk Paint": { arabic: "دهان طباشيري", image: "" },
      "Chintz": { arabic: "شينتز", image: "" },
      "Cladding": { arabic: "تكسية", image: "" },
      "Clawfoot Tub": { arabic: "حوض قدم الأسد", image: "" },
      "Cloisonné": { arabic: "كلوازونيه", image: "" },
      "Cluster Lighting": { arabic: "إضاءة عنقودية", image: "" },
      "Coir": { arabic: "ليف جوز الهند", image: "" },
      "Color Block": { arabic: "كتلة لونية", image: "" },
      "Column": { arabic: "عمود", image: "" },
      "Console Table": { arabic: "طاولة كونسول", image: "" },
      "Cozy": { arabic: "مريح / دافئ", image: "" },
      "Craftsmanship": { arabic: "حرفية", image: "" },
      "Custom Furniture": { arabic: "أثاث مخصص", image: "" },
      "Curated Collection": { arabic: "مجموعة منسقة", image: "" },
      "Curved Furniture": { arabic: "أثاث منحني", image: "" },
      "Cane": { arabic: "قصب (مادة أثاث)", image: "" },
      "Carrara Marble": { arabic: "رخام كرارا", image: "" },
      "Chevron": { arabic: "شيفرون (نمط)", image: "" },
      "Cove Lighting": { arabic: "إضاءة المخفية", image: "" },
      "Crown Molding": { arabic: "كرنيش السقف", image: "" }
};
let currentFilter = null;
let currentView = "grid";

// عرض القاموس
function displayDictionary(words = dictionary) {
  const container = document.getElementById("dictionaryContainer");
  container.innerHTML = "";

  // Apply staggered animation
  let delay = 0;
  const entries = Object.keys(words).sort();

  entries.forEach((english, index) => {
    const word = words[english];
    const card = document.createElement("div");
    card.className = "word-card";
    card.style.animationDelay = `${index * 0.05}s`;

    // Buttons container for better organization
    const buttonsHTML = `
            <div class="buttons-container">
              <button class="edit-btn" onclick="editWord('${english}')">تعديل</button>
              <button class="delete-btn" onclick="deleteWord('${english}')">حذف الكلمة</button>
              ${
                word.image
                  ? `<button class="delete-btn" onclick="deleteImage('${english}')">حذف الصورة</button>`
                  : ""
              }
            </div>
          `;

    card.innerHTML = `
            <h3>${english}</h3>
            <p>${word.arabic}</p>
            ${
              word.image
                ? `<img src="${word.image}" alt="${english}" loading="lazy">`
                : ""
            }
            ${buttonsHTML}
          `;
    container.appendChild(card);
  });
}

// Toggle view between grid and list
function toggleView(view) {
  const container = document.getElementById("dictionaryContainer");
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");

  if (view === "grid") {
    container.className = "dictionary grid-view";
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
    currentView = "grid";
  } else {
    container.className = "dictionary list-view";
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
    currentView = "list";
  }

  // Refresh display to apply new layout
  filterByLetter(currentFilter);
}

// Highlight a word
function highlightWord(english) {
  const cards = document.querySelectorAll(".word-card");
  cards.forEach((card) => {
    if (card.querySelector("h3").textContent === english) {
      card.classList.toggle("highlighted");
    }
  });
}

// البحث عن كلمة
function searchWord() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = Object.fromEntries(
    Object.entries(dictionary).filter(
      ([english]) =>
        english.toLowerCase().includes(query) ||
        dictionary[english].arabic.includes(query)
    )
  );
  displayDictionary(filtered);
}

// إضافة كلمة جديدة
function addWord() {
  const english = document.getElementById("englishInput").value.trim();
  const arabic = document.getElementById("arabicInput").value.trim();
  const imageInput = document.getElementById("imageInput");

  if (english && arabic) {
    // Check if word already exists (prevent duplicates on add)
    if (dictionary[english]) {
      alert(`الكلمة "${english}" موجودة بالفعل.`);
      return;
    }
    if (imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        dictionary[english] = { arabic, image: e.target.result };
        saveAndUpdate();
        resetAddForm(); // Reset form after adding
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      dictionary[english] = { arabic, image: "" };
      saveAndUpdate();
      resetAddForm(); // Reset form after adding
    }
    // Moved resetAddForm inside async/sync branches
    // document.getElementById("englishInput").value = "";
    // document.getElementById("arabicInput").value = "";
    // imageInput.value = "";
  } else {
    alert("يرجى إدخال الكلمة بالإنجليزية والعربية.");
  }
}

// تعديل كلمة (جديد)
function editWord(english) {
  const word = dictionary[english];
  if (!word) return;

  document.getElementById("englishInput").value = english;
  document.getElementById("arabicInput").value = word.arabic;
  document.getElementById("imageInput").value = ""; // Clear file input

  // Disable English input during edit to prevent key change issues
  document.getElementById("englishInput").disabled = true;

  // Change button to "Update"
  const addButton = document.querySelector(".add-section button");
  addButton.textContent = "تحديث الكلمة";
  addButton.onclick = () => updateWord(english); // Pass original key

  // Add a Cancel button if it doesn't exist
  let cancelButton = document.getElementById("cancelEditBtn");
  if (!cancelButton) {
    cancelButton = document.createElement("button");
    cancelButton.id = "cancelEditBtn";
    cancelButton.textContent = "إلغاء التعديل";
    cancelButton.onclick = resetAddForm;
    cancelButton.style.marginLeft = "10px"; // Add some space
    cancelButton.classList.add("cancel-btn"); // Add class for styling
    addButton.parentNode.insertBefore(cancelButton, addButton.nextSibling);
  }
  cancelButton.style.display = "inline-block"; // Ensure it's visible

  // Scroll to the form for better UX
  document.querySelector(".add-section").scrollIntoView({ behavior: "smooth" });
}

// تحديث كلمة (جديد)
function updateWord(originalEnglish) {
  const arabic = document.getElementById("arabicInput").value.trim();
  const imageInput = document.getElementById("imageInput");

  if (arabic) {
    // English input is disabled, so no need to check it
    const currentWord = dictionary[originalEnglish];
    if (!currentWord) return; // Should not happen, but good practice

    if (imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        dictionary[originalEnglish] = { arabic, image: e.target.result };
        saveAndUpdate();
        resetAddForm(); // Reset form after update
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      // Keep existing image if no new one is selected
      dictionary[originalEnglish] = { arabic, image: currentWord.image };
      saveAndUpdate();
      resetAddForm(); // Reset form after update
    }
  } else {
    alert("يرجى إدخال الترجمة بالعربية.");
  }
}

// إعادة تعيين نموذج الإضافة (جديد)
function resetAddForm() {
  document.getElementById("englishInput").value = "";
  document.getElementById("arabicInput").value = "";
  document.getElementById("imageInput").value = "";
  document.getElementById("englishInput").disabled = false; // Re-enable English input

  const addButton = document.querySelector(".add-section button");
  addButton.textContent = "إضافة كلمة جديدة";
  addButton.onclick = addWord;

  // Hide the Cancel button
  const cancelButton = document.getElementById("cancelEditBtn");
  if (cancelButton) {
    cancelButton.style.display = "none";
  }
}

// حذف كلمة
function deleteWord(english) {
  if (confirm(`هل تريد حذف كلمة "${english}"؟`)) {
    delete dictionary[english];
    saveAndUpdate();
  }
}

// حذف صورة فقط
function deleteImage(english) {
  if (confirm(`هل تريد حذف صورة كلمة "${english}"؟`)) {
    dictionary[english].image = "";
    saveAndUpdate();
  }
}

// حفظ البيانات وعرضها
function saveAndUpdate() {
  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  filterByLetter(currentFilter);
  // Consider resetting the form if an edit was in progress but deleted
  // resetAddForm(); // Optional: Reset form after any save? Decide based on UX preference.
}

// إنشاء أزرار الفلترة حسب الحروف
function createLetterFilter() {
  const filterContainer = document.getElementById("letterFilter");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach((letter) => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.textContent = letter;
    btn.onclick = () => filterByLetter(letter);
    filterContainer.appendChild(btn);
  });
  const allBtn = document.createElement("button");
  allBtn.className = "letter-btn";
  allBtn.textContent = "الكل";
  allBtn.onclick = () => filterByLetter(null);
  filterContainer.appendChild(allBtn);
}

// فلترة الكلمات حسب الحرف
function filterByLetter(letter) {
  currentFilter = letter;
  const buttons = document.querySelectorAll(".letter-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  if (letter) {
    const filtered = Object.fromEntries(
      Object.entries(dictionary).filter(([english]) =>
        english.toUpperCase().startsWith(letter)
      )
    );
    displayDictionary(filtered);
    buttons.forEach((btn) => {
      if (btn.textContent === letter) btn.classList.add("active");
    });
  } else {
    displayDictionary();
    buttons[buttons.length - 1].classList.add("active"); // "الكل"
  }
}

// تهيئة الصفحة
createLetterFilter();
displayDictionary();
resetAddForm(); // Ensure form is in 'Add' mode initially

// Add event listener for keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Ctrl+G for Grid View
  if (e.ctrlKey && e.key === "g") {
    e.preventDefault();
    toggleView("grid");
  }
  // Ctrl+L for List View
  if (e.ctrlKey && e.key === "l") {
    e.preventDefault();
    toggleView("list");
  }
});

// --- Back to Top Button Logic ---

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
