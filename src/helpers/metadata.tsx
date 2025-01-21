export default function MetaData(meta: {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}) {
  let image = meta.image;
  if (!image) image = "/images/siteLogo.png";
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
      images: [image],
    },
    openGraph: {
      url: "https://phonico.com",
      siteName: "Phonico",
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: image,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    appLinks: {
      ios: {
        url: "https://apps.apple.com/app/id6468944607",
        app_store_id: "6468944607",
      },
      android: {
        package:
          "https://play.google.com/store/apps/details?id=com.activatewireless.phonico&hl=en&gl=US",
        app_name: "Phonico: Prepaid eSIM USA",
      },
    },
    icons: {
      icon: "/images/siteLogo.png",
    },
    // themeColor: "#F9AF94",
    authors: [{ name: "Phonico" }],
    facebook: {
      appId: "993540688594148",
    },
  };
}
