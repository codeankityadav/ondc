import { rw } from "../Dimension"
import { AntDesign } from "../icons/VectorIcon"
import { COLORS } from "./Colors"
import { IMAGE } from "./Image"
import { ROUTE } from "./Route"

let RESTAURANT = [
    { id: 1, title: "Shubdum Chinese Corner", imgSrc: IMAGE.RESTAURANTS.SHUBDUM_CHINESE_CORNER, desc: `Chinese, North Indian`, location: 'Mumbai', distance: 4.0, rating: 4.5 },
    { id: 2, title: "Domino's Pizza", imgSrc: IMAGE.RESTAURANTS.DOMINOSPIZZA, desc: `Pizzas, Italian`, location: 'Mulund East', distance: 1.0, rating: 4.5 },
    { id: 3, title: "Mani's Cafe", imgSrc: IMAGE.RESTAURANTS.MANIS_CAFE, desc: `Indian`, location: 'Mulund East', distance: 300, rating: 4.5 },
    { id: 4, title: "Meghana Foods", imgSrc: IMAGE.RESTAURANTS.MEGHANA, desc: `Indian`, location: 'Dadar East', distance: 300, rating: 4.5 },
    { id: 5, title: "South Indian Thali", imgSrc: IMAGE.RESTAURANTS.SOUTH_INIDAN_THALI, desc: `Indian`, location: 'Sion East', distance: 300, rating: 4.5 },
    // { id: 1, title: "Manni's Cafe", imgSrc: IMAGE.RESTAURANTS.WHITEDOSA, desc: `Idli, Mendu wada, Maisuri - South Indian` }, 
]

