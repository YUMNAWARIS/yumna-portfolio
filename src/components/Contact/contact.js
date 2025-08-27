// src/data/contact.js
import { FiGithub, FiLinkedin, FiTwitter, FiGlobe } from "react-icons/fi";
import { SiMedium, SiKaggle, SiCoursera, SiUdemy, SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

export const CONTACT = {
    email: "yumnaahwaris@gmail.com",
    phone: "+92 335 6910909",
    socials: [
        { name: "GitHub", url: "https://github.com/yumnawaris", icon: FiGithub },
        { name: "Kaggle", url: "https://kaggle.com/yumnawaris", icon: SiKaggle },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yumna-waris-8416451a5/", icon: FiLinkedin },
        { name: "Medium", url: "https://medium.com/@yumnaahwaris", icon: SiMedium },

        { name: "Coursera", url: "https://www.coursera.org/user/85a7da3566159e08061efacef9258118", icon: SiCoursera },
        { name: "Udemy", url: "https://www.udemy.com/user/yumna-waris/", icon: SiUdemy },

        { name: "Facebook", url: "https://www.facebook.com/yumna.waris.16", icon: SiFacebook },
        { name: "Instagram", url: "https://www.instagram.com/yumna_waris/", icon: SiInstagram },
        { name: "X", url: "https://x.com/waris_yumna", icon: SiTwitter },

    ],
};