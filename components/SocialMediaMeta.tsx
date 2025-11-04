// Server component for additional social media meta tags
export default function SocialMediaMeta() {
  return (
    <>
      {/* LinkedIn Article Sharing */}
      <meta property="article:author" content="https://www.linkedin.com/company/growthlab-sg" />
      <meta property="article:publisher" content="https://www.linkedin.com/company/growthlab-sg" />
      
      {/* Facebook App Links */}
      <meta property="al:web:url" content="https://www.growthlab.sg" />
      <meta property="al:ios:url" content="growthlab://" />
      <meta property="al:ios:app_store_id" content="" />
      <meta property="al:ios:app_name" content="GrowthLab" />
      <meta property="al:android:url" content="growthlab://" />
      <meta property="al:android:package" content="sg.growthlab.app" />
      <meta property="al:android:app_name" content="GrowthLab" />
      
      {/* Pinterest Rich Pins */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta name="pinterest-verification" content="" />
      
      {/* Instagram */}
      <meta name="instagram:site" content="@growthlab.sg" />
      
      {/* WhatsApp Business */}
      <meta name="whatsapp:business" content="+6597371722" />
      
      {/* TikTok */}
      <meta name="tiktok:creator" content="@growthlab.sg" />
      
      {/* Additional Social Media */}
      <meta name="twitter:label1" content="Founded" />
      <meta name="twitter:data1" content="2020" />
      <meta name="twitter:label2" content="Members" />
      <meta name="twitter:data2" content="2,500+" />
      
      {/* Schema.org Social Media Profile */}
      <link rel="me" href="https://www.linkedin.com/company/growthlab-sg" />
      <link rel="me" href="https://www.instagram.com/growthlab.sg" />
      <link rel="me" href="https://x.com/Growthlabsg" />
      <link rel="me" href="https://www.tiktok.com/@growthlab.sg" />
    </>
  )
}