let FOOD = [
    { id: 1, title: "veg manchurian dry", price: 129, imgSrc: IMAGE.FOODS.VEG_MANCHURIAN_DRY, desc: "", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },
    { id: 2, title: "paneer chilli dry", price: 89, imgSrc: IMAGE.FOODS.PANEER_CHILLI_DRY, desc: "Serves 1-2", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },
    { id: 3, title: "chicken manchow soup", price: 69, imgSrc: IMAGE.FOODS.CHICKEN_MANCHOW_SOUP, desc: "Serves 1-2", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },

    { id: 4, title: "Margherita Pizza", price: 120, imgSrc: IMAGE.FOODS.MARGHERITA_PIZZA, desc: "Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },
    { id: 5, title: "Fresh Veggie Pizza", price: 130, imgSrc: IMAGE.FOODS.FRESH_VEGGIE_PIZZA, desc: "Delectable combination of onion & capsicum, a veggie lovers pick", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },
    { id: 6, title: "Farmhouse Pizza", price: 140, imgSrc: IMAGE.FOODS.FARMHOUSE_PIZZA, desc: "Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },


    { id: 7, title: "Sheera", price: 50, imgSrc: IMAGE.FOODS.SHEERA, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 8, title: "Idli ", price: 30, imgSrc: IMAGE.FOODS.IDLI, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 9, title: "Upma", price: 35, imgSrc: IMAGE.FOODS.UPMA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 10, title: "Podi Idli", price: 35, imgSrc: IMAGE.FOODS.PODI_IDLI, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },

    { id: 12, title: "Veg Biryani", price: 160, imgSrc: IMAGE.FOODS.BIRYANI, desc: "Medium Spicy | Serves 1", restaurant: { id: 4, restaurantName: "Meghana Foods" } },
    { id: 13, title: "Biryani 65", price: 180, imgSrc: IMAGE.FOODS.BIRYANI2, desc: "Medium Spicy | Serves 1", restaurant: { id: 4, restaurantName: "Meghana Foods" } },

    { id: 14, title: "Palak Mushroom", price: 180, imgSrc: IMAGE.FOODS.SOUTH_INIDAN_FOOD1, desc: "Medium Spicy | Serves 1", restaurant: { id: 5, restaurantName: "South Indian Thali" } },
    { id: 15, title: "Choco Truffle Cake", price: 180, imgSrc: IMAGE.FOODS.CAKE1, desc: "Switty | Serves 1", restaurant: { id: 5, restaurantName: "Mani's Cafe" } },
    { id: 16, title: "The Almond Fudge Brownie Ice Cream Cake - Dessert", price: 180, imgSrc: IMAGE.FOODS.DESSERT1, desc: "Switty | Serves 1", restaurant: { id: 5, restaurantName: "Mani's Cafe" } },



    // { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    // { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    // { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    // { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    // { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    // { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    // { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },


]



let SORTING = [
    { id: 1, title: "Sort" }
]


let ADDRESS = [
    // {
    //     id: 1,
    //     title: 'Add New',
    //     icon: 'map-marker-radius-outline',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },
    // {
    //     id: 2,
    //     title: 'Office',
    //     icon: 'office-building-marker',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },
    // {
    //     id: 3,
    //     title: 'Use current location',
    //     icon: 'map-marker-circle',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },
    // {
    //     id: 4,
    //     title: 'hotel',
    //     icon: 'home-city-outline',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },

]


let PAYMENT = [
    {
        id: 1,
        title: "MRP Total",
        price: "₹250.00"
    }
]

let ORDERS = [
    { id: 1, status: 'Ordered', preview: "Arriving by april 26", total: 10 },
    { id: 2, status: 'Delivered', preview: "Arriving by May 20", total: 5 },
    { id: 3, status: 'Arriving Today', preview: "Arriving by Jun 12", total: 9 },
    { id: 4, status: 'Cancelled', preview: "Cancelled on July 25", total: 2 },
    { id: 5, status: 'Delivered', preview: "Arriving by May 20", total: 5 },
    { id: 6, status: 'Arriving Today', preview: "Arriving by Jun 12", total: 9 },
    { id: 7, status: 'Cancelled', preview: "Cancelled on July 25", total: 2 },
];

let ORDERS_LINKS = [
    { id: 1, title: 'My Orders', navigateTo: ROUTE.ORDERS, icon: <AntDesign name="profile" size={rw(6)} color={COLORS.LIGHT_BLUE} /> },
    { id: 2, title: 'Delivery Address', navigateTo: ROUTE.ADDRESS, icon: <AntDesign name="fork" size={rw(6)} color={COLORS.LIGHT_BLUE} /> },
    // { id: 3, title: 'Sign Out', navigateTo: ROUTE.HOME_DRAWER, icon: <AntDesign name="logout" size={rw(6)} color={COLORS.LIGHT_BLUE} /> },
]

let CATEGORY = [
    { id: 1, title: 'Biryani', navigateTo: "", imgSrc: IMAGE.CATEGORIES.BIRYANI, },
    { id: 2, title: 'Pizza', navigateTo: "", imgSrc: IMAGE.CATEGORIES.PIZZAS, },
    { id: 3, title: 'South Indian', navigateTo: "", imgSrc: IMAGE.CATEGORIES.SOUTH_INIDAN, },
    { id: 4, title: 'Burger', navigateTo: "", imgSrc: IMAGE.CATEGORIES.BURGER, },
    { id: 5, title: 'Chinese', navigateTo: "", imgSrc: IMAGE.CATEGORIES.CHINESE, },
    { id: 6, title: 'Cake', navigateTo: "", imgSrc: IMAGE.CATEGORIES.CAKE, },
    { id: 7, title: 'Dessert', navigateTo: "", imgSrc: IMAGE.CATEGORIES.DESSERT, },
    { id: 8, title: 'North Indian', navigateTo: "", imgSrc: IMAGE.CATEGORIES.NORTH_INDIAN, },
    { id: 9, title: 'Sandwich', navigateTo: "", imgSrc: IMAGE.CATEGORIES.SANDWICH, },
]

const PRIVACY_POLICY = [
    {
        id : 1,
        title: `PRIVACY POLICY`,
        desc: <>This app under the domain of https://ondc-food.netlify.app/ and all other sub-domains under the
            top level URL are operated by ONDC India, hereby referred to as “ondc india”
            We take your privacy very seriously and we ask that you read this privacy policy carefully as it
            contains important information on:
            the personal information we collect about you
            what we do with your information, and
            who your information might be shared with.
            We may change this privacy policy from time to time. You should check this policy occasionally
            to ensure you are aware of the most recent version that will apply each time you access this
            app.</>
    },
    {
        id : 2,
        title: `Who we are`,
        desc: <>ondc ('we' or 'us') are a 'data controller' for the purposes of the Personal Data Protection
            Act (PDPA) and any subsequent Inida data protection legislation and we are responsible for, and
            control the processing of, your personal information.</>
    },
    {
        id : 3,
        title: `Who does this privacy policy apply to?`,
        desc: <>This privacy policy applies to visitors to our online ordering app and those who contact us
            via our app or any of the contact methods specified on it or place an order for a product(s).</>
    },
    {
        id : 4,
        title: `What information do we collect and process?`,
        desc: <>Personal information provided by you
            During the course of accessing our app, contacting us, or otherwise dealing with us, you
            may provide us with a range of personal data which we will use in the course of our business.
            This personal information may include:
            Your name or another unique identifier;
            Your address, lat/long information;
            Your age and/or date of birth;
            Your contact details (which may include your landline telephone number, mobile
            number, and/or email address);
            Payment or other financial details (e.g. payment card information, bank information);
            Professional information 1(e.g. job id : ,
            title and/or type, professional qualifications, industry);
            and
            Other related information.</>
    },
    {
        id : 5,
        title: `Information we collect automatically`,
        desc: <>Our app may collect certain information about you automatically (such as your IP address,
            geographical location, browser type and version, operating system).</>
    },
    {
        id : 6,
        title: `Personal information provided by third parties`,
        desc: <>Occasionally we may receive information about you from other sources (such as our suppliers,
            customers, or group companies), which we will add to the information we already hold about
            you in order to help us operate our business effectively.</>
    },
    {
        id : 7,
        title :`Personal information about other individuals`,
        desc: <>If you give us information on behalf of someone else, you confirm that the other person has
            appointed you to act on his/her behalf and has agreed that you can:
            transfer the personal data and give consent on his/her behalf to the processing of his/her
            personal data;
            receive on his/her behalf any data protection notices;
            give consent to the transfer of his/her personal data abroad; and
            give consent to the processing of his/her sensitive personal data (if applicable).</>
    },
    {
        id : 8,
        title: `How we use your data and our legal basis for processing your data.`,
        desc: <>We may process your data for a variety of reasons, including to:
            display the app and its functionality and enable your interaction with it;
            provide content, communications or information you request;
            fulfill your order for a product and deal with any customer support issues;
            respond to a request, order, enquiry or complaint you may have;
            customize our app and its content to your particular preferences; and
            improve our app and services.
            In some instances, we will rely on your consent to process personal data and where we do this,
            it will be flagged to you at the time.
            When we use your personal information we are required to have a legal basis for doing so.
            There are various different legal bases upon which we may rely, depending on what personal
            information we process and why.
            The legal bases we may rely on include:
            consent: where you have given us clear consent for us to process your personal
            information for a specific purpose;
            contract: where our use of your personal information is necessary for a contract we have
            with you, or because you have asked us to take specific steps before entering into a
            contract;
            legal obligation: where our use of your personal information is necessary for us to
            comply with the law (not including contractual obligations); or
            legitimate interests: where our use of your personal information is necessary for our
            legitimate interests or the legitimate interests of a third party (unless there is a good
            reason to protect your personal information which overrides our legitimate interests).</>
    },
    {
        id : 9,
        title: `Storage of your information and who your information might be shared with`,
        desc: <>We store your personal data relating to the use of the site and purchase of products on third
            party servers.
            We may disclose your personal data to:
            our online ordering platform merchants to the extent necessary for us to provide you with
            access to purchase products. We will only share your data subject to a contract requiring
            them to process your personal data in accordance with the requirements prescribed by
            data protection law (and they may also transfer your personal data to their
            subcontractors and suppliers to the extent necessary to provide the services to us for
            your benefit);
            other companies within our group to the extent that there is a legitimate interest in doing
            so to support our business aims;
            our other agents and service providers, to the extent that they require access to the data
            in order to provide goods/services to us, in which case they will be bound by a contract
            requiring them to process personal data in accordance with the requirements prescribed
            by data protection law;
            law enforcement agencies in connection with any investigation to help prevent unlawful
            activity; and
            a third party purchaser if we sell our business, in which case, customer and user
            information will be a transferred asset.
        </>
    },
    {
        id : 10,
        title: `Keeping your data secure`,
        desc: <>We will use technical and organizational measures to safeguard your personal data in
            accordance with the law. While we will use all reasonable efforts to safeguard your personal
            data, you acknowledge that the use of the internet is not entirely secure and for this reason we
            cannot guarantee the security or integrity of any personal data that are transferred from you or
            to you via the internet. If you have any particular concerns about your information, please
            contact us (see ‘How to contact us’ below).</>
    },
    {
        id : 11,
        title: `Transfers of your information out of India`,
        desc: <>We may need to transfer your personal data outside India (for example to Facebook to
            process a facebook login). We will only do this if appropriate safeguards are placed in
            accordance with data protection legislation.</>
    },
    {
        id : 12,
        title: `How long do we keep your personal information?
        `,
        desc: <>We keep your personal information for as long as we need to for the purposes for which it was
            collected or (if longer) for any period for which we are required to keep personal information to
            comply with our legal and regulatory requirements.</>
    },
    {
        id : 13,
        title: `How can you delete you personal information ?            `,
        desc: <>You may request your account deletion request via our app at
             ankit.rama.yadav@gmail.com</>
    },
    {
        id : 14,
        title: `Important Note about account deletion`,
        desc: <>Please note that ondc uses a multi-channel
            user login system. In case you have used multiple brands across multiple channels (such as
            LINE, Google, Web, Facebook) – please list all the potential email addresses and phone
            number(s) that you have used to access our services. Please be very specific in your message,
            as to which specific account / all account(s) are you requesting your deletion for. In case your
            email is the same across all channels, your account information is automatically unified in our
            system. In this case, requesting to delete a “Facebook account” may result in irreversible
            deletion of all related accounts. Once deleted, your account information will be forever lost to
            the darkness of the universe. Upon receiving your request, you account will be immediately
            deactivated and all personal information will be removed in 5-7 business days</>
    },
    {
        id : 15,
        title: `What rights do you have?`,
        desc: <>You are responsible for ensuring that information you provide to us is accurate, complete and
            up-to-date. You can review and change your information by contacting us.
            You have a number of rights in relation to your personal data, these include the right to:
            find out how we process your data;
            request that your personal data is corrected if you believe it is incorrect or inaccurate;
            obtain restriction on our, or object to, processing of your personal data;
            if we are relying on consent, you can withdraw your consent to our processing of your
            personal data (including any direct marketing);
            if we are relying on legitimate interests for direct marketing, you can object to receiving
            such direct marketing;
            obtain a copy of the personal data we process concerning you. We will take steps to
            verify your identity before responding to your request. Once we have verified your
            identity we will respond as soon as possible and in any event within one month.
            If you would like to exercise any of your rights or find out more, please contact us via
              ankit.rama.yadav@gmail.com</>
    },
    {
        id : 16,
        title: `Changes to this Privacy Policy`,
        desc: <>We may change this Privacy Policy from time to time, and if we do so we will highlight any
            changes to these pages. If you continue to access or use our services after notified changes
            have come into effect, you will have agreed to the revised policy.</>
    },
    {
        id : 17,
        title: `How to contact us`,
        desc: <>If you have any questions about this privacy policy or the information we hold about you, please
            contact us at :   ankit.rama.yadav@gmail.com</>
    }
]

const TERMS = [
    {
        id : 1,
        title: "LEGAL AGREEMENT",
        desc: <>These are the terms and conditions (“Terms”) that govern your use of this app and any
            purchase of a Product (“Food Delivery or Pickup”).
            This forms a legal agreement between you, the user of the app and purchaser of any
            Product(s), and ONDC India ( “we”, “us”, “our”) and you must agree to these Terms in
            order to purchase a Product(s)
            If you do not accept these Terms, you should not make any further use of this app and you
            will not be able to purchase a Product(s).</>
    },
    {
        id : 2,
        title: `ORDERING A PRODUCT(S)`,
        desc: <>The app enables you to purchase a Product(s) from our merchants, NOT us. You should
            ensure that, prior to submitting an order, you review the details of the Product(s), including any
            conditions and exclusions of the Product(s). Those conditions and exclusions apply in addition
            to these Terms.
            Please check your order carefully before submitting it. You can correct errors before submitting
            the order. Submission of the order constitutes an offer to purchase the Product(s) from us,
            subject to these Terms. You undertake that all details you provide are correct, that the payment
            card or bank account is your own and that there are sufficient funds to cover the cost of the
            Product(s) ordered.
            We may contact you to say that we do not accept your order. This is typically where the
            Product(s) are not available, we cannot authorize your payment, you are not eligible to purchase
            the Product(s), or there has been a mistake in the pricing or description of the Product(s).
            We will only accept your order when we email you to confirm this. At this point, a binding legal
            contract will be in place between you and the merchant. You should check that the details in the
            confirmation are correct and notify us immediately if there is any error.</>
    },
    {
        id : 3,
        title: `PAYMENT`,
        desc: <>We accept payment by credit or debit card (Visa, Mastercard, or American Express) or QR
            Cash Promptpay. Payments are processed via our nominated third party payment processor.
            Your payments are DIRETLY remitted to the merchant you are purchasing food from. You are
            NOT paying us. We will not issue the Product(s) to you unless and until full payment is received. If we are
            unable to authorize your payment, we will use reasonable efforts to notify you and give you the
            opportunity to rectify the issue. If we are unable to do so, we will cancel the order.</>
    },
    {
        id : 4,
        title: `ISSUING & DELIVERING PRODUCT(S)`,
        desc: <>We, or our nominated third party logistics (3PL) providers shall deliver the Product(s) to you at
            the delivery address specified in the order. This is typically done within one (1) hour of us
            confirming acceptance of your order under normal weather conditions.
            If you do not receive your Product(s) within two (2) hours of our confirmation, you may contact
            us via the details shown on the app or in the confirmation, and we will do our best to
            investigate and assist.
            All Products are non-refundable and non-transferable unless otherwise agreed by the merchant. </>
    },
    {
        id : 5,
        title: `LIABILITY`,
        desc: <>Nothing in this agreement shall limit or exclude the Seller’s liability for death or personal injury
            caused by its negligence, fraud or fraudulent misrepresentation, or in relation to any liability
            which by law may not be limited or excluded.
            This app and the Products are available for personal use only and accordingly, the Seller
            shall not be liable for any business losses, including any loss of profits, business, revenue,
            goodwill, savings, anticipated savings (whether direct or indirect). The Seller shall not be liable
            for any indirect or consequential losses howsoever caused.</>
    },
    {
        id : 6,
        title: `INTELLECTUAL PROPERTY RIGHTS`,
        desc: <>The app and all content, images and materials published on it is protected by copyright and
            other intellectual property rights and laws. You may access and use the app for personal
            purposes only and not for any other purpose. None of the content may be downloaded, copied,
            reproduced, transmitted, sold or distributed for any commercial purposes without our prior
            written consent.</>
    },
    {
        id : 7,
        title: `ASSIGNATION`,
        desc: <>You may not assign, sub-licence or otherwise transfer any of your rights under these Terms
            without our prior written consent. Your privacy is important to us and we are committed to maintaining the privacy of any personal
            information received from you. We comply with Inidan’s data protection legislation, including
            the Personal Data Protection Act (PDPA).
            By using our app and purchasing a Product(s), you agree that you have read and accepted
            our privacy policy, available at https://ondc-food.netlify.app/ .
        </>
    },
    {
        id : 8,
        title: `How can you delete you personal information ?`,
        desc: <>You may request account deletion via https://ondc-food.netlify.app/  </>
    },
    {
        id : 9,
        title: `Important Note about account deletion`,
        desc: <>Please note that ondc uses a multi-channel
            user login system. In case you have used multiple brands across multiple channels (such as
            LINE, Google, Web, Facebook) – please list all the potential email addresses and phone
            number(s) that you have used to access our services. Please be very specific in your message,
            as to which specific account / all account(s) are you requesting your deletion for. In case your
            email is the same across all channels, your account information is automatically unified in our
            system. In this case, requesting to delete a “Facebook account” may result in irreversible
            deletion of all related accounts. Once deleted, your account information will be forever lost to
            the darkness of the universe. Upon receiving your request, you account will be immediately
            deactivated and all personal information will be removed in 5-7 business days.</>
    },
    {
        id : 10,
        title: `GENERAL`,
        desc: <>Whilst reasonable efforts are used to ensure that the app is complete and accurate and
            made available at all times, the app is provided “as is” and without any warranties or
            guarantees. In particular, we do not warrant that the app will always be available or will be
            error-free. We may alter or revoke access to the app at any time.
            If any or the provisions of these Terms are held invalid, illegal or unenforceable for any reason
            by any court or competent jurisdiction, such provision shall be severed and the remainder of the
            provisions hereof shall continue in full force and effect as if the Terms had been accepted with
            the invalid illegal or unenforceable provision eliminated.
            We shall not be liable for any delay or failure to perform any of the obligations under these
            Terms if such delay or failure is due to any cause or circumstances beyond our reasonable
            control.
            We may vary these terms and conditions from time to time by publishing the varied terms on the
            app, provided that this shall not apply to any Products already purchased.
            These terms and our contract with you shall be governed by and construed in accordance with
            the laws of Inidan. Any disputes arising out of or in connection with this agreement shall be
            subject to the non-exclusive jurisdiction of the Inidan courts.</>
    }
]

export {
    RESTAURANT,
    FOOD,
    CATEGORY,
    SORTING,
    ADDRESS,
    PAYMENT,
    ORDERS,
    ORDERS_LINKS,
    PRIVACY_POLICY,
    TERMS
}